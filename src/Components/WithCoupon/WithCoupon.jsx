import React from "react";

import { IoIosArrowBack } from "react-icons/io";

import { SliderComponents } from "../Index";
import { withCouponData } from "../../data";

const WithCoupon = () => {
  return (
    <section className="mt-[2rem]">
      <div className="w-full flex justify-between items-center">
        <p className="text-[1.6rem] font-semibold">دارای کوپن</p>
        <a
          href="/"
          className="text-larg text-[#00B862] flex justify-center items-center gap-2"
        >
          <p>مشاهده همه</p>
          <span>
            <IoIosArrowBack className="text-[#00B862]" />
          </span>
        </a>
      </div>
      <SliderComponents Data={withCouponData} />
    </section>
  );
};

export default WithCoupon;
