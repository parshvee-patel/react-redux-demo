import { ActionTypes } from "../actions/types";

const initialState = {
  staff: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_USER:
      console.log("register", payload.staff);
      return {
        ...state,
        staff: payload.staff,
        formSubmitted: false,
      };
    case ActionTypes.FORM_SUBMITION_STATUS:
      return {
        ...state,
        formSubmitted: payload.status,
      };
    default:
      return state;
  }
};

export default reducer;
//   function auth (state = initialState, action) {
//     const { type, payload } = action;

//     switch (type) {
//       case ActionTypes.REGISTER_SUCCESS:
//         return {
//           ...state,
//           isLoggedIn: false,
//         };
//       case ActionTypes.REGISTER_FAIL:
//         return {
//           ...state,
//           isLoggedIn: false,
//         };
//         default:
//       return state;
//   }
// }
