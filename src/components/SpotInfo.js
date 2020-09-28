import React, { useState, useEffect } from "react";
import spinner from "../imgs/spinner.svg";

const SpotInfo = ({ selectedSpotObj }) => {
  const params = "swellPeriod,swellHeight,windDirection,windSpeed";
  const [swellPeriod, setSwellPeriod] = useState("");
  const [swellHeight, setSwellHeight] = useState("");
  const [windDirection, setWindDirection] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [dataLoading, setDataLoading] = useState(true);

  // useEffect(() => {
  //   const fetchWeather = async () => {
  //     setDataLoading(true);
  //     const res = await fetch(
  //       `https://api.stormglass.io/v2/weather/point?lat=${selectedSpotObj.lat}&lng=${selectedSpotObj.long}&params=${params}`,
  //       {
  //         headers: {
  //           Authorization:
  //             "3a957de6-f337-11ea-8b4e-0242ac130002-3a957ea4-f337-11ea-8b4e-0242ac130002",
  //         },
  //       }
  //     );
  //     const data = await res.json();
  //     setSwellPeriod(data.hours[12].swellPeriod.icon);
  //     setSwellHeight(data.hours[12].swellHeight.icon);
  //     setWindDirection(data.hours[12].windDirection.icon);
  //     setWindSpeed(data.hours[12].windSpeed.icon);
  //     setDataLoading(false);
  //   };
  //   fetchWeather();
  // }, [selectedSpotObj]);

  return dataLoading ? (
    <div className="flex content-center justify-center h-full">
      <img src={spinner} alt="loading Spinner" />
    </div>
  ) : (
    <div className="overflow-hidden ">
      <div className="grid grid-rows-2 grid-cols-2  customContainer ml-20 mt-10 overflow-hidden gap-12 lg:ml-0">
        <div className="row-span-1 ">
          <h2 className="inline">Spot Rating</h2>
          <span className="text-teal-700  text-3xl block mb-5">
            <i className="fas fa-star dropShadow"></i>
            <i className="fas fa-star dropShadow"></i>
            <i className="fas fa-star dropShadow"></i>
            <i className="fas fa-star dropShadow"></i>
            <i className="far fa-star dropShadow"></i>
          </span>
          <span className=" font-bold text-gray-500 inline-block">Swell</span>
          <span className=" font-bold text-gray-500  ml-16">Period</span>
          <br></br>
          <span className=" font-bold text-black inline-block text-2xl">
            {swellHeight}m
          </span>
          <span className=" font-bold text-black inline-block ml-10 text-2xl">
            {swellPeriod}s
          </span>
        </div>
        <div className="row-span-1 relative ">
          <span className="absolute right-0 text-4xl font-bold">
            {windSpeed}
            <span className="text-lg mr-5 font-semibold"> KM/H</span>
            <i
              className="fas fa-arrow-right text-teal-700"
              style={{ transform: `rotate(${windDirection}deg)` }}
            ></i>
          </span>
        </div>
        <div className="row-span-1 overflow-hidden">
          <p className="w-full text-lg">
            Piha is New Zealand's most famous surf beach. Situated on the west
            coast of the North Island, 40 kms from the city of Auckland
          </p>
        </div>
        <a
          href={`https://magicseaweed.com/Mount-Maunganui-Surf-Report/93/`}
          className="px-10 py-4 rounded bg-teal-700 text-teal-100 font-semibold shadow-lg hover:bg-teal-600 h-16 row-span-1 justify-self-end overflow-hidden"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Full Forecast
        </a>
      </div>
    </div>
  );
};

export default SpotInfo;
