import React from "react";
import LogoPng from "../imgs/Twin.png";

function Logo() {
  return (
    <div className="flex items-center pt-8 bg-gray-100 mb-10 ">
      <img src={LogoPng} alt="North Swell Logo " className="w-16" />
      <h1 className="logoFont text-5xl ">North Swell</h1>
    </div>
  );
}

export default Logo;
