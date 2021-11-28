import axios from "axios";

export const getUser = ({ access }) => {
  const url = process.env.REACT_APP_AUTH_URL + "users/me/";
  return axios
    .get(url, { headers: { Authorization: `JWT ${access}` } })
    .then((res) => {
      const user = res.data;
      return user;
    })
    .catch((err) => console.log(err));
};
