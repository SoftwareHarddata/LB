import axios from 'axios'

const baseUrl = '/api/customer'

export const loginUser = (username, password, idUserEmail) =>
    axios.post(baseUrl, { username, password, idUserEmail}).then((response) => response.data)