import api from "../api";
import { setAuthToken } from "../util/session_api_util";
import { csrfFetch } from './csrf';

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user,
    };
};

const removeUser = () => {
    return {
        type: REMOVE_USER,
    };
};


//login thunk
export const login = (user) => async (dispatch) => {
    console.log('login thunk', user, ' signed in')
    const { credential, password } = user;

    let payload = { email: credential, password: password }
    const response = await api.demo(payload)

    const data = await response.data;
    // api.setAuthToken(data.token)

    setAuthToken(data.token)
    localStorage.setItem('jwtToken', data.token);
    dispatch(setUser(data.user));
    return response;
};

export const demoLogin = () => async (dispatch) => {
    const credential = 'mabari@inquisition.com';
    // console.log('login thunk', credential, ' signing in')
    const password = 'password';
    //////
    let payload = { email: credential, password: password }
    const response = await api.demo(payload)
    ////////////
    const data = await response.data;
    // api.setAuthToken(data.token)
    setAuthToken(data.token)

    localStorage.setItem('jwtToken', data.token);
    console.log(data.token, 'in demo login')
    dispatch(setUser(data.user));
    return response;
};

export const restoreUser = () => async dispatch => {
    const response = await csrfFetch('/api/session');
    const data = await response.json();
    console.log(data, 'data in restoreUser ')
    dispatch(setUser(data.user));
    return response;
};



export const signup = (user) => async (dispatch) => {
    const { username, email, password } = user;
    const response = await api.signup(user)
    const data = await response;

    localStorage.setItem('jwtToken', response.data.token);

    dispatch(setUser(data.data.user));
    return response;
};

export const logout = () => async (dispatch) => {
    // const response = await csrfFetch('/api/session', {
    //     method: 'DELETE',
    // });

    // const response = await api.logout()
    setAuthToken();
    localStorage.removeItem('jwtToken');

    dispatch(removeUser());
    // return response;
};



const sessionReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case SET_USER:
            newState = Object.assign({}, state);
            newState.user = action.payload;
            console.log(action.payload, 'this is the action of SET_USER')
            return newState;
        case REMOVE_USER:
            newState = Object.assign({}, state);
            newState.user = null;
            return newState;
        default:
            return state;
    }
};

export default sessionReducer;
