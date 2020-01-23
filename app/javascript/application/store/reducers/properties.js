import {
  FETCH_PROPERTIES_LOADING,
  FETCH_PROPERTIES_SUCCESS,
  FETCH_PROPERTIES_FAILURE,
  CREATE_PROPERTY_SUCCESS,
  CREATE_PROPERTY_FAILURE,
  CREATE_PROPERTY_LOADING,
  UPDATE_PROPERTY_LOADING,
  UPDATE_PROPERTY_SUCCESS,
  UPDATE_PROPERTY_FAILURE,
  UPDATE_UNIT_LOADING,
  UPDATE_UNIT_SUCCESS,
  UPDATE_UNIT_FAILURE,
  DELETE_UNIT_SUCCESS,
  DELETE_UNIT_FAILURE,
  ARCHIVE_PROPERTY_LOADING,
  ARCHIVE_PROPERTY_SUCCESS,
  ARCHIVE_PROPERTY_FAILURE,
  RESTORE_PROPERTY_LOADING,
  RESTORE_PROPERTY_SUCCESS,
  RESTORE_PROPERTY_FAILURE
} from '../actions'
import { updateProperty, updateUnit, deleteUnit } from './utils'


const initialState = {
  loading: false,
  properties: [],
  errorMessage: undefined
}

export const properties = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROPERTIES_LOADING:
    case CREATE_PROPERTY_LOADING:
    case UPDATE_PROPERTY_LOADING:
    case UPDATE_UNIT_LOADING:
    case ARCHIVE_PROPERTY_LOADING:
    case RESTORE_PROPERTY_LOADING:
      return {
        ...state,
        loading: true
      }
    case FETCH_PROPERTIES_SUCCESS:
      return {
        ...state,
        loading: false,
        properties: action.payload
      }
    case CREATE_PROPERTY_SUCCESS:
      return {
        ...state,
        loading: false,
        properties: [...state.properties, action.payload]
      }
    case UPDATE_PROPERTY_SUCCESS:
      return {
        ...state,
        properties: updateProperty(state.properties, action.payload)
      }
    case DELETE_UNIT_SUCCESS:
      return {
        ...state,
        properties: deleteUnit(state.properties, action.payload.propertyId, action.payload.deletedUnit)
      }
    case UPDATE_UNIT_SUCCESS:
      return {
        ...state,
        loading: false,
        properties: updateUnit(state.properties, action.payload.propertyId, action.payload.updatedUnit)
      }
    case ARCHIVE_PROPERTY_SUCCESS:
    case RESTORE_PROPERTY_SUCCESS:
      return {
        ...state,
        loading: false,
        properties: updateProperty(state.properties, action.payload)
      }
    case FETCH_PROPERTIES_FAILURE:
    case CREATE_PROPERTY_FAILURE:
    case UPDATE_PROPERTY_FAILURE:
    case UPDATE_UNIT_FAILURE:
    case DELETE_UNIT_FAILURE:
    case ARCHIVE_PROPERTY_FAILURE:
    case RESTORE_PROPERTY_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload
      }
    default:
      return state
  }
}
