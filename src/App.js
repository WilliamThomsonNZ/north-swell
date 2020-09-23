import React, { useState, useEffect } from "react";

import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import SpotList from "./components/SpotList";
import SpotDisplay from "./components/SpotDisplay";
import SpotInfo from "./components/SpotInfo";

function App() {
  //the initail state of the application
  const initialSpot = {
    name: "Piha Beach",
    id: 1,
    region: "Auckland, New Zealand",
    lat: "36.9565",
    long: "174.4676",
  };
  const [selectedSpot, setSelectedSpot] = useState("Piha Beach");
  const [spotsData, setSpotsData] = useState([initialSpot]);
  const [selectedSpotObj, setSelectedSpotObj] = useState(initialSpot);
  const [savedSpots, setSavedSpots] = useState([]);

  //updating the currently selected spot obj
  useEffect(() => {
    setSelectedSpotObj(
      spotsData.filter((spot) => spot.name === selectedSpot)[0]
    );
  }, [selectedSpot]);

  //handling the click on the search bar
  const handleClick = (e) => {
    setSelectedSpot(e.target.id);
  };

  const handleAddClick = (e) => {
    const storedSpots = JSON.parse(localStorage.getItem("savedSpots"));
    let savedSpotsArr = [selectedSpotObj];
    if (storedSpots) {
      savedSpotsArr.push(...storedSpots);
    }
    // setSavedSpots(savedSpotsArr);
    localStorage.setItem("savedSpots", JSON.stringify(savedSpotsArr));
    setSavedSpots(savedSpotsArr);
  };

  //fetching the basic spot json
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.jsonbin.io/b/5f6171867243cd7e823d0fdf"
      );
      const data = await response.json();
      setSpotsData(data);
      console.log(data);
    };
    fetchData();
    setSavedSpots(JSON.parse(localStorage.getItem("savedSpots")));
  }, []);
  return (
    <div className="bg-gray-100 grid grid-cols-5 grid-rows-5 h-screen">
      <div className="customContainer mx-auto col-span-2 row-span-5">
        <Logo />
        <SearchBar handleClick={handleClick} spotsData={spotsData} />
        <SpotList
          savedSpots={savedSpots}
          setSavedSpots={setSavedSpots}
          handleClick={handleClick}
        />
      </div>
      <div className="row-span-3 col-span-3 ">
        <SpotDisplay
          selectedSpotObj={selectedSpotObj}
          handleAddClick={handleAddClick}
        />
      </div>
      <div className="bg-white row-span-2 col-span-3 ">
        <SpotInfo selectedSpotObj={selectedSpotObj} />
      </div>
    </div>
  );
}

export default App;
