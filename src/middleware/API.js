const BASE_URL = 'http://61.222.237.236:3000'
import {getToken} from './utils'

export const login = (account, password) => {
  return fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({account, password})
  }).then(res => res.json())
}

export const authUser = () => {
  const token = getToken()
  return fetch(`${BASE_URL}/authUser`, {
    headers: {
      'authorization': `Bearer ${token}`
    }
  }).then(res => res.json())
}