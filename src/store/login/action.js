import { LOGIN_SUCCESSFUL } from "./actionTypes";

export const loginSuccessful = (user) => {
  return { type: LOGIN_SUCCESSFUL, payload: user };
};
