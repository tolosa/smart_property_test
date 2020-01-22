import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { rootReducer } from './reducers'

const configureStore = () => {
  const middlewares = [thunkMiddleware]
  const enhancers = applyMiddleware(...middlewares)

  return createStore(rootReducer, {}, enhancers)
}

export const store = configureStore()
