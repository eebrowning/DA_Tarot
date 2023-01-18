import axios from 'axios'

const api = axios.create({
    // baseURL: MONGO_URI,
    baseURL: 'http://localhost:8000/api',

})

export const insertProfile = async payload => {
    try {
        let res = await api.post(`/profile`, payload)
        // console.log(res, payload, 'balaaaaaah')
        // Work with the response...
        return res;
    }
    catch (error) {
        // Handle error -> I circumvent this to send more robust error data. totally unnecessary
        // console.log(error, 'new new new');
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            // console.log(error.response.data);
            return error.response.data
            // console.log(error.response.status);
            // console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request, 'should never be here');
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message, 'should never be here');
        }
        console.log(error.config);
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
