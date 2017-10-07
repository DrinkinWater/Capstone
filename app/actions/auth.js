import fetchApi from '../api'
import NavigatorService from '../navigation/service';

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
      NavigatorService.navigate('UserProfile');
      // const nav = NavigationActions.navigate({
      //   routeName: 'LogIn',
      //  // My route params
      //   // params: {...}
      //   // in case you want to navigate into specific sub route
      //   action: NavigationActions.navigate({ routeName: 'UserProfile' })
      // });
      // dispatch(nav);
      // dispatch(NavigationActions.navigate({ routeName: 'UserProfile' }))
    });
}

export const signOutUser = () => disptach => {
  fetchApi('/auth/sign_out', 'delete')
    .then(() => {
      disptach(removeCurrentUser())
    });
}
