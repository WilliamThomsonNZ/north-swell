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
        <div className="p-4 w-full">
          <div className="flex justify-between text-2xl font-bold">
            <h3
              className="cursor-pointer text-3xl pr-6 py-3 hover:underline"
              onClick={handleClick}
              id={name}
            >
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
              <a
                href={`https://magicseaweed.com/Mount-Maunganui-Surf-Report/93/`}
                className="p-5 text-lg rounded bg-teal-700 text-teal-100 font-semibold shadow-lg hover:bg-teal-600 h-16 row-span-1 justify-self-end overflow-hidden"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Full Forecast
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
export default SavedSpot;
