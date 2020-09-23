import React from "react";
import PihaImg from "../imgs/piha.jpg";

const SavedSpot = ({
  name,
  size,
  id,
  savedSpots,
  setSavedSpots,
  handleClick,
}) => {
  return (
    <li className="pr-10">
      <div className="bg-white w-full  rounded-md shadow-xl mt-12 flex">
        <div className="w-1/3 rounded-r-lg shadow-xl">
          <img
            src={PihaImg}
            alt="surfing spot"
            className="w-full h-full rounded-l-md"
          />
        </div>
        <div className="p-4 w-full">
          <div className="flex justify-between text-2xl font-bold">
            <h3 onClick={handleClick} id={name}>
              {name}
            </h3>
            <button
              className="text-red-500 text-2xl align-top"
              onClick={() => {
                const handleClear = (id) => {
                  const updatedList = savedSpots.filter(
                    (spot) => spot.id !== id
                  );
                  if (updatedList.length === 0) {
                    localStorage.clear();
                    setSavedSpots([]);
                  } else {
                    setSavedSpots(updatedList);
                    localStorage.setItem(
                      "savedSpots",
                      JSON.stringify(updatedList)
                    );
                  }
                };
                handleClear(id);
              }}
            >
              &times;
            </button>
          </div>
          <div>
            <div className="flex justify-between text-2xl font-bold mt-2">
              <span className="text-teal-700 text-lg">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </span>
              <span>{size}</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
export default SavedSpot;
