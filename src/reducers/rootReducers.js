import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers"; 
import programReducer from "./programReducers"; 
import productReducer from "./productReducers";
import newsReducer from "./newsReducers";

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    programs: programReducer,
    products: productReducer,
    news: newsReducer
});