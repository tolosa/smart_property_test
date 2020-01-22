import React from 'react'

const UnitsTable = props => {
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
            <td>{unit.number}</td>
            <td>{unit.area}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default UnitsTable
