import { ActionTypes } from "./types";

export function loginUser(payload) {
  return function (dispatch) {
    dispatch({
      type: ActionTypes.LOGIN_REQUEST,
      payload: payload,
    });
  };
}
