import { GET_USER } from "./actionTypes"

const initialState = {

    userDetails: null,
}
const dashboard = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            state = {
                ...state,
                userDetails: action.payload.data,
            }   
            break
        default:
            state = { ...state }
            break
    }
    return state
}
export default dashboard