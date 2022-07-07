import { legacy_createStore as createStore, applyMiddleware, compose, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { createLogger } from "redux-logger";
import rpm from "redux-promise-middleware";
import storage from "redux-persist/lib/storage";
import authReducer from "./reducers/auth";
import thunk from "redux-thunk";

// redux persist config start
const rootPersistConfig = {
    key: "root",
    storage,
    whitelist: ["authReducer"],
};

const authPersistConfig = {
    key: "authReducer",
    storage,
    whitelist: ['token', 'role'],
};

const storeReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
});

const persistedReducer = persistReducer(rootPersistConfig, storeReducer);

// redux-logger middleware
const logger = createLogger();
const middlewares = applyMiddleware(rpm, thunk, logger);

export let store = createStore(persistedReducer, compose(middlewares));
export let persistor = persistStore(store);