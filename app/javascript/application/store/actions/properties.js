import axios from 'axios'
import {
  FETCH_PROPERTIES_LOADING,
  FETCH_PROPERTIES_SUCCESS,
  FETCH_PROPERTIES_FAILURE,
  CREATE_PROPERTY_LOADING,
  CREATE_PROPERTY_SUCCESS,
  CREATE_PROPERTY_FAILURE
} from './types'

export const fetchPropertiesLoading = () => ({
  type: FETCH_PROPERTIES_LOADING
})

export const fetchPropertiesSuccess = properties => ({
  type: FETCH_PROPERTIES_SUCCESS,
  payload: properties
})

export const fetchPropertiesFailure = error => ({
  type: FETCH_PROPERTIES_FAILURE,
  payload: error
})

export const createdPropertyLoading = () => ({
  type: CREATE_PROPERTY_LOADING
})

export const createPropertySuccess = createdProperty => ({
  type: CREATE_PROPERTY_SUCCESS,
  payload: createdProperty
})

export const createdPropertyFailure = error => ({
  type: CREATE_PROPERTY_FAILURE,
  payload: error
})

export const fetchProperties = () => {
  return dispatch => {
    dispatch(fetchPropertiesLoading())
    axios
      .get('/properties')
      .then(response => {
        dispatch(fetchPropertiesSuccess(response.data))
      })
      .catch(error => {
        dispatch(fetchPropertiesFailure(error))
      })
  }
}

export const createProperty = (newProperty) => {
  return dispatch => {
    dispatch(createdPropertyLoading())
    axios
      .post('/properties', newProperty)
      .then(response => {
        dispatch(createPropertySuccess(response))
      })
      .catch(error => {
        dispatch(createdPropertyFailure(error))
      })
  }
}
