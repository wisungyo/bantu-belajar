import { FETCH_PROFILE, PUT_PROFILE, FETCH_PRODUCTS, PROFILE_FETCHED, GET_ERRORS } from './types';
import axios from 'axios';

export const fetchProfile = (profileDatas) => dispatch => {
  const params = { email:"wisungyo@gmail.com"};
  axios
    .post('https://authbb.herokuapp.com/api/profile?=', params)
    .then((res) => {
        dispatch(receiveProfile(res.data.user));
        console.log("actions:", res.data.user);
        // history.push('/edit-profile');
    })
    ;
};

export const editProfile = (profileDatas) => dispatch => {
  axios
    .put("https://authbb.herokuapp.com/api/profile/updateprofile", profileDatas)
    .then(res => {
      // dispatch(fetchProfile(res.data));
      console.log(res.status);
    })
} 

export const receiveProfile = user => {
  return {
      type: PROFILE_FETCHED,
      payload: user
  };
};