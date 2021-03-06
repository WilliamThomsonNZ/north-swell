import React, { useContext } from "react";

import SpotContext from "./SpotContext";

const SpotDisplay = ({ handleAddClick }) => {
  const { selectedSpotObj, selectedImage } = useContext(SpotContext);
  return (
    <div
      style={{
        backgroundImage: `url(${selectedImage})`,
      }}
      className="h-full bg-center bg-no-repeat bg-cover  relative"
    >
      <div className="w-full h-full overlay">
        <div className="customContainer relative">
          <button
            onClick={handleAddClick}
            className="absolute right-0 text-xl mt-10 text-white lg:right-5 font-bold "
          >
            <i className="fas fa-plus mr-2"></i>
            Save Spot
          </button>

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
