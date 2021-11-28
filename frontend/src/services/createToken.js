import axios from "axios";

export const createToken = ({ email, password }) =>{
    const url = process.env.REACT_APP_AUTH_URL+'jwt/create/'
    return axios.post(url, { email, password }).then(res =>{
        const jwt = res.data
        return jwt
    })
}