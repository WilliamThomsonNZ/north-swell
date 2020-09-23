import React, { useState, useEffect } from "react";

function SearchBar({ padding, handleClick, spotsData }) {
  //States of component
  const [input, setInput] = useState("");
  const [spotNames, setSpotNames] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  //Getting spot list and assigning it in state
  useEffect(() => {
    setSpotNames(spotsData.map((spot) => spot.name));
  }, [spotsData]);

  //Filtering whilst the user is typing
  useEffect(() => {
    const searchedSpots = spotNames.filter((spot) =>
      spot.toLowerCase().includes(input)
    );
    setSearchResults(searchedSpots);
  }, [input]);

  return (
    <div className={padding}>
      <input
        type="text"
        placeholder="Enter North Island Surf Spot"
        className="p-4 w-full rounded shadow-lg"
        onChange={handleChange}
        value={input}
      />

      <ul className="h-32 mt-3 overflow-x-auto rounded">
        {searchResults.map((spot) => (
          <li
            key={spot}
            className="bg-white p-2 rounded border-gray-200 border-2 mt-1 cursor-pointer"
            onClick={handleClick}
            id={spot}
          >
            {spot}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
