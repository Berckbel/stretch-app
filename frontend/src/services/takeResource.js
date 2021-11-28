import axios from 'axios'

export const takeResource = ({ access, stretch_id, user_id }) =>{
    const url = process.env.REACT_APP_API_URL
    return axios.put(url, {
        stretch_id,
        user_id
      }, {
        headers: {
          'Authorization': `JWT ${access}` 
        }
      }).catch(err => console.log(err))
}