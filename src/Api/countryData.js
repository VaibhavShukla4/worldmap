import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER_URL;

// console.log(BASE_URL);
export const fetchCountryData = async (countryName) => {
  try {
    const response = await axios.get(`${BASE_URL}/v3.1/all`);
    console.log(response);
    const countryData = response.data[0]; // Assuming the API returns an array with the country object
    console.log(countryData); // Process the retrieved data as needed
  } catch (error) {
    console.error(error);
  }
};
export const searchCountry = async (searchTerm) => {
  return axios.get(`${BASE_URL}/v2/name/${searchTerm}`);
};
