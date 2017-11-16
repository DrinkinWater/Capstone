import { NavigationActions } from 'react-navigation'

const addbloodSugarRecord = record => ({
  type: 'ADD_BLOOD_SUGAR_RECORD',
  record
})

export const submitbloodSugarRecord = record => disptach => {
  disptach(addbloodSugarRecord(record))
  disptach(NavigationActions.back())
  alert("Record created successfully")
}
