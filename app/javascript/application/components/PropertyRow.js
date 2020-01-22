import React, { useState } from 'react'

import UnitsTable from './UnitsTable'

const PropertyRow = props => {
  const [showUnits, setShowUnits] = useState(false)
  const icon = showUnits ? 'fa-minus-square' : 'fa-plus-square'

  const onClickUnits = (e) => {
    e.preventDefault()
    setShowUnits(!showUnits)
  }

  return (
    <>
      <tr>
        <td>
          <a href="#" onClick={onClickUnits}>
            <i className={`fa mr-1 ${icon}`}></i>
            Units
            <small className="text-muted ml-1">({props.property.units.length})</small>
          </a>
        </td>
        <td>{props.property.name}</td>
        <td>{props.property.description}</td>
        <td>{props.property.address}</td>
      </tr>
      <tr>
        { showUnits &&
          <td colSpan="4">
            <UnitsTable units={props.property.units} />
          </td>
        }
      </tr>
    </>
  )
}

export default PropertyRow
