import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com'

const getToken = () => 'some-token'

const formatToken = (token: string | null) => {
  return token && `Token ${token}`
}

export const setToken = (token: string | null) => {
  agentInstance.defaults.headers.common.Authorization = formatToken(token)
}

const agentInstance = axios.create({
  baseURL: URL,
  timeout: 4000,
  headers: {
    common: {
      Authorization: formatToken(getToken()),
    },
  },
})
export default agentInstance
