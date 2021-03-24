import axios from 'axios'

const userdetailsUrl = '/api/userdetails'

export const userDetails = (age, sector, department, occupation, company_size, plz) =>
    axios.post(userdetailsUrl, { age, sector, department, occupation, company_size, plz}).then((response) => response.data)


