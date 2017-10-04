import fetchApi from '../api'

export const logInUser = ({ email, password }) => disptach => {
  fetchApi('/auth/sign_in', 'post', { email, password })
    .then(response => {
      // debugger
    })
}
