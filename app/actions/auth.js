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
  // fetchApi('/auth/validate_token', 'get')
  //   .then(response => {
  //     if (response) {
        dispatch(setCurrentUser({
          active_problem: "Too handsome",
          allergies: "Prawn",
          avatars: null,
          birthday: null,
          blood_type: "A",
          created_at: "2017-10-04T02:32:07.015Z",
          current_medication: "None",
          email: "goodboy96@live.com.my",
          emergency_contact: null,
          gender: "male",
          height: "168.0",
          ic: "980823106401",
          id: 1,
          name: "Jeff",
          provider: "email",
          uid: "goodboy96@live.com.my",
          updated_at: "2017-11-05T14:56:23.821Z",
          weight: "55.0"
        }))
        dispatch(resetNavigate('Home'));
    //   } else {
    //     dispatch(resetNavigate('LogIn'));
    //   }
    // });
}
