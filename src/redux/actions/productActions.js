import { ADD_PRODUCT, DELETE_PRODUCT } from "./types";

export const addProduct = (payload) => {
  return {
    type: ADD_PRODUCT,
    payload: payload,
  };
};

export const deleteProduct = (payload) => {
    return {
      type: DELETE_PRODUCT,
      payload: payload,
    };
  };