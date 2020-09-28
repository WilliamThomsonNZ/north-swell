import React, { useState } from "react";
import Index from "../imgs/index-img.jpg";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const LandingPageContent = ({ handleClick, spotsData }) => {
  return (
    <div className="bg-gray-100 overflow-hidden">
      <main className="bg-gray-100  relative ">
        <div className="  grid grid-cols-2 justify-items-stretch">
          <div className=" bg-gray-100 w-full customContainer mx-auto">
            <Logo />
            <p className="text-gray-500 font-sans font-semibold text-2xl mt-24">
              New Zealand Surf Forecasts
            </p>
            <p className="text-black-900  text-5xl font-bold  mb-24">
              Get your local north island forecast's all in one place.
            </p>

            <Link to="/Main">
              <h3 className="text-2xl font-bold mt-32">
                All ready saved some spots?
              </h3>
            </Link>
          </div>
          <div className="dropShadow">
            <img
              src={Index}
              alt="man surfing on wave"
              className="h-auto w-full shadow-2xl index-img"
            />
          </div>
        </div>
      </main>
    </div>
  );
};
export default LandingPageContent;
