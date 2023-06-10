import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER_URL;

// console.log(BASE_URL);

export const searchCountry = async (searchTerm) => {
  return axios.get(`${BASE_URL}/v2/name/${searchTerm}`);
};
