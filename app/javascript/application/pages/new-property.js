import React from 'react'
import { useDispatch } from 'react-redux'

import { createProperty } from '../store/actions'
import PropertyForm from '../components/property-form'

const NewPropertyPage = () => {
  const dispatch = useDispatch()
  const addNewProperty = (newProperty) => {
    console.log('NEW PROPERTY', newProperty)
    dispatch(createProperty(newProperty))
  }

  return (
    <PropertyForm onSubmit={addNewProperty} />
  )
}

export default NewPropertyPage
