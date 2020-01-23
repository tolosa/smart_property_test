import {
  FETCH_PROPERTIES_LOADING,
  FETCH_PROPERTIES_SUCCESS,
  FETCH_PROPERTIES_FAILURE,
  CREATE_PROPERTY_LOADING,
  CREATE_PROPERTY_SUCCESS,
  CREATE_PROPERTY_FAILURE,
  UPDATE_PROPERTY_LOADING,
  UPDATE_PROPERTY_SUCCESS,
  UPDATE_PROPERTY_FAILURE,
  ARCHIVE_PROPERTY_LOADING,
  ARCHIVE_PROPERTY_SUCCESS,
  ARCHIVE_PROPERTY_FAILURE,
  RESTORE_PROPERTY_LOADING,
  RESTORE_PROPERTY_SUCCESS,
  RESTORE_PROPERTY_FAILURE
} from './types'
import { apiCall } from './utils'

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

export const updatePropertyLoading = () => ({
  type: UPDATE_PROPERTY_LOADING
})

export const updatePropertySuccess = updatedProperty => ({
  type: UPDATE_PROPERTY_SUCCESS,
  payload: updatedProperty
})

export const updatePropertyFailure = error => ({
  type: UPDATE_PROPERTY_FAILURE,
  payload: error
})

export const archivePropertyLoading = () => ({
  type: ARCHIVE_PROPERTY_LOADING
})

export const archivePropertySuccess = archivedProperty => ({
  type: ARCHIVE_PROPERTY_SUCCESS,
  payload: archivedProperty
})

export const archivePropertyFailure = error => ({
  type: ARCHIVE_PROPERTY_FAILURE,
  payload: error
})

export const restorePropertyLoading = () => ({
  type: RESTORE_PROPERTY_LOADING
})

export const restorePropertySuccess = restoredProperty => ({
  type: RESTORE_PROPERTY_SUCCESS,
  payload: restoredProperty
})

export const restorePropertyFailure = error => ({
  type: RESTORE_PROPERTY_FAILURE,
  payload: error
})

export const fetchProperties = () => {
  return async dispatch => {
    dispatch(fetchPropertiesLoading())
    try {
      const properties = await apiCall('get', '/properties')
      dispatch(fetchPropertiesSuccess(properties))
    } catch (error) {
      dispatch(fetchPropertiesFailure(error))
    }
  }
}

export const createProperty = (newProperty, router) => {
  return async dispatch => {
    dispatch(createdPropertyLoading())
    try {
      const createdProperty = await apiCall('post', '/properties', newProperty)
      dispatch(createPropertySuccess(createdProperty))
      router.push('/')
    } catch (error) {
      dispatch(createdPropertyFailure(error))
    }
  }
}

export const updateProperty = (propertyToUpdate, router) => {
  return async dispatch => {
    dispatch(updatePropertyLoading())
    try {
      const { id } = propertyToUpdate
      const updatedProperty = await apiCall('patch', `/properties/${id}`, propertyToUpdate)
      dispatch(updatePropertySuccess(updatedProperty))
      router.push('/')
    } catch (error) {
      dispatch(updatePropertyFailure(error))
    }
  }
}

export const archiveProperty = id => {
  return async dispatch => {
    dispatch(archivePropertyLoading())
    try {
      const archivedProperty = await apiCall('post', `/properties/${id}/archive`)
      dispatch(archivePropertySuccess(archivedProperty))
    } catch (error) {
      dispatch(archivePropertyFailure(error))
    }
  }
}

export const restoreProperty = id => {
  return async dispatch => {
    dispatch(restorePropertyLoading())
    try {
      const restoredProperty = await apiCall('post', `/properties/${id}/restore`)
      dispatch(restorePropertySuccess(restoredProperty))
    } catch (error) {
      dispatch(restorePropertyFailure(error))
    }
  }
}
