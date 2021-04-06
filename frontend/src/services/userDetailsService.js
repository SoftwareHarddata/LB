import axios from 'axios'

const userdetailsUrl = '/api/userdetails'

export const userDetails = (age, sector, department, occupation, company_size, plz, idUserSingUp) =>
    axios.post(userdetailsUrl, { age, sector, department, occupation, company_size, plz, idUserSingUp}).then((response) => response.data)


