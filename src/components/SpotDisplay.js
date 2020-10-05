import React, { useContext } from "react";
import PihaImg from "../imgs/piha.jpg";
import SpotContext from "./SpotContext";

const SpotDisplay = ({ handleAddClick }) => {
  const { selectedSpotObj } = useContext(SpotContext);
  return (
    <div
      style={{
        backgroundImage: `url(${PihaImg})`,
      }}
      className="h-full bg-center bg-no-repeat bg-cover  relative"
    >
      <div className="w-full h-full overlay">
        <div className="customContainer relative">
          <i
            className="fas fa-plus absolute right-0 text-lg mt-10 text-white lg:right-5"
            onClick={handleAddClick}
          >
            Add to your spots
          </i>

          <div className="ml-20 absolute bottom-0 mb-20 text-white lg:ml-0">
            <span className="text-2xl">{selectedSpotObj.region}</span>
            <h1 className="text-6xl font-bold text-shadow tracking-wider">
              {selectedSpotObj.name}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotDisplay;
