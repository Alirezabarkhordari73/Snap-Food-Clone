import React from "react";
import { BsClock } from "react-icons/bs";

const ShowCounter = ({ hours, minutes, seconds, color }) => {
  return (
    <div className=" w-[150px] flex justify-center items-center gap-3">
      <div
        id="demo"
        style={{ color: `${color}` }}
        className="text-[1rem] lg:text-[1.3rem] tracking-[3px] font-semibold flex items-center justify-center"
      >
        <p>{seconds}:</p>
        <p>{minutes}:</p>
        <p>{hours}</p>
      </div>

      <BsClock className="text-[1.4rem] text-white" />
    </div>
  );
};

export default ShowCounter;
