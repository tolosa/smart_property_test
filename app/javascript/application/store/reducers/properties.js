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
  DELETE_UNIT_FAILURE
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
    case FETCH_PROPERTIES_FAILURE:
    case CREATE_PROPERTY_FAILURE:
    case UPDATE_PROPERTY_FAILURE:
    case UPDATE_UNIT_FAILURE:
    case DELETE_UNIT_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload
      }
    default:
      return state
  }
}
