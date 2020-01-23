import React from 'react'
import PropTypes from 'prop-types'

const UnitsTable = props => {
  const onEdit = (e, index) => {
    e.preventDefault()
    props.onEdit(index)
  }

  return (
    <table className="table table-sm m-3 ml-4 w-75 border-bottom">
      <thead>
        <tr>
          <th className="w-25">Number</th>
          <th>Area</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {props.units.map((unit, index) =>
          <tr key={unit.id}>
            <td className="unit-number">
              {unit.number}
            </td>
            <td>{unit.area}</td>
            <td className="actions">
              <a href="#" onClick={e => onEdit(e, index)} title="Edit">
                <i className="fa fa-lg fa-pencil text-success"></i>
              </a>
            </td>
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
