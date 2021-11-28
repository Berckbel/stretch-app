import axios from "axios";

export const createUser = ({ email, name, password, re_password }) =>{
    const url = process.env.REACT_APP_AUTH_URL+'users/create/'
    return axios.post(url, { email, name, password, re_password }).then(res =>{
        const user = res.data
        return user
    }).catch(err => console.log(err))
}