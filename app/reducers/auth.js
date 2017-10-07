const auth = (state = null, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return action.user
      break;
    case 'REMOVE_CURRENT_USER':
      return null;
      break;
    default:
      return state
  }
}

export default auth
