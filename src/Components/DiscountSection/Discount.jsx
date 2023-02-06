import React from "react";
import { IoIosArrowBack } from "react-icons/io";

import { CountDownTimer } from "../Index";
import DiscountImage from "../../Assets/Images/DiscountImg.png";

const Discount = () => {
  const THREE_DAYS_IN_MS = 8 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  return (
    <div className="DiscountSection-Container">
      <div className="h-full w-[100%] lg:w-[20%] flex flex-col items-center pt-3 lg:pt-10">
        <CountDownTimer targetDate={dateTimeAfterThreeDays} />
        <img
          src={DiscountImage}
          alt=""
          className="w-[120px] h-[120px] object-contain mt-1 lg:mt-3"
        />
        <h1 className="text-[2rem] text-white font-extralight mt-1 lg:mt-5">
          فود پارتی
        </h1>
        <p className="text-white text-small mt-4">تخفیفات لحظه ای ویژه شما</p>
        <button className="bg-white text-black w-[180px] h-[2.2rem] flex items-center justify-center gap-2 rounded-medium mt-5">
          <p>مشاهده همه</p>
          <IoIosArrowBack className="text-[hsl(321,100%,50%)]" />
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Discount;
