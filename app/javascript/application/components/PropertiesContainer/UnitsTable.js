import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const UnitsTable = props => {
  const onEdit = (e, index) => {
    e.preventDefault()
    props.onEdit(index)
  }

  return (
    <table className="table table-sm table-bordered m-3 ml-4 w-75">
      <thead>
        <tr>
          <th className="w-25">Number</th>
          <th>Area</th>
        </tr>
      </thead>
      <tbody>
        {props.units.map((unit, index) =>
          <tr key={unit.id}>
            <td className="unit-number" onClick={e => onEdit(e, index)}>
              {unit.number}
            </td>
            <td>{unit.area}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

UnitsTable.propTypes = {
  units: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired
}

export default UnitsTable
