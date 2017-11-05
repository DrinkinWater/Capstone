const initialState = {
  nearbyHospital: []
}
const map = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NEARBY_HOSPITAL":
      return {
        ...state,
        nearbyHospital: action.hospitals
      }
      break;
    default:
      return state
  }
}

export default map
