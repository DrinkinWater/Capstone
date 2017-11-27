import Config from 'react-native-config'

const setNearbyHospital = hospitals => ({
  type: 'SET_NEARBY_HOSPITAL',
  hospitals
})

export const findNearbyHospital = ({ longitude, latitude }) => dispatch => {
  fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${Config.ANDROID_GOOGLE_PLACE_API_KEY}&location=${latitude},${longitude}&type=hospital&rankby=distance`)
    .then(response => response.json())
    .then(response => {
      if (response.status = "OK") {
        console.log(response.results)
        dispatch(setNearbyHospital(response.results))
      }
    })
    .catch(err => {
      alert(err.message)
    })
}
