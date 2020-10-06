import React from "react";
import Index from "../imgs/index.svg";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const LandingPageContent = () => {
  return (
    <div className="bg-gray-100 ">
      <main className="bg-gray-100  relative overflow-hidden lg:overflow-visible h-screen ">
        <div className="flex h-screen md:block">
          <div className=" bg-gray-100 ml-32 xl:ml-16  col-span-2 w-1/3 md:w-4/5 md:mx-auto ">
            <Logo />
            <p className="text-teal-700  lgFont mt-24 logoFont sm:text-5xl">
              North Swell
            </p>
            <p className="text-black-900 contentFont font-semibold text-5xl   mb-24 md:mb-16 xl:text-2xl lg:text-2xl sm:text-sm">
              All your local North Island surf forecasts in one place.
            </p>
            <Link to="/Main">
              <h3 className="px-16 text-xl py-4 rounded bg-teal-700 text-teal-100 font-semibold shadow-lg hover:bg-teal-600  inline-block md:text-lg ">
                Get Started
              </h3>
            </Link>
            <div className="fixed bottom-0 left-0 w-1/3 lg:w-full ">
              <hr className="w-3/4 mx-auto" />
              <h4 className="text-center my-5">
                &copy; 2020 North Swell. All rights reserved.
              </h4>
            </div>
          </div>
          <div className="w-2/3 relative md:hidden">
            <a
              href="https://github.com/WilliamThomsonNZ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github absolute right-5 top-5 text-5xl hover:text-teal-700"></i>
            </a>
            <img
              src={Index}
              alt="man carrying surfboard"
              className="min-w-full min-h-full my-auto"
            />
          </div>
        </div>
      </main>
    </div>
  );
};
export default LandingPageContent;
