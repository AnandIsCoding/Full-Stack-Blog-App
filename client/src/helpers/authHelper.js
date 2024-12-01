import axios from "axios";

export const authHelper = async () => {
  axios.defaults.withCredentials = true;
  const res = await axios.get('https://genmyblog.onrender.com/api/v1/checkauth', {
    withCredentials: true,
  });
  const data = await res.data;
  return data.success;
};