import fetchApi from '../api'
import { NavigationActions } from 'react-navigation'

export const setCurrentUser = user => ({
  type: 'SET_CURRENT_USER',
  user
})

export const updateCurrentUser = params => ({
  type: 'UPDATE_CURRENT_USER',
  params
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
          active_problem: "Asthma since 12 years old",
          allergies: "Prawn",
          avatars: null,
          birthday: "08/01/1998",
          blood_type: "A",
          created_at: "2017-10-04T02:32:07.015Z",
          current_medication: "None",
          email: "goodboy96@live.com.my",
          emergency_contact: null,
          gender: "male",
          height: "168.0",
          ic: "980108-10-6285",
          id: 1,
          name: "Joseph",
          provider: "email",
          uid: "goodboy96@live.com.my",
          updated_at: "2017-11-05T14:56:23.821Z",
          weight: "55.0",
          age: "19"
        }))
        dispatch(resetNavigate('Home'));
    //   } else {
    //     dispatch(resetNavigate('LogIn'));
    //   }
    // });
}
