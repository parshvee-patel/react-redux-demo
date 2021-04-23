import { LOGIN_REQUEST, REGISTER_USER } from "./types";

export function loginUser(payload) {
  return {
    type: LOGIN_REQUEST,
    payload: payload,
  };
}
