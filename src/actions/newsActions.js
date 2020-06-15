import axios from "axios";
import {
  SET_HOT_NEWS, GET_ERRORS
} from "./types";

// Menampilkan Program Pilihan
export const viewHotNews = () => dispatch => {
  fetch('https://projectbb.herokuapp.com/api/articles')
    .then(res => res.json())
    .then(news => dispatch({
      type: SET_HOT_NEWS,
      payload: news
    }))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};



