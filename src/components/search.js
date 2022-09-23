import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { apiEndPoint, geoApiOptions } from "./fectch";

function Search({ onSearchChange }) {
  const [search, setSearch] = useState(null);
  const handleOnChange = ({ searchData }) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  const loadOptions = async (inputValue) => {
    await fetch(
      `${apiEndPoint}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
            options : response.data.map((city)=>{
                return {
                    value: `${city.latitude} ${city.longitude}`,
                    label: `${city.name}, ${city.countryCode}`,
                };
            }),
        };
  })
      .catch((err) => console.error(`error is ${err}`));
  };
//   const test = async ()=>{
//   console.log(await loadOptions(`delhi`).options)}
//   test();
  return (
    <AsyncPaginate
      placeholder="search for the city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
}

export default Search;
