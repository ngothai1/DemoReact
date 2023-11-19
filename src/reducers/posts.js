import { FETCH_PRODUCT,CREATE_PRODUCT,UPDATE_PRODUCT,DELETE_PRODUCT } from "../constants/actionTypes";
export default (state= [],action)=> {
    switch(action.type){
        case FETCH_PRODUCT:
            return action.payload;
        case CREATE_PRODUCT:
            return [...state,action.payload];
        case UPDATE_PRODUCT:
            return state.map((post) => post.id === action.payload.id ? action.payload : post);
        case DELETE_PRODUCT:
            return state.filter((post) => post.id !== action.payload);
        default:
            return state;
    }
}