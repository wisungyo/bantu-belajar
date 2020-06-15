import {
  SET_FEATURED_PROGRAM,
  SET_ONGOING_PROGRAM,
  SET_CATEGORY_PROGRAM
} from "../actions/types";

const initialState = {
  programs: [],
  program: {}
}
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_FEATURED_PROGRAM:
      return {
        ...state,
        programs: action.payload
      };
    case SET_ONGOING_PROGRAM:
      return {
        ...state,
        programs: action.payload
      }
    case SET_CATEGORY_PROGRAM:
      return {
        ...state,
        programs: action.payload
      }
    default:
      return state;
  }
}