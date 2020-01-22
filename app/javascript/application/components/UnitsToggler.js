import React from 'react'

const UnitsToggler = props => {
  const icon = props.expanded ? 'fa-minus-square' : 'fa-plus-square'

  return (
    <a href="#" onClick={props.onClick}>
      <i className={`fa mr-1 ${icon}`}></i>
      Units
      <small className="text-muted ml-1">({props.unitsCount})</small>
    </a>
  )
}

export default UnitsToggler
