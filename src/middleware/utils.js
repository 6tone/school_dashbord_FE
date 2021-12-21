const TOKEN_NAME = 'token'

export const setToken = token => {
  localStorage.setItem(TOKEN_NAME, token)
}

export const getToken = () => {
  localStorage.getItem(TOKEN_NAME)
}