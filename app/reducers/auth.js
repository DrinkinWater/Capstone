const initialState = {
  currentUser: null,
  isLoading: false
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.user
      }
      break;
    case 'REMOVE_CURRENT_USER':
      return {
        ...state,
        currentUser: null
      };
      break;
    case 'LOGIN_LOADING':
      return {
        ...state,
        isLoading: action.isLoading
      };
      break;
    case 'UPDATE_CURRENT_USER':
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          ...action.params
        }
      }
      break;
    default:
      return state
  }
}

export default auth
