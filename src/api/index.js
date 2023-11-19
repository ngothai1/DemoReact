import axios from 'axios'

const url = 'http://localhost:4000/posts';

export const fetchProduct = () => axios.get(url);
export const createProduct = (post) => axios.post(url,post);
export const updateProduct = (id,newUpdate) => axios.patch(`${url}/${id}}`, newUpdate);
export const deleteProduct = (id) => axios.delete(`${url}/${id}`);