import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
})

export const insertProfile = payload => api.post(`/profile`, payload)
export const getAllProfiles = () => api.get(`/profiles`)
export const updateProfileById = (id, payload) => api.put(`/profile/${id}`, payload)
export const getProfileById = id => api.get(`/profile/${id}`)

const apis = {
    insertProfile,
    getAllProfiles,
    updateProfileById,
    getProfileById,
}

export default apis
