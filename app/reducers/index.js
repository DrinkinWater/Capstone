import { combineReducers } from 'redux'
import nav from './nav'
import auth from './auth'
import map from './map'
import medicalRecords from './medicalRecords'
import bloodSugarRecords from './bloodSugarRecords'
import reminders from './reminders'

const rootReducer = combineReducers({
  nav,
  auth,
  map,
  medicalRecords,
  reminders,
  bloodSugarRecords
})

export default rootReducer
