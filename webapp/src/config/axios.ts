import axios from "axios";

export const setUpAxios = () => {
  axios.defaults.baseURL = process.env.SERVER_BASE_URL;
};
