import React from 'react'
import { Table } from 'reactstrap'

import PropertyRow from './PropertyRow'

const PropertiesTable = props => {
  return (
    <Table>
      <thead>
        <tr>
          <th />
          <th>Name</th>
          <th>Description</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {props.properties.map((property, index) =>
          <PropertyRow property={property} key={property.id} onEdit={props.onEdit} />
        )}
      </tbody>
    </Table>
  )
}

export default PropertiesTable
