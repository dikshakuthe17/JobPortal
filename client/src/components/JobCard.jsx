import React, { use } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
  const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate(`/job/${job.id}`);
  // };

  return (
    <div className="border border-gray-200  bg-white p-6 rounded-lg shadow-xl hover:scale-105 transform transition hover:shadow-4xl hover:border-green-800">
      <div className="flex justify-between items-center ">
        <img className="h-12 " src={assets.company_icon} alt="" />
      </div>
      <h4 className="font-bold text-xl mt-2 ">{job.title}</h4>
      <div className="flex items-center gap-3  mt-2 text-xs">
        <span className=" bg-green-50 border border-green-200 text-green-600 px-4 py-1.5 rounded  ">
          {job.location}
        </span>
        <span className=" bg-pink-50 border border-pink-200 text-pink-600 px-4 py-1.5 rounded  ">
          {job.level}
        </span>
      </div>
      <p
        className="text-gray-600 mt-4 text-sm"
        dangerouslySetInnerHTML={{ __html: job.description.slice(0, 150) }}
      ></p>
      <div className="flex gap-4 text-sm mt-4">
        <button  onClick = {() => {navigate(`/apply-job/${(job._id)}`); scroll(0,0)}}className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800">
          Apply now
        </button>
        <button  onClick = {() => {navigate(`/apply-job/${(job._id)}`); scroll(0,0)}}className="text-gray-500 border border-gray-500 rounded px-4 py-2">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default JobCard;
