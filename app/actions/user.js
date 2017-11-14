import fetchApi from '../api'
import { setCurrentUser, updateCurrentUser } from './auth'
import { NavigationActions } from 'react-navigation'

export const signUpUser = ({ name, email, ic, password, passwordConfirmation }) => dispatch => {
  let params = {
    name,
    email,
    ic,
    password,
    password_confirmation: passwordConfirmation
  }
  fetchApi('/auth', 'post', params)
    .then(response => {
      if (response) {
        dispatch(setCurrentUser(response.data))
        dispatch(NavigationActions.navigate({ routeName: 'UserProfile' }))
      }
    })
}

export const updateUser = params => dispatch => {
  dispatch(updateCurrentUser(params))
  dispatch(NavigationActions.back())
  alert("Profile updated successfully")
  // fetchApi('/auth', 'put', params)
  //   .then(response => {
  //     if (response) {
  //     }
  //   })
}
