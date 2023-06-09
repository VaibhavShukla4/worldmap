import React from "react";
import SearchComponent from "./SearchComponent";

const Navbar = ({
  handleSearch,
  setSearchTerm,
  countryData,
  error,
  searchTerm,
}) => {
  return (
    <div className="flex justify-center w-full">
      <SearchComponent
        handleSearch={handleSearch}
        setSearchTerm={setSearchTerm}
        countryData={countryData}
        error={error}
        searchTerm={searchTerm}
      />
    </div>
  );
};

export default Navbar;
