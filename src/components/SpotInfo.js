import React, { useState, useEffect, useContext } from "react";
import spinner from "../imgs/spinner.svg";
import SpotContext from "./SpotContext";
import { secret } from "./secrets";
const SpotInfo = () => {
  const params = "swellPeriod,swellHeight,windDirection,windSpeed";
  const [swellPeriod, setSwellPeriod] = useState("");
  const [swellHeight, setSwellHeight] = useState("");
  const [windDirection, setWindDirection] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [dataLoading, setDataLoading] = useState(true);

  const { selectedSpotObj } = useContext(SpotContext);
  useEffect(() => {
    const fetchWeather = async () => {
      setDataLoading(true);
      const res = await fetch(
        `https://api.stormglass.io/v2/weather/point?lat=${selectedSpotObj.lat}&lng=${selectedSpotObj.long}&params=${params}`,
        {
          headers: {
            Authorization: secret,
          },
        }
      );
      const data = await res.json();
      setSwellPeriod(data.hours[12].swellPeriod.icon);
      setSwellHeight(data.hours[12].swellHeight.icon);
      setWindDirection(data.hours[12].windDirection.icon);
      setWindSpeed(data.hours[12].windSpeed.icon);
      setDataLoading(false);
    };
    fetchWeather();
  }, [selectedSpotObj]);
  let stars = [];
  for (let i = 0; i < selectedSpotObj.rating; i++) {
    stars.push(<i className="fa fa-star" key={i}></i>);
  }

  return dataLoading ? (
    <div className="flex content-center justify-center h-full">
      <img src={spinner} alt="loading Spinner" />
    </div>
  ) : (
    <div className="overflow-hidden main">
      <div className="grid grid-rows-2 grid-cols-2  customContainer ml-20 mt-10 overflow-hidden gap-12 lg:ml-0 sm:block">
        <div className="row-span-1 ">
          <h2 className="inline font-bold text-gray-500 ">Spot Rating</h2>
          <span className="text-teal-700  text-3xl block mb-5">{stars}</span>
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
          <span className="absolute right-0 text-4xl font-bold sm:inline-block sm:static sm:mt-5">
            {windSpeed}
            <span className="text-lg mr-5 font-semibold"> KM/H</span>
            <i
              className="fas fa-arrow-right text-teal-700"
              style={{ transform: `rotate(${windDirection}deg)` }}
            ></i>
          </span>
        </div>
        <div className="row-span-1 overflow-hidden sm:mt-5">
          <p className="w-full text-lg">{selectedSpotObj.description}</p>
        </div>
        <a
          href={selectedSpotObj.link}
          className="px-10 py-4 rounded bg-teal-700 text-lg text-teal-100 font-semibold shadow-lg hover:bg-teal-600 h-16 row-span-1 justify-self-end overflow-hidden sm:mt-5  inline-block"
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
