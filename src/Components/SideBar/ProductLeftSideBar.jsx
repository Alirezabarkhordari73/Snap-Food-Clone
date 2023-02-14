import React from "react";

import { AiOutlineClockCircle } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiEBike2Fill } from "react-icons/ri";

const ProductLeftSideBar = () => {
  return (
    <div className="w-1/3 h-full flex flex-col justify-start items-center ml-4 top-[75px] right-0 sticky mb-5 mr-3 gap-3 px-1">
      <div className="w-full flex justify-between items-center gap-1 bg-white rounded-medium px-2 py-4 Card-Shadow2">
        <div className="flex gap-1 items-center">
          <AiOutlineClockCircle />
          <p className="text-small text-[#868686]">
            دریافت در سریع ترین زمان ممکن
          </p>
        </div>
        <MdKeyboardArrowDown className="text-larg text-green-600" />
      </div>
      <div className="w-full flex justify-between items-center gap-1 bg-white rounded-medium px-2 py-4 Card-Shadow2">
        <div className="flex gap-1 items-center">
          <RiEBike2Fill />
          <p className="text-small text-[#868686]">پیک فروشنده 15000 تومان</p>
        </div>
      </div>
    </div>
  );
};

export default ProductLeftSideBar;
