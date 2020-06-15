import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode"; 
import {
    GET_ERRORS,
    SET_CURRENT_USER,
    USER_LOADING,
    REGISTER_SUCCESS,
    LOGIN_SUCCESS
} from "./types";

// Register User
export const registerUser = (userData, history) => dispatch => {
    axios
        .post("https://authbb.herokuapp.com/api/users/register", userData)
        .then((res) => {
            dispatch(receiveRegister(res.data));
            history.push('/verification');
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};// Login - get user token
export const loginUser = (userData, history) => dispatch => {
    axios
        .post("/api/users/login", userData)
        .then(res => {
            // Save to localStorage// Set token to localStorage
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);
            // Set token to Auth header
            setAuthToken(token);
            // Decode token to get user data
            const decoded = jwt_decode(token);
            // Set current user
            dispatch(setCurrentUser(decoded));
            // dispatch(receiveLogin(res.data));
            // history.push('/');
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};// Set logged in user
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};// User loading
export const setUserLoading = () => {
    return {
        type: USER_LOADING
    };
};// Log user out
export const logoutUser = () => dispatch => {
    // Remove token from local storage
    localStorage.removeItem("jwtToken");
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
};
export const receiveRegister = user => {
    return {
        type: REGISTER_SUCCESS,
        payload: user
    };
};
export const receiveLogin = user => {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    };
};// forget password
export const forgetPassword = (userData, history) => dispatch => {
  axios
    .post("/api/users/forgotpassword", userData)
    .then(res => history.push("/new-password"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: { 
          message: err.message, // i'm not sure about this
          statusCode: err.statusCode // i'm not sure about this
        }
      })
    );
};