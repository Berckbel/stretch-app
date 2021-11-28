import axios from "axios";

export const refreshToken =({ refresh }) =>{
    const url = process.env.REACT_APP_AUTH_URL+'jwt/refresh'
    return axios.post(url, {refresh}).then(res =>{
        const access = res
        return access
    }).catch(err => console.log(err))
}