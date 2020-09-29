import React, { useState, useEffect } from "react";

import Logo from "./Logo";
import SearchBar from "./SearchBar";
import SpotList from "./SpotList";
import SpotDisplay from "./SpotDisplay";
import SpotInfo from "./SpotInfo";
import Menu from "./Menu";

const Main = () => {
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
  const [hiddenStyle, setHiddenStyle] = useState(true);

  //updating the currently selected spot obj
  useEffect(() => {
    setSelectedSpotObj(
      spotsData.filter((spot) => spot.name === selectedSpot)[0]
    );
    handleStyle();
  }, [selectedSpot]);

  //handling the click on the search bar
  const handleClick = (e) => {
    setSelectedSpot(e.target.id);
  };
  const handleStyle = () => {
    setHiddenStyle(!hiddenStyle);
  };
  const handleAddClick = (e) => {
    const storedSpots = JSON.parse(localStorage.getItem("savedSpots"));

    //Filter through and make sure that the same item is not being added twice
    let repeatCheck = [];
    if (storedSpots) {
      repeatCheck = storedSpots.filter((spot) =>
        spot.id === selectedSpotObj.id ? spot : null
      );
      console.log(repeatCheck);
    }
    if (repeatCheck.length > 0) {
      alert("you can not save the same spot to your list");
      repeatCheck = [];
    } else {
      let savedSpotsArr = [selectedSpotObj];
      if (storedSpots) {
        savedSpotsArr.push(...storedSpots);
      }
      // setSavedSpots(savedSpotsArr);
      localStorage.setItem("savedSpots", JSON.stringify(savedSpotsArr));
      setSavedSpots(savedSpotsArr);
    }
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
    <div className="bg-gray-100  grid-cols-5 grid-rows-5 h-screen grid lg:grid-rows-6">
      <div
        className={`customContainer mx-auto col-span-2 row-span-5 app-spotList  lg:fixed lg:top-0 lg:left-0 lg:z-30 lg:col-span-6 lg:row-span-6 lg:bg-gray-100 lg:${
          hiddenStyle ? "hidden" : "block"
        }`}
      >
        <Logo />
        <SearchBar
          handleClick={handleClick}
          spotsData={spotsData}
          handleStyle={handleStyle}
        />
        <SpotList
          savedSpots={savedSpots}
          setSavedSpots={setSavedSpots}
          handleClick={handleClick}
        />
      </div>
      <div className=" hidden relative lg:row-span-1 lg:col-span-5 lg:block">
        <Logo />
        <Menu handleStyle={handleStyle} />
      </div>
      <div className="row-span-3 col-span-3 lg:col-span-5 ">
        <SpotDisplay
          selectedSpotObj={selectedSpotObj}
          handleAddClick={handleAddClick}
        />
      </div>
      <div className="bg-white row-span-2 col-span-3 lg:col-span-5 ">
        <SpotInfo selectedSpotObj={selectedSpotObj} />
      </div>
    </div>
  );
};

export default Main;
