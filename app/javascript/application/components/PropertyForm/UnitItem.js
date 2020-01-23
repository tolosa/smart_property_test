import React from 'react'
import PropTypes from 'prop-types'

import './style'

const UnitItem = ({ unit, index, isEdit, onEdit, onRemove }) => {
  const editUnit = (e, index) => {
    e.preventDefault()
    onEdit(index)
  }

  const removeUnit = (e, index) => {
    e.preventDefault()
    onRemove(index)
  }

  return (
    <tr>
      <td>{unit.number}</td>
      <td>{unit.area}</td>
      <td className="actions">
        <i className="fa fa-lg fa-pencil text-success" onClick={e => editUnit(e, index)} />
        <i className="fa fa-lg fa-trash text-danger" onClick={e => removeUnit(e, index)} />
      </td>
    </tr>
  )
}

UnitItem.propTypes = {
  unit: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  isEdit: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
}

export default UnitItem
