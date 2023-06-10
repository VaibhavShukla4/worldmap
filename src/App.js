import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { searchCountry } from "./Api/countryData";
import CountryDetails from "./components/CountryDetails";
import MapWrapper from "./components/MapWrapper";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [countryData, setCountryData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    searchCountry(searchTerm)
      .then((response) => {
        if (response.status === 200 && response.data.length > 0) {
          console.log(response.data[0]);
          setCountryData(response.data[0]);
          setError(null);
        } else {
          setCountryData(null);
          setError("No country found");
        }
      })
      .catch((error) => {
        console.log("Error fetching country data:", error);
        setError("Error fetching country data!");
      });
  };
  return (
    <div className="App">
      <div className="bg-slate-100 h-full w-full">
        <Navbar
          handleSearch={handleSearch}
          setSearchTerm={setSearchTerm}
          countryData={countryData}
          error={error}
          searchTerm={searchTerm}
        />
        <div className="flex med:flex med:flex-col ">
          <MapWrapper />
          <CountryDetails countryData={countryData} error={error} />
        </div>
      </div>
    </div>
  );
}

export default App;
