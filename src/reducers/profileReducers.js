import { PROFILE_FETCHED, FETCH_PROFILE, PUT_PROFILE } from '../actions/types';

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_PROFILE:
      return {
        ...state,
        profileDatas: action.payload
      }
    case PUT_PROFILE:
      return {
        ...state,
        profileDatas: action.payload
      }
    case PROFILE_FETCHED:
      return {
        ...state,
        profileDatas: action.payload
      }
    default:
      return state;
  }
}