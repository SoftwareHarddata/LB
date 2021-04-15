import axios from 'axios'

const baseUrl = '/api/customer'
const baseUrlMe = 'api/customer/me'


export const getLoggedUser = (username, token) =>
    axios.get(`${baseUrlMe}/${username}`,
        {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        ).then((response) => response.data)