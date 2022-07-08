import { FULFILLED, PENDING, REJECTED, loginString, logoutString } from "redux/actionCreators/actionString";

const initialState = {
    userInfo: [],
    isLoading: false,
    errorMsg: null,
    isSuccess: false,
    token: false,
    role: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case loginString + PENDING:
            return {
                ...state,
                errorMsg: null,
                isLoading: true
            }
        case loginString + FULFILLED:
            console.log(action.payload.data);
            return {
                ...state,
                isLoading: false,
                userInfo: action.payload.data.data,
                token: action.payload.data.data.token,
                isSuccess: true,
                role: action.payload.data.data.role

            }
        case loginString + REJECTED:
            return {
                ...state,
                errorMsg: action.payload.response.data.err.msg,
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