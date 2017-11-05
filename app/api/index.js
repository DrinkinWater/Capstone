import { API_ROOT } from '../config/api'
import RNSecureKeyStore from 'react-native-secure-key-store';

const resetCredential = () => {
  RNSecureKeyStore.remove("access-token")
  RNSecureKeyStore.remove("client")
  RNSecureKeyStore.remove("uid")
}

const persistToken = (response) => {
  let token = response.headers.map['access-token'][0]
  let client = response.headers.map['client'][0]
  let uid = response.headers.map['uid'][0]

  RNSecureKeyStore.set("access-token", token)
  RNSecureKeyStore.set("client", client)
  RNSecureKeyStore.set("uid", uid)
}

const tokenForHeader = async () => {
  try {
    let accessToken = await RNSecureKeyStore.get("access-token")
    let client = await RNSecureKeyStore.get("client")
    let uid = await RNSecureKeyStore.get("uid")

    return {
      'access-token': accessToken,
      'client'      : client,
      'uid'         : uid
    }
  } catch (e) {
    return {}
  }
}

const fetchApi = async (endpoint, method = 'get', body, headers = {}) => {
  let url = `${API_ROOT}/api${endpoint}`;
  let tfh = await tokenForHeader()

  let config = {
    method: method,
    headers: new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...headers,
      ...tfh
    }),
    body: JSON.stringify(body)
  }

  let response = await fetch(url, config)

  const status = response.status;

  if (!status.toString().match(/^2/)) {
    if (endpoint !== '/auth/validate_token') {
      let errors = JSON.parse(response._bodyInit).errors

      alert(`${errors} (Error code: ${status})`)
    }
    if (status === 401) {
      await resetCredential()
    }

    return
  }

  await persistToken(response)
  return await response.json()
}

export default fetchApi
