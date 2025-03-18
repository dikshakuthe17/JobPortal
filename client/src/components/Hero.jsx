import React, { useContext, useRef } from "react";
import { assets } from "../assets/assets";
import "../components/Hero.css";
import { AppContext } from "../context/AppContext";

const Hero = () => {
  const { setSearchFilter, setIsSearched } = useContext(AppContext);

  const titleRef = useRef(null);
  const locationRef = useRef(null);

  const onSearch = () => {
    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });
    setIsSearched(true);
    console.log({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });
  };

  return (
    // Fast track to your ideal job
    <div className="container 2xl:px-20  mx-auto my-10">
      <div className="flex items-center flex-col">
        <h1 className=" text-center fontapply text-2xl sm:text-4xl md:text-5xl lg:text-5xl  font-medium  mb-1">
          The Fast Track to Your Ideal Job
        </h1>
        <h2 className="text-md md:text-xl lg:text-xl pb-5 lg:pb-10">
          Over 10,000+ jobs for you to explore!
        </h2>
      </div>

      {/* Search for jobs */}

      <div className="bg-gradient-to-l from-green-400 via-teal-700 to-sky-800  py-10  mx-auto rounded-xl sm:mx-aut mx-2">
        <p className="mb-4 text-white  lg:text-2xl text-center  max-w-xl mx-auto text-md   ">
          Start Your Dream Career's Today-Explore the Best Job Opportunities And
          Take The First Step Toward Your Future!
        </p>
        <div className="flex items-center justify-between bg-white rounded text-gay-600 max-w-xl pl-4 mx-4 mt-10 sm:mx-auto ">
          <div className="flex items-center  ">
            <img className="h-4 sm:h-5" src={assets.search_icon} alt="" />
            <input
              type="text"
              placeholder=" Search for jobs"
              className="max-sm:text-xs p-2  rounded outline-none w-full "
              ref={titleRef}
            />
          </div>
          <div className="flex items-center ">
            <img className="h-4 sm:h-5" src={assets.location_icon} alt="" />
            <input
              type="text"
              placeholder=" Location"
              className="max-sm:text-xs p-2 rounded outline-none w-full "
              ref={locationRef}
            />
          </div>
          <button
            onClick={onSearch}
            className="bg-teal-700 px-6 py-2 rounded text-white m-1  hover:bg-teal-900 "
          >
            Search
          </button>
        </div>
      </div>

      {/* Company hiring now */}

      <div>
      <h1 className=" fontme text-center  text-xl md:text-3xl lg:text-3xl font-medium   mb-1  mt-5 lg:mt-10">
          Top Companies Hiring Now
        </h1>
      </div>

      <div className=" text-center mt-5 border border-gray-300 rounded-md lg:mt-8 mx-2  p-6 flex shadow-lg">
       <div className="flex justify-center gap-10 lg:gap-16 flex-wrap">
          <img className="h-8 " src={assets.microsoft_logo} alt="" />
          <img className="h-8 " src={assets.walmart_logo} alt="" />
          <img className="h-8" src={assets.accenture_logo} alt="" />
          <img className="h-8" src={assets.samsung_logo} alt="" />
          <img className="h-8" src={assets.amazon_logo} alt="" />
          <img className="h-8" src={assets.adobe_logo} alt="" />
        
        </div> 
      </div>
    </div>
  );
};

export default Hero;
