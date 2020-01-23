import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'reactstrap'

import PropertyRow from './PropertyRow'

const PropertiesTable = props => {
  const onArchiveOrRestore = propertyId => {
    props.onArchiveOrRestore(propertyId)
  }

  return (
    <Table>
      <thead>
        <tr>
          <th />
          <th>Name</th>
          <th>Description</th>
          <th>Address</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {props.properties.map(property =>
          <PropertyRow
            property={property}
            key={property.id}
            onEdit={props.onEdit}
            onArchiveOrRestore={onArchiveOrRestore}
          />
        )}
      </tbody>
    </Table>
  )
}

PropertiesTable.propTypes = {
  properties: PropTypes.array.isRequired,
  onArchiveOrRestore: PropTypes.func.isRequired
}

export default PropertiesTable
