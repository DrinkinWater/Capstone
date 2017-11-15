const initialState = [
  {
    title: "Jeff",
    date: "11/9/1998",
    notes: "jaja",
    image: "content://media/external/images/127977"
  }
]

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
