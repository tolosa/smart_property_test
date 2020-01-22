import React, { useState, useEffect } from 'react'
import axios from 'axios'

import PropertiesTable from './PropertiesTable'

const PropertiesContainer = props => {
  const [allProperties, setAllProperties] = useState([])
  const [filtered, setFiltered] = useState([])
  const [filter, setFilter] = useState(false)

  useEffect(() => {
    axios
      .get('/properties')
      .then(response =>
        setAllProperties(response.data))
  }, [])

  useEffect(() => {
    setFiltered(filterProperties(allProperties))
  }, [allProperties, filter])

  const filterProperties = (properties) =>
    properties.filter(property => property.archived == filter)

  const onFilterChange = (e) => {
    setFilter(e.target.value)
  }

  return (
    <div className="container">
      <div className="form-inline my-4">
        <label className="mr-2" htmlFor="selectStatus">Show</label>
        <select className="custom-select" onChange={onFilterChange} id="selectStatus">
          <option value={0}>Unarchived</option>
          <option value={1}>Archived</option>
        </select>
      </div>
      <PropertiesTable properties={filtered} />
    </div>
  )
}

export default PropertiesContainer
