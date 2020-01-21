import React from 'react'

import UnitsTable from './UnitsTable'

const PropertyRow = props => {
  return (
    <>
      <tr>
        <td>{props.property.name}</td>
        <td>{props.property.description}</td>
        <td>{props.property.address}</td>
      </tr>
      <tr>
        <td colSpan="3">
          <UnitsTable units={props.property.units} />
        </td>
      </tr>
    </>
  )
}

export default PropertyRow
