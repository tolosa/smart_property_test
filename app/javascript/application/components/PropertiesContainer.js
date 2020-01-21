import React,  { useState, useEffect } from 'react'
import axios from 'axios'

import PropertiesTable from './PropertiesTable'

const PropertiesContainer = props => {
  const [properties, setProperties] = useState([])

  useEffect(() => {
    axios
      .get('/mockup.json')
      .then(response => {
        setProperties(response.data)
      })
  }, [])

  return(
    <div className="container">
      <PropertiesTable properties={properties} />
    </div>
  )
}

export default PropertiesContainer
