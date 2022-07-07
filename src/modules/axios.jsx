import axios from "axios";

export const doSignUp = (body) => {
    return axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/auth/new`, body)
}