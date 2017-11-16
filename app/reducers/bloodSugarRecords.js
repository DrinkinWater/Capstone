const initialState = [
  // {
  //   title: "Jeff",
  //   date: "11/9/1998",
  //   notes: "jaja",
  //   image: "content://media/external/images/127977"
  // }
]

const bloodSugarRecords = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BLOOD_SUGAR_RECORD":
      return [
        ...state,
        action.record
      ]
      break;
    default:
      return state
  }
}

export default bloodSugarRecords
