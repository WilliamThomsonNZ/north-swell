import React from "react";
import PihaImg from "../imgs/mount3.jpg";

const SpotDisplay = ({ selectedSpotObj, handleAddClick }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${PihaImg})`,
      }}
      className="h-full bg-bottom  relative"
    >
      <div className="w-full h-full overlay">
        <i
          className="fas fa-plus absolute right-0 mr-20 mt-10 text-5xl text-teal-700"
          onClick={handleAddClick}
        ></i>
        <div className="ml-20 absolute bottom-0 mb-20 text-white">
          <span className="text-2xl">{selectedSpotObj.region}</span>
          <h1 className="text-6xl font-bold text-shadow tracking-wider">
            {selectedSpotObj.name}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SpotDisplay;
