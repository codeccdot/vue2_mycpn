import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'
const idKey = 'user'

// token鉴权
export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

// id
export function getId() {
  return Cookies.get(idKey)
}

export function setId(id) {
  return Cookies.set(idKey, id)
}

export function removeId() {
  return Cookies.remove(idKey)
}
