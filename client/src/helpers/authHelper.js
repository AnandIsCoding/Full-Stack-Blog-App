import axios from "axios";

export const authHelper = async () => {
  axios.defaults.withCredentials = true;
  const res = await axios.get('http://localhost:3000/api/v1/checkauth', {
    withCredentials: true,
  });
  const data = await res.data;
  return data.success;
};