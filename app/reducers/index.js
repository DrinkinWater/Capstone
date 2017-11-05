import { combineReducers } from 'redux'
import nav from './nav'
import auth from './auth'
import map from './map'

const rootReducer = combineReducers({
  nav,
  auth,
  map
})

export default rootReducer
