const { combineReducers } = require("redux");
const { default: authReducer } = require("./auth");

const reducers = combineReducers({
    auth: authReducer,
})

export default reducers