import fetchApi from '../api'
import { setCurrentUser } from './auth'

export const signUpUser = ({ name, email, ic, password, passwordConfirmation }) => disptach => {
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
        disptach(setCurrentUser(response.data))
      }
    })
}
