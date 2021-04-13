import axios from 'axios'

const baseUrl = '/api/expertendetails/experten'


export const getExpertenByCategory = (category, token) =>
    axios.get(`${baseUrl}/${category}`,
        {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        ).then((response) => response.data)