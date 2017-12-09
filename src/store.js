
import { createStore ,applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger'

import rootReducer from './Reducers';
const loggerMiddleware = createLogger()

export function configureStore(ss) {
  return createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleware
    )
  )
}