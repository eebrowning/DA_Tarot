// Although there's only one function here so far, let's import the whole file since we will be adding more later
import * as APIUtil from '../../util/session_api_util';

// This pattern should be familiar to you from the full stack project

export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
//ACTION CREATORS
export const actionLogoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
});
//THUNKS
export const thunkLogout = () => dispatch => {
    // Remove the token from local storage
    localStorage.removeItem('jwtToken')
    // Remove the token from the common axios header
    APIUtil.setAuthToken(false)
    // Dispatch a logout action
    dispatch(actionLogoutUser())
};
