import React from 'react'

import PropertyForm from '../components/property-form'

const NewPropertyPage = () => {
  const addNewProperty = (newProperty) => {
    console.log('NEW PROPERTY', newProperty)
  }

  return (
    <PropertyForm onSubmit={addNewProperty} />
  )
}

export default NewPropertyPage
