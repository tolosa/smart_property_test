import React from 'react'

const PropertyRow = props => {
  return (
    <tr>
      <td>{props.property.name}</td>
      <td>{props.property.description}</td>
      <td>{props.property.address}</td>
    </tr>
  )
}

export default PropertyRow
