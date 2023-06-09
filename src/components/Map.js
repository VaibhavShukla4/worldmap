import React, { useState } from "react";
import { fetchCountryData } from "../Api/countryData";
const Map = () => {
  const [countryName, setCountryName] = useState("");
  const handleCountrySelection = (countryName) => {
    fetchCountryData(countryName);
  };

  return (
    // Inside the render or JSX part
    <React.Fragment>
      <button
        className="text-2xl"
        onClick={() => handleCountrySelection("SelectedCountryName")}
      >
        Get Country Data
      </button>
      <p>Country Name: {countryName}</p>
    </React.Fragment>
  );
};

export default Map;
