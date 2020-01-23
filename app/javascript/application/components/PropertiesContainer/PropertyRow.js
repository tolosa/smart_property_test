import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import UnitsTable from './UnitsTable'
import UnitsToggler from './UnitsToggler'

const PropertyRow = props => {
  const [showUnits, setShowUnits] = useState(false)

  const onClickUnits = (e) => {
    e.preventDefault()
    setShowUnits(!showUnits)
  }

  return (
    <>
      <tr>
        <td>
          <UnitsToggler
            unitsCount={props.property.units.length}
            expanded={showUnits}
            onClick={onClickUnits}
          />
        </td>
        <td>
          <Link to={`/properties/${props.property.id}/edit`}>
            {props.property.name}
          </Link>
        </td>
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
