import axios from 'axios'

const baseUrl = '/api/customer'

export const singUpUser = (username, password, email) =>
    axios.post(baseUrl, { username, password, email}).then((response) => response.data)

export const loginUser = (username, password) =>
    axios.post('/auth/login', { username, password}).then((response) => response.data)

