import React from 'react'

const PropertiesTable = props => {
  return (
    <table className="table mt-5">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {props.properties.map((property, index) =>
          <tr>
            <td>{property.name}</td>
            <td>{property.description}</td>
            <td>{property.address}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default PropertiesTable
