import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import UnitsTable from './UnitsTable'
import UnitsToggler from './UnitsToggler'

const PropertyRow = props => {
  const [showUnits, setShowUnits] = useState(false)

  const onClickUnits = (e) => {
    e.preventDefault()
    setShowUnits(!showUnits)
  }

  const onEdit = index => {
    props.onEdit(props.property.id, index)
  }

  const onArchiveOrRestore = e => {
    e.preventDefault()
    props.onArchiveOrRestore(props.property.id)
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
        <td className="archive-restore" onClick={onArchiveOrRestore}>
          {props.property.archived ? 'Restore' : 'Archive'}
        </td>
      </tr>
      <tr>
        { showUnits &&
          <td colSpan="4">
            <UnitsTable units={props.property.units} onEdit={onEdit} />
          </td>
        }
      </tr>
    </>
  )
}

PropertyRow.propTypes = {
  property: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onArchiveOrRestore: PropTypes.func.isRequired
}

export default PropertyRow
