import axios from 'axios'

const api = axios.create({
    // baseURL: MONGO_URI,
    baseURL: 'http://localhost:8000/api',

})

export const insertProfile = async payload => {
    try {
        let res = await api.post(`/profile`, payload)
        console.log(res, payload, 'balaaaaaah')
        // Work with the response...
        return res;
    } catch (err) {
        // Handle error
        console.log(err);


    }

}

export const getAllProfiles = () => api.get(`/profiles`)



export const updateProfileById = (id, payload) => api.put(`/profile/${id}`, payload)
export const getProfileById = id => api.get(`/profile/${id}`)
export const deleteProfileById = id => api.delete(`profile/${id}`)


const apis = {
    insertProfile,
    getAllProfiles,
    updateProfileById,
    getProfileById,
    deleteProfileById
}
export default apis
