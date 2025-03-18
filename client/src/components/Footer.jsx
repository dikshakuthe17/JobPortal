import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="container footer px-4 2xl:px-20 mx-auto flex items-center justify-between py-3 gap-4 mt-20">
      <img width={100} src={assets.logo} alt="" />
      <p className="flex-1 border-1 border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        Copyright @Diksha.kuthe All right reserved.{" "}
      </p>
      <div className="flex gap-2.5   ">
        <img width={38}  className=" hover:scale-105 transform transition hover:bg-teal-300 rounded-3xl" src={assets.facebook_icon} alt="" />
        <img width={38} className=" hover:scale-105 transform transition hover:bg-teal-300 rounded-3xl"  src={assets.twitter_icon} alt="" />
        <img width={38} className=" hover:scale-105 transform transition hover:bg-teal-300 rounded-3xl"  src={assets.instagram_icon} alt="" />
      </div>
    </div>
  );
};

export default Footer;
