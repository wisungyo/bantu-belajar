import axios from "axios";
import {
  GET_ERRORS,
  SET_FEATURED_PROGRAM,
  SET_ONGOING_PROGRAM,
  SET_CATEGORY_PROGRAM
} from "./types";

// Menampilkan Program Pilihan
export const viewFeaturedProgram = () => dispatch => {
  fetch('https://projectbb.herokuapp.com/api/projects/featured')
    .then(res => res.json())
    .then(programs => dispatch({
      type: SET_FEATURED_PROGRAM,
      payload: programs
    }))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const viewOnGoingProgram = () => dispatch => {
  fetch('https://projectbb.herokuapp.com/api/projects/all')
    .then(res => res.json())
    .then(programs => dispatch({
      type: SET_ONGOING_PROGRAM,
      payload: programs
    }))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};




export const setProgram = program => {
  return {
    type: SET_FEATURED_PROGRAM,
    payload: program
  };
};

export const setOngoingProgram = program => {
  return {
    type: SET_ONGOING_PROGRAM,
    payload: program
  };
};


export const viewCategoryProgram = (program, history) => dispatch => {
  console.log("wkwkwkw");

      // history.push('/news');
  
  // fetch('https://projectbb.herokuapp.com/api/projects/all')
  //   .then(res => res.json())
  //   .then(programs => {dispatch({
  //     type: SET_CATEGORY_PROGRAM,
  //     payload: programs
  //   });
  //     history.push('/search');
  //   })
  //   .catch(err =>
  //     dispatch({
  //       type: GET_ERRORS,
  //       payload: err.response.data
  //     })
  //   );
};

