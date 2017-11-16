const initialState = [
  {
    result: "6",
    date: "11/9/2017",
    time: "Before Lunch",
  },
  {
    result: "5",
    date: "10/12/2017",
    time: "Before Breakfast",
  },
  {
    result: "4.2",
    date: "11/8/1998",
    time: "Before Dinner",
  },
  {
    result: "6",
    date: "9/11/1998",
    time: "Before Lunch",
  },
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
