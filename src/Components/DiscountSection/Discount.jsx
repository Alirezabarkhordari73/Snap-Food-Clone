import React from "react";
import { IoIosArrowBack } from "react-icons/io";

import { CountDownTimer } from "../Index";
import DiscountImage from "../../Assets/Images/DiscountImg.png";

const Discount = () => {
  return (
    <div className="DiscountSection-Container">
      <div className="h-full w-[20%] flex flex-col items-center pt-3 lg:pt-10">
        <CountDownTimer />
        <img
          src={DiscountImage}
          alt=""
          className="w-[130px] h-[130px] object-contain mt-3"
        />
        <h1 className="text-[2rem] text-white font-extralight mt-5">
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
