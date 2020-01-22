import React from 'react'
import { connect, useDispatch } from 'react-redux'

import { createProperty } from '../store/actions'
import { selectLoading } from '../store/selectors'
import PropertyForm from '../components/PropertyForm'
import { formatProperty } from '../utils'

const NewPropertyPage = (props) => {
  const dispatch = useDispatch()

  const addNewProperty = (newProperty) => {
    const formattedProperty = formatProperty(newProperty)
    dispatch(createProperty(formattedProperty))
    props.history.push('/')
  }

  return (
    <PropertyForm
      onSubmit={addNewProperty}
      submitting={props.loading}
    />
  )
}

const mapStateToProps = state => ({
  loading: selectLoading(state)
})

export default connect(mapStateToProps)(NewPropertyPage)
