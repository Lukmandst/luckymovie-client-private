import axios from "axios";

export const doSignUp = (body) => {
    return axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/auth/new`, body)
}

export const getUserId = (token)=>{
    const config = {
        headers : {
            "x-acces-token" : `Bearer ${token}`
        }
    }
    return axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/user/`, config)
}