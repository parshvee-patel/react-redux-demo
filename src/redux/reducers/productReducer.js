import { ActionTypes } from "../actions/types";

//IntialState
const initialState = { products: [] };

//Production Reducer
function productReducer(state = initialState, {type,payload}) {
  switch (type) {
    case ActionTypes.ADD_PRODUCT:
      var p = state.products;
      p.push(payload);
      return {
        ...state,
        products: p,
      };
    default:
      return state;
  }
}

export default productReducer;
