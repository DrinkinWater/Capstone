import { combineReducers } from 'redux'
import nav from './nav'
import auth from './auth'
import map from './map'
import medicalRecords from './medicalRecords'

const rootReducer = combineReducers({
  nav,
  auth,
  map,
  medicalRecords
})

export default rootReducer
