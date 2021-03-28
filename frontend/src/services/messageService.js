import axios from 'axios'

const baseUrl = '/api/message'

export const postMessage = (category, subcategory, titel, content, more_infos) =>
    axios.post(baseUrl, { category, subcategory, titel, content, more_infos}).then((response) => response.data)

export const getMessages = () =>
    axios.get(baseUrl).then((response) => response.data)