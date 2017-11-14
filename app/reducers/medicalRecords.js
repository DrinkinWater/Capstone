const initialState = []

const medicalRecords = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MEDICAL_RECORD":
      return [
        ...state,
        action.medicalRecord
      ]
      break;
    default:
      return state
  }
}

export default medicalRecords
