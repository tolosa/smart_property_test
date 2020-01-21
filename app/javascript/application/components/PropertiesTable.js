import React from 'react'

import PropertyRow from './PropertyRow'

const PropertiesTable = props => {
  return (
    <table className="table mt-5">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {props.properties.map((property, index) =>
          <PropertyRow property={property} key={property.id} />
        )}
      </tbody>
    </table>
  )
}

export default PropertiesTable
