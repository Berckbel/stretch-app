import axios from "axios";

export const activateUser = ({ uid, token }) =>{
    const url = process.env.REACT_APP_AUTH_URL+ `users/activation/${uid}/${token}`
    return axios.post(url, { uid, token }).then(res =>{
        const data = res.data
        return data
    }).catch(err => console.log(err))
}