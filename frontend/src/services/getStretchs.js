import axios from 'axios'

export const getStretchs = ({ access }) =>{
    const url = process.env.REACT_APP_API_URL
    return axios.get(url, { headers: { 'Authorization': `JWT ${access}` } }).then(res => {
        const stretchs = res.data
        return stretchs
    })
}