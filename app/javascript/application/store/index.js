import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'

import { rootReducer } from './reducers'

const configureStore = () => {
  const middlewares = [thunkMiddleware, logger]
  const enhancers = applyMiddleware(...middlewares)

  return createStore(rootReducer, {}, enhancers)
}

export const store = configureStore()
