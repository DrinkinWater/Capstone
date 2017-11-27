import { NavigationActions } from 'react-navigation'

const addReminder = reminder => ({
  type: 'ADD_REMINDER',
  reminder
})

export const submitReminder = reminder => disptach => {
  disptach(addReminder(reminder))
  disptach(NavigationActions.back())
  alert("Reminder created successfully")
}
