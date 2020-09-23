import React from "react";
import SavedSpot from "./SavedSpot";

const SpotList = ({ savedSpots, setSavedSpots, handleClick }) => {
  return (
    <div className="h-64">
      <h2 className="half-underline text-xl font-bold ">Your Spots</h2>
      <ul className="overflow-x-auto listHeight mt-5">
        {savedSpots ? (
          savedSpots.map((spot) => {
            return (
              <SavedSpot
                key={spot.id}
                id={spot.id}
                img="#"
                name={spot.name}
                size="10M"
                handleClick={handleClick}
                savedSpots={savedSpots}
                setSavedSpots={setSavedSpots}
              />
            );
          })
        ) : (
          <h1>Looks Like you dont have any spots</h1>
        )}
      </ul>
    </div>
  );
};

export default SpotList;
