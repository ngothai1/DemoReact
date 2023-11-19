import * as api from '../api/index.js'
import { FETCH_PRODUCT,CREATE_PRODUCT,UPDATE_PRODUCT,DELETE_PRODUCT } from '../constants/actionTypes.js'

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProduct();
    dispatch({ type: FETCH_PRODUCT, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createProduct = (post) => async (dispatch) => {
    try {
        const { data } = await api.createProduct(post);
        dispatch({type: CREATE_PRODUCT,payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateProduct = (id, newUpdate) => async (dispatch) => {
  try {
    const { data } = await api.updateProduct(id, newUpdate);
    dispatch({ type: UPDATE_PRODUCT, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
    try {
        const {data} = await api.deleteProduct(id);
        dispatch({type: UPDATE_PRODUCT,payload: data})
    } catch (error) {
        console.log(error.message);
    }
}