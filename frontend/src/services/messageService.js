import axios from 'axios'

const baseUrl = '/api/message'

export const postMessage = (category, subcategory, titel, content, more_infos) =>
    axios.post(baseUrl, { category, subcategory, titel, content, more_infos}).then((response) => response.data)

export const getMessages = (token) =>
    axios.get(baseUrl,
        {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        ).then((response) => response.data)

export const getMessagesByCategory = (category) =>
    axios.get(`/category/${category}`).then((response) =>response.data)