import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const UnitItem = ({ unit, index, onEdit, onRemove }) => {
  const editUnit = (e, index) => {
    e.preventDefault()
    onEdit(index)
  }

  const removeUnit = (e, index) => {
    e.preventDefault()
    onRemove(index)
  }

  return (
    <div className="unit-form">
      <p>#{unit.number}</p>
      <p>{unit.area}</p>
      <div className="icon-panel">
        <i className="fa fa-pencil" onClick={e => editUnit(e, index)} />
        <i className="fa fa-trash" onClick={e => removeUnit(e, index)} /> 
      </div>
      
    </div>
  )
}

UnitItem.propTypes = {
  unit: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onEdit: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
}

export default UnitItem
