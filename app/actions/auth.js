import fetchApi from '../api'

const setCurrentUser = user => ({
  type: 'SET_CURRENT_USER',
  user
})

const removeCurrentUser = () => ({
  type: 'REMOVE_CURRENT_USER'
})

export const logInUser = ({ email, password }) => disptach => {
  fetchApi('/auth/sign_in', 'post', { email, password })
    .then(response => {
      disptach(setCurrentUser(response.data))
    });
}

export const logOutUser = ({ email, password }) => disptach => {
  fetchApi('/auth/sign_in', 'post', { email, password })
    .then(response => {
      disptach(setCurrentUser(response.data))
    });
}
//
// export const checkUserLogedIn = () => disptach => {
//
// }
