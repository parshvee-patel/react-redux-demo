import { combineReducers } from "redux";
import Login from "./login/reducer";
import Dashboard from './dashboard/reducer'
const rootReducer = combineReducers({ Login,Dashboard});
export default rootReducer;