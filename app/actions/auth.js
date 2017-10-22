import fetchApi from '../api'

export const setCurrentUser = user => ({
  type: 'SET_CURRENT_USER',
  user
})

const removeCurrentUser = () => ({
  type: 'REMOVE_CURRENT_USER'
})

const loginLoading = isLoading => ({
  type: 'LOGIN_LOADING',
  isLoading
})

export const logInUser = ({ email, password }) => disptach => {
  disptach(loginLoading(true));

  fetchApi('/auth/sign_in', 'post', { email, password })
    .then(response => {
      disptach(loginLoading(false))
      if (response)
        disptach(setCurrentUser(response.data))
    });
}

export const signOutUser = () => disptach => {
  fetchApi('/auth/sign_out', 'delete')
    .then(() => {
      disptach(removeCurrentUser())
    });
}
