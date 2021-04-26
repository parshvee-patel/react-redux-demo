import loginReducer from "./loginReducers";
import {productsReducer} from "./productReducer";

import { combineReducers } from "redux";

//Root reducers
export default combineReducers({
    login: loginReducer,
    product: productsReducer
})
