import React from "react";

const SavedSpot = ({
  name,
  link,
  id,
  savedSpots,
  setSavedSpots,
  handleClick,
  rating,
}) => {
  let stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<i className="fa fa-star" key={i}></i>);
  }

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
            <h2 className="inline font-bold text-gray-500 ">Spot Rating</h2>
            <div className="flex justify-between text-2xl font-bold mt-2">
              <span className="text-teal-700 text-lg">{stars}</span>
              <a
                href={link}
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
