const auth = (state = void 0, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return action.user
      break;
    case 'REMOVE_CURRENT_USER':
      return void 0;
      break;
    default:
      return state
  }
}

export default auth
