import loginReducer from "./loginReducers";
import { productsReducer } from "./productReducer";
import auth from "./auth";
import message from "./message";

import { combineReducers } from "redux";

//Root reducers
const rootReducer = combineReducers({
  user: auth,
  login: loginReducer,
});

export default rootReducer
// export default combineReducers({
//     auth,
//     message,
//     product: productsReducer
// })
