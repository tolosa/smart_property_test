import React from 'react'
import { connect, useDispatch } from 'react-redux'

import { unitsDifference } from '../utils'
import { updateProperty, deleteUnit } from '../store/actions'
import { selectProperty, selectLoading } from '../store/selectors'
import PropertyForm from '../components/PropertyForm'

const EditPropertyPage = props => {
  const dispatch = useDispatch()

  const onEditProperty = updatedProperty => {
    const unitsToDelete = unitsDifference(props.property.units, updatedProperty.units)
    unitsToDelete.forEach(unit => dispatch(deleteUnit(updatedProperty.id, unit.id)))
    dispatch(updateProperty(updatedProperty, props.history))
  }

  return (
    <PropertyForm
      data={props.property}
      onSubmit={onEditProperty}
      submitting={props.loading}
    />
  )
}

const mapStateToProps = (state, ownProps) => ({
  loading: selectLoading(state),
  property: selectProperty(ownProps.match.params.propertyId)(state)
})

export default connect(mapStateToProps)(EditPropertyPage)
