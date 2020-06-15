import { FETCH_PRODUCTS, NEW_PRODUCT } from '../actions/types';

const initialState = {
  products: [],
  product: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
    case NEW_PRODUCT:
      return {
        ...state,
        product: action.payload
      }
    default:
      return state;
  }
}