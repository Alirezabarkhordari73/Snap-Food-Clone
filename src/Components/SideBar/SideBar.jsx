import React from "react";

import { sideBarData } from "../../data";
const SideBar = () => {
  return (
    <div className="w-1/4 h-full flex flex-col justify-start items-center ml-4 top-[180px] right-0 sticky mb-5 mr-3">
      <div className="w-full h-[400px] rounded-medium Card-Shadow2 p-4 flex flex-col justify-between items-start">
        <div className="w-full rounded-medium py-4 px-2 bg-[#f1f1f1]">
          همه دسته بندی ها
        </div>

        {sideBarData.map((item) => (
          <div className="flex justify-start items-center gap-2">
            <img
              src={item.categoryImage}
              alt={item.categoryName}
              className="w-[30px] h-[30px]"
            />
            <p>{item.categoryName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
