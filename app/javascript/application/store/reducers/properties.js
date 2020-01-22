import {
  FETCH_PROPERTIES_LOADING,
  FETCH_PROPERTIES_SUCCESS,
  FETCH_PROPERTIES_FAILURE,
  CREATE_PROPERTY_SUCCESS,
  CREATE_PROPERTY_FAILURE,
  CREATE_PROPERTY_LOADING
} from '../actions'

const initialState = {
  loading: false,
  properties: [],
  errorMessage: undefined
}

export const properties = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROPERTIES_LOADING:
    case CREATE_PROPERTY_LOADING:
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
    case FETCH_PROPERTIES_FAILURE:
    case CREATE_PROPERTY_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload
      }
    default:
      return state
  }
}
