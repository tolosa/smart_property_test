import axios from 'axios'
import {
  CREATE_PROPERTY_SUCCESS,
  CREATE_PROPERTY_FAILURE
} from './types'

export const createPropertySuccess = (createdProperty) => ({
  type: CREATE_PROPERTY_SUCCESS,
  payload: createdProperty
})

export const createdPropertyFailure = (error) => ({
  type: CREATE_PROPERTY_FAILURE,
  payload: error
})

export const createProperty = (newProperty) => {
  console.log('ACTION!')
  return dispatch => {
    axios
      .post('/api/v1/properties', newProperty)
      .then(response => {
        dispatch(createPropertySuccess(response))
      })
      .catch(error => {
        dispatch(createdPropertyFailure(error))
      })
  }
}
