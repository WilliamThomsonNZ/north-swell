import React from "react";
import Index from "../imgs/index-img.jpg";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const LandingPageContent = () => {
  return (
    <div className="bg-gray-100 ">
      <main className="bg-gray-100  relative overflow-hidden h-screen ">
        <div className="  grid grid-cols-5 justify-items-stretch ">
          <div className=" bg-gray-100  customContainer mx-auto col-span-2">
            <Logo />
            <p className="text-gray-500 font-sans font-semibold text-2xl mt-24">
              New Zealand Surf Forecasts
            </p>
            <p className="text-black-900  text-5xl font-bold  mb-24">
              Get your local north island forecast's all in one place.
            </p>
            <Link to="/Main">
              <h3 className="px-10 py-4 rounded bg-teal-700 text-teal-100 font-semibold shadow-lg hover:bg-teal-600  inline-block">
                Get Started
              </h3>
            </Link>
          </div>
          <div className="dropShadow col-span-3 ">
            <img
              src={Index}
              alt="man surfing on wave"
              className="h-auto w-full shadow-2xl "
            />
          </div>
        </div>
      </main>
    </div>
  );
};
export default LandingPageContent;
