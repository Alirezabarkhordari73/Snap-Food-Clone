import React from "react";

import { IoIosArrowBack } from "react-icons/io";

import { SliderComponents } from "../Index";
import { newExperienceResturantData } from "../../data";

const NewsExperienceSection = () => {
  return (
    <section className="mt-[9rem]">
      <div className="w-full flex justify-between items-center">
        <p className="text-[1.6rem] font-semibold">یک تجربه جدید</p>
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
      <SliderComponents Data={newExperienceResturantData} />
    </section>
  );
};

export default NewsExperienceSection;