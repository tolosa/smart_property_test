import {
  CREATE_PROPERTY_SUCCESS,
  CREATE_PROPERTY_FAILURE
} from '../actions'

const initialState = {
  properties: [],
  errorMessage: undefined
}

export const properties = (state = initialState, action) => {
  switch (action.payload) {
    case CREATE_PROPERTY_SUCCESS:
      return {
        ...state,
        properties: [...state.properties, action.payload]
      }
    case CREATE_PROPERTY_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      }
    default:
      return state
  }
}
