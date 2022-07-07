import { FULFILLED, PENDING, REJECTED, loginString, logoutString } from "redux/actionCreators/actionString";

const initialState = {
    userInfo: [],
    isLoading: false,
    isError: null,
    isSuccess: false,
    // token: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case loginString + PENDING:
            return {
                ...state,
                isError: null,
                isLoading: true
            }
        case loginString + FULFILLED:
            return {
                ...state,
                isError: null,
                isLoading: false,
                userInfo: action.payload.data,
                // token: action.payload.data.token,
                isSuccess: true
            }
        case loginString + REJECTED:
            return {
                ...state,
                isError: action.payload.response.data.msg,
                isLoading: false,
                isSuccess: false
            }
        case logoutString:
            return {
                ...initialState
            }
        default:
            return state
    }
}

export default authReducer