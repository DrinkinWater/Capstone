import fetchApi from '../api'
import { NavigationActions } from 'react-navigation'

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

const resetNavigate = routeName => (
  NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName })
    ]
  })
)

export const logInUser = ({ email, password }) => dispatch => {
  dispatch(loginLoading(true));

  fetchApi('/auth/sign_in', 'post', { email, password })
    .then(response => {
      dispatch(loginLoading(false))
      if (response)
        dispatch(setCurrentUser(response.data))
    });
}

export const signOutUser = () => dispatch => {
  fetchApi('/auth/sign_out', 'delete')
    .then(() => {
      dispatch(removeCurrentUser())
    });
}

export const validateUser = () => dispatch => {
  fetchApi('/auth/validate_token', 'get')
    .then(response => {
      if (response) {
        dispatch(setCurrentUser(response.data))
        dispatch(resetNavigate('Home'));
      } else {
        dispatch(resetNavigate('LogIn'));
      }
    });
}
