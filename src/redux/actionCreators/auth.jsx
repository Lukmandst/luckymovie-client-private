import { doLogin } from "modules/axios";
import { loginString, logoutString } from "./actionString";

export const loginAction = (body) => ({
    type: loginString,
    payload: doLogin(body)
});

export const logoutAction = () => ({
    type: logoutString
})