import { ActionTypes } from "./types";
import handler from "../../handlers";

export const ActionCreators = {
  addStaff: (staff) => ({ type: ActionTypes.ADD_USER, payload: { staff } }),
  formSubmitionStatus: (status) => ({
    type: ActionTypes.FORM_SUBMITION_STATUS,
    payload: { status },
  }),
};

// export const staffRegistration = (firstName,email,password) => (dispatch) => {
//     return handler.staffRegistration(firstName,email,password).then(
//       (response) => {
//         dispatch({
//           type: ActionTypes.REGISTER_SUCCESS,
//         });

//         dispatch({
//           type: ActionTypes.SET_MESSAGE,
//           payload: response.data.message,
//         });

//         return Promise.resolve();
//       },
//       (error) => {
//         const message =
//           (error.response &&
//             error.response.data &&
//             error.response.data.message) ||
//           error.message ||
//           error.toString();

//         dispatch({
//           type:ActionTypes.REGISTER_FAIL,
//         });

//         dispatch({
//           type: ActionTypes.SET_MESSAGE,
//           payload: message,
//         });

//         return Promise.reject();
//       }
//     );
//   };
