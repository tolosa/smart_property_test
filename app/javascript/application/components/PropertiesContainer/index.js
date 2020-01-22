import React, { useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Button, Spinner } from 'reactstrap'

import { fetchProperties } from '../../store/actions'
import { selectAllProperties, selectLoading } from '../../store/selectors'
import PropertiesTable from './PropertiesTable'

const PropertiesContainer = props => {
  const [allProperties, setAllProperties] = useState([])
  const [filtered, setFiltered] = useState([])
  const [filter, setFilter] = useState(false)
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
        : <PropertiesTable properties={filtered} />
      }
    </Container>
  )
}

const mapStateToProps = state => ({
  loading: selectLoading(state),
  properties: selectAllProperties(state)
})

export default connect(mapStateToProps)(PropertiesContainer)
