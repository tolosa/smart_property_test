import {
  UPDATE_UNIT_LOADING,
  UPDATE_UNIT_SUCCESS,
  UPDATE_UNIT_FAILURE,
  DELETE_UNIT_SUCCESS,
  DELETE_UNIT_FAILURE
} from './types'
import { apiCall } from './utils'

export const updateUnitLoading = () => ({
  type: UPDATE_UNIT_LOADING
})

export const updateUnitSuccess = updatedData => ({
  type: UPDATE_UNIT_SUCCESS,
  payload: updatedData
})

export const updateUnitFailure = error => ({
  type: UPDATE_UNIT_FAILURE,
  payload: error
})

export const deleteUnitSuccess = deletedData => ({
  type: DELETE_UNIT_SUCCESS,
  payload: deletedData
})

export const deleteUnitFailure = error => ({
  type: DELETE_UNIT_FAILURE,
  payload: error
})

export const updateUnit = (propertyId, unit) => {
  return async dispatch => {
    dispatch(updateUnitLoading())
    try {
      const { id } = unit
      const updatedUnit = await apiCall('patch', `/properties/${propertyId}/units/${id}`, unit)
      dispatch(updateUnitSuccess({ propertyId, updatedUnit }))
    } catch (error) {
      dispatch(updateUnitFailure(error))
    }
  }
}

export const deleteUnit = (propertyId, idToDelete) => {
  console.log('ID TO DELETE', idToDelete)
  return async dispatch => {
    try {
      const deletedUnit = await apiCall('delete', `/properties/${propertyId}/units/${idToDelete}`)
      dispatch(deleteUnitSuccess({ propertyId, deletedUnit }))
    } catch (error) {
      console.log('ERROR', error)
      dispatch(deleteUnitFailure(error))
    }
  }
}
