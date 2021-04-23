import loginReducer from "./loginReducers";
import productReducer from "./productReducer";

import { combineReducers } from "redux";

//Root reducers
export default combineReducers({
    login: loginReducer,
    product: productReducer
})
