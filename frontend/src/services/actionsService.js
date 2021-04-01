import axios from 'axios'

const baseUrl = '/api/actions'

export const postAction = (idUserSingup, idMessage, action) =>
    axios.post(baseUrl, {idUserSingup, idMessage, action}).then((response) => response.data)

export const getActions = (action) =>
    axios.get(`/api/actions/${action}`).then((response) =>response.data)

export const getActionsFromUser = (idUserSingup, action) =>
    axios.get(`/api/actions/${idUserSingup}/${action}`).then((response) =>response.data)

