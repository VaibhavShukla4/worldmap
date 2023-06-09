import React from "react";

import { FiSearch } from "react-icons/fi";
const SearchComponent = ({
  handleSearch,
  setSearchTerm,
  error,
  searchTerm,
}) => {
  return (
    <React.Fragment>
      <div className="relative w-2/5 med:w-4/5">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="text-sm sm:text-base placeholder-gray-500 pl-5 pr-5 rounded-lg   w-full py-2 focus:outline-none focus:border-sky-500 border-2 "
        />
        <div className="inline-flex items-center justify-end absolute right-2 top-0 h-11 w-10 text-gray-400">
          <span
            className="p-0.5 bg-sky-400 text-white cursor-pointer"
            onClick={handleSearch}
          >
            <FiSearch fontSize={30} />
          </span>
        </div>
      </div>
      {error && <p>{error}</p>}
    </React.Fragment>
  );
};

export default SearchComponent;
