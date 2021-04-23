import { ADD_PRODUCT, DELETE_PRODUCT } from "../actions/types";

//IntialState
const initialState = { product: [] };

//Production Reducer
function productReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      var p = state.product;
      p.push(action.payload);
      return {
        ...state,
        product: p,
      };
    case DELETE_PRODUCT:
      var a = state.product;
      a.slice(12);
      return {
        ...state,
        product: a,
      };
    default:
      return state;
  }
}

export default productReducer;
