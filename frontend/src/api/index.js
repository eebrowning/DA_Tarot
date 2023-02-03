import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
})

export const insertProfile = async payload => {
    try {
        let res = await api.post(`/profiles`, payload)
        // console.log(res, payload, 'balaaaaaah')
        return res;
    }
    catch (error) {

        if (error.response) {

            return error.response.data

        } else if (error.request) {
            console.log(error.request, 'should never be here');
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message, 'should never be here');
        }
        console.log(error.config);
    }

}



export const getAllProfiles = () => api.get(`/profiles`)
export const updateProfileById = (id, payload) => api.put(`/profiles/${id}`, payload)
export const getProfileById = id => api.get(`/profiles/${id}`)
export const deleteProfileById = id => api.delete(`profiles/${id}`)


//login
export const login = async (payload) => {
    let res = await api.post(`/users/login`, payload)
    // console.log(res, payload, 'balaaaaaah')
    return res;
    // api.post('/users/login', payload)
}
export const demo = async (payload) => {
    let res = await api.post(`/users/login`, payload)
    // console.log(res, payload, 'balaaaaaah')
    return res;
    // api.post('/users/login', payload)
}

export const signup = async (payload) => {
    let res = await api.post(`/users/register`, payload)
    // console.log(res, payload, 'balaaaaaah')
    return res;
    // api.post('/users/login', payload)
}
export const logout = async (payload) => {
    let res = await api.post(`/users/logout`, payload)
    // console.log(res, payload, 'balaaaaaah')
    return res;
    // api.post('/users/login', payload)
}


export const restore = async (payload) => {
    let res = await api.get('/users/current')
    console.log(res, 'res in restore')
    return res;
}


//logout
// export const logout = (payload) => api.post('/users/logout')
//demo login
//register




const apis = {
    insertProfile,
    getAllProfiles,
    updateProfileById,
    getProfileById,
    deleteProfileById,
    login,
    demo,
    signup,
    logout
}
export default apis
