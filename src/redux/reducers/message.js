import { ActionTypes } from "../actions/types";

const initialState = {};

function messageReducer (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.SET_MESSAGE:
      return { message: payload };

    case ActionTypes.CLEAR_MESSAGE:
      return { message: "" };

    default:
      return state;
  }
}
export default messageReducer