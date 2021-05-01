import {LOGIN_SUCCESSFUL} from './actionTypes'

//InitialState
const initialState = {
    // isLoggedIn: false,
    user: {
      email: "",
      password: "",
    },
  };
  const login = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESSFUL:         
                state = {
                    ...state,
                    // isLoggedIn: true,
                    user: action.payload,
                }  
            break
        default:
            state = { ...state }
            break
    }
    return state
}
export default login