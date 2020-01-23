import React from 'react'

const UnitsToggler = props => {
  const isEnabled = !!props.unitsCount
  const icon = isEnabled ? (props.expanded ? 'fa-minus-square' : 'fa-plus-square') : 'fa-square'
  const className = !isEnabled ? 'text-muted' : ''

  return (
    <a href="#" onClick={isEnabled ? props.onClick : () => {}} className={className}>
      <i className={`fa mr-1 ${icon}`}></i>
      Units
      <small className="text-muted ml-1">({props.unitsCount})</small>
    </a>
  )
}

export default UnitsToggler
