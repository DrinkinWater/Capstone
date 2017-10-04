import { API_ROOT } from '../config/api'
import { AsyncStorage } from 'react-native'

const resetCredential = () => {
  AsyncStorage.removeItem("access_token")
  AsyncStorage.removeItem("client")
  AsyncStorage.removeItem("uid")
}

const persistToken = (response) => {
  let token = response.headers.map['access-token'][0]
  let client = response.headers.map['client'][0]
  let uid = response.headers.map['uid'][0]
  
  AsyncStorage.setItem("access-token", token)
  AsyncStorage.setItem("client", client)
  AsyncStorage.setItem("uid", uid)
}

const fetchApi = async (endpoint, method = 'get', body, headers = {}) => {
  let url = `${API_ROOT}${endpoint}`;

  let config = {
    method: method,
    headers: new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...headers
    }),
    body: JSON.stringify(body)
  }

  let response = await fetch(url, config)

  const status = response.status;

  if (status !== 200) {
    let errors = JSON.parse(response._bodyInit).errors.join(' ')

    alert(`${errors} (Error code: ${status})`)
    if (status === 401) {
      await resetCredential()
    }

    return
  }
  await persistToken(response)
  return await response.json()
}

export default fetchApi
