import React from "react";

const CountryDetails = ({ countryData, error }) => {
  return (
    <div className="w-2/5 med:w-full">
      {countryData && (
        <div className="">
          <p className="text-center text-5xl uppercase font-bold py-2">
            {countryData.name}
          </p>
          <div className="flex justify-center py-2">
            <img className="w-96" src={countryData.flags.svg} />
          </div>
          <div className="xl:px-48 py-1 med:text-center">
            <p className="">
              <span className="font-bold">Capital</span>&nbsp;&nbsp;&nbsp;&nbsp;
              {countryData.capital}
            </p>
            <p className="py-1">
              <span className="font-bold">Currency</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              {`${countryData.currencies[0].symbol}, ${countryData.currencies[0].code}, ${countryData.currencies[0].name}`}
            </p>
            <p className="py-1">
              <span className="font-bold">Population</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              {countryData.population}
            </p>
            <p className="py-1">
              <span className="font-bold">Latlang</span>&nbsp;&nbsp;&nbsp;&nbsp;
              {`${countryData.latlng[0]},${countryData.latlng[1]}`}
            </p>
            <p className="py-1">
              <span className="font-bold">Language</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              {countryData?.languages?.map((language, index) => (
                <span
                  key={index}
                  className="bg-lime-500 text-white rounded-sm mx-2 px-1"
                >
                  {language.name}
                </span>
              ))}
            </p>
            <p className="py-1">
              <span className="font-bold">Area</span>&nbsp;&nbsp;&nbsp;&nbsp;
              {countryData.area}
            </p>
            <p className="py-1">
              <span className="font-bold">Timezone</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              {countryData.timezones[0]}
            </p>
            <p className="py-1">
              <span className="font-bold ">Region</span>&nbsp;&nbsp;&nbsp;&nbsp;
              {countryData.region}
            </p>
          </div>
        </div>
      )}
      <div className="flex justify-center items-center h-full">
        {error && <p className="text-red-500 text-2xl font-bold">{error}</p>}
      </div>
    </div>
  );
};

export default CountryDetails;
