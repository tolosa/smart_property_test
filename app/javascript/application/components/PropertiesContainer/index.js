import React, { useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Button, Spinner, Input } from 'reactstrap'

import {
  fetchProperties,
  updateUnit,
  archiveProperty,
  restoreProperty,
  searchProperty
} from '../../store/actions'
import { selectAllProperties, selectLoading } from '../../store/selectors'
import PropertiesTable from './PropertiesTable'
import UnitModal from '../UnitModal'
import ConfirmModal from '../ConfirmModal'

import './style'

const PropertiesContainer = props => {
  const [allProperties, setAllProperties] = useState([])
  const [filtered, setFiltered] = useState([])
  const [filter, setFilter] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [propertyId, setPropertyId] = useState(null)
  const [editingItem, setEditingItem] = useState(null)
  const [confirmModalOpen, setConfirmModalOpen] = useState(false)
  const [propertyAchived, setPropertyArchived] = useState(null)
  const [searchField, setSearchField] = useState('')
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

  const toggleConfirmModal = () => {
    if (confirmModalOpen) {
      setPropertyArchived(null)
    }
    setConfirmModalOpen(!confirmModalOpen)
  }

  const onArchiveRestoreAction = id => {
    const property = filtered.find(property => property.id === id)
    setPropertyArchived(property)
    toggleConfirmModal()
  }

  const archiveOrRestore = () => {
    if (!propertyAchived.archived) {
      dispatch(archiveProperty(propertyAchived.id))
    } else {
      dispatch(restoreProperty(propertyAchived.id))
    }
    setPropertyArchived(null)
    toggleConfirmModal()
  }

  const onSearchChange = e => {
    setSearchField(e.target.value)
  }

  const onSearchSubmit = e => {
    e.preventDefault()
    dispatch(searchProperty(searchField))
  }

  const onSearchClear = e => {
    e.preventDefault()
    dispatch(fetchProperties())
  }

  return (
    <Container>
      <div className="form-inline my-4 panel">
        <div className="left-panel">
          <label className="mr-2" htmlFor="selectStatus">Show</label>
          <select className="custom-select margin-right" onChange={onFilterChange} id="selectStatus">
            <option value={0}>Unarchived</option>
            <option value={1}>Archived</option>
          </select>
          <div>
            <Input
              type="text"
              placeholder="Search Property"
              onChange={onSearchChange}
            />
            {searchField === '' ? <Button color="info" disabled>Search</Button> : <Button color="info" onClick={onSearchSubmit}>Search</Button>}
            <Button onClick={onSearchClear}>Clear</Button>
          </div>
        </div>
        <Link to="/new-property">
          <Button color="primary">+ ADD PROPERTY</Button>
        </Link>
      </div>
      {props.loading ? <Spinner />
        : <PropertiesTable properties={filtered} onEdit={onEditUnit} onArchiveOrRestore={onArchiveRestoreAction} />
      }
      <UnitModal
        data={editingItem}
        open={openModal}
        toggle={toggleModal}
        onSave={onUpdateUnit}
      />
      <ConfirmModal
        open={confirmModalOpen}
        toggle={toggleConfirmModal}
        onAction={archiveOrRestore}
      />
    </Container>
  )
}

const mapStateToProps = state => ({
  loading: selectLoading(state),
  properties: selectAllProperties(state)
})

export default connect(mapStateToProps)(PropertiesContainer)
