import React, { useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Button, Spinner } from 'reactstrap'

import { fetchProperties, updateUnit } from '../../store/actions'
import { selectAllProperties, selectLoading } from '../../store/selectors'
import PropertiesTable from './PropertiesTable'
import UnitModal from '../UnitModal'

const PropertiesContainer = props => {
  const [allProperties, setAllProperties] = useState([])
  const [filtered, setFiltered] = useState([])
  const [filter, setFilter] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [propertyId, setPropertyId] = useState(null)
  const [editingItem, setEditingItem] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProperties())
  }, [])

  useEffect(() => {
    setAllProperties(props.properties)
  }, [props.properties])

  useEffect(() => {
    setFiltered(filterProperties(allProperties))
  }, [allProperties, filter])

  const filterProperties = (properties) =>
    properties.filter(property => property.archived == filter)

  const onFilterChange = (e) => {
    setFilter(e.target.value)
  }

  const toggleModal = () => {
    if (openModal) {
      setPropertyId(null)
      setEditingItem(null)
    }
    setOpenModal(!openModal)
  }

  const onEditUnit = (id, index) => {
    const property = filtered.find(property => property.id === id)
    const unit = property.units[index]
    setPropertyId(property.id)
    setEditingItem(unit)
    toggleModal()
  }

  const onUpdateUnit = updatedUnit => {
    dispatch(updateUnit(propertyId, updatedUnit))
    toggleModal()
  }

  return (
    <Container>
      <div className="form-inline my-4">
        <label className="mr-2" htmlFor="selectStatus">Show</label>
        <select className="custom-select" onChange={onFilterChange} id="selectStatus">
          <option value={0}>Unarchived</option>
          <option value={1}>Archived</option>
        </select>
        <Link to="/new-property">
          <Button color="info">+ ADD PROPERTY</Button>
        </Link>
      </div>
      {props.loading ? <Spinner />
        : <PropertiesTable properties={filtered} onEdit={onEditUnit} />
      }
      <UnitModal 
        data={editingItem}
        open={openModal}
        toggle={toggleModal}
        onSave={onUpdateUnit}
      />
    </Container>
  )
}

const mapStateToProps = state => ({
  loading: selectLoading(state),
  properties: selectAllProperties(state)
})

export default connect(mapStateToProps)(PropertiesContainer)
