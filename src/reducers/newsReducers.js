import {
  SET_HOT_NEWS
} from "../actions/types";

const initialState = {
  news: []
}
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_HOT_NEWS:
      return {
        ...state,
        news: action.payload
      };
    default:
      return state;
  }
}
