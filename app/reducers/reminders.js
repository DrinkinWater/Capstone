const initialState = [
  {
    name: 'Blood Test',
    time: '16:00',
    date: '11/15/17',
    location: 'INTI College',
  },
  {
    name: 'Body Check',
    time: '15:00',
    date: '11/1/18',
    location: '-',
  },
  {
    name: 'Take Report',
    time: '11:40',
    date: '11/1/18',
    location: 'hospital Subang',
  }
]

const reminders = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_REMINDER":
      return [
        ...state,
        action.reminder
      ]
      break;
    default:
      return state
  }
}

export default reminders
