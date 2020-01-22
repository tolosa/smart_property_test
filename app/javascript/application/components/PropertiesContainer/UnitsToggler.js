import React from 'react'

const UnitsToggler = props => {
  const isEnabled = !!props.unitsCount
  const icon = isEnabled ? (props.expanded ? 'fa-minus-square' : 'fa-plus-square') : 'fa-square'

  return (
    <a href={isEnabled && '#'} onClick={isEnabled && props.onClick} className={!isEnabled && 'text-muted'}>
      <i className={`fa mr-1 ${icon}`}></i>
      Units
      <small className="text-muted ml-1">({props.unitsCount})</small>
    </a>
  )
}

export default UnitsToggler
