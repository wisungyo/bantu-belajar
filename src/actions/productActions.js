import { FETCH_PRODUCTS, NEW_PRODUCT } from './types';

export const fetchProducts = () => dispatch => {
  fetch('https://projectbb.herokuapp.com/api/projects/koleksi')
    .then(res => res.json())
    .then(products => dispatch({
      type: FETCH_PRODUCTS,
      payload: products
    }));
};
// NOTE : actions for adding product already made. the form is on the way. (wisnu 13/jun/20)
export const addProduct = (productData) => dispatch => {
  fetch('https://projectbb.herokuapp.com/api/projects/koleksi', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(productData)
  })
    .then(res => res.json())
    .then(product => 
      dispatch({
        type: NEW_PRODUCT,
        payload: product
      }))
};