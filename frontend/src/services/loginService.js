import axios from 'axios'

const baseUrl = '/api/customer'

export const loginUser = (username, password, email) =>
    axios.post(baseUrl, { username, password, email}).then((response) => response.data)

