import axios from "axios";

export const doLogin = (body) => {
    return axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/auth/new`, body)
}