import React from "react";

import { bannerCategoryData } from "../../data";

const Banner = () => {
  return (
    <div className="sticky top-[64px] left-0 z-20 border-b-[1px] min-w-full bg-white border-[#e7e7e7]">
      <ul className="overflow-x-auto overflow-y-hidden flex xl:justify-between items-center gap-16 h-[6.5rem] px-8">
        {bannerCategoryData.map((item) => (
          <div key={item.title} className="cursor-pointer">
            <img
              src={item.imagePath}
              alt="category"
              className="w-[40px] h-[40px] object-contain"
            />
            <p className="text-[#3f3f3f] text-small">{item.title}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Banner;
