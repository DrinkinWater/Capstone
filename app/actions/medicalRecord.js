import { NavigationActions } from 'react-navigation'

const addMedicalRecord = medicalRecord => ({
  type: 'ADD_MEDICAL_RECORD',
  medicalRecord
})

export const submitMedicalRecord = medicalRecord => disptach => {
  disptach(addMedicalRecord(medicalRecord))
  disptach(NavigationActions.back())
  alert("Record created successfully")
}
