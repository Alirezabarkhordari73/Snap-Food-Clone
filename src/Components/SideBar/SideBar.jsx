import React from "react";
import { useLocation } from "react-router-dom";

import { sideBarData } from "../../data";
import useShopStore from "../../Utils/ShopSttore";

const SideBar = () => {
  const { applyFilter } = useShopStore((state) => ({
    applyFilter: state.applyFilter,
  }));

  const location = useLocation();

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .slice(0, 1);
  console.log(crumbs);

  const handleChangeFunc = (btnname) => {
    applyFilter(btnname, crumbs[0]);
  };

  return (
    <div className="w-1/4 h-full flex flex-col justify-start items-center ml-4 top-[180px] right-0 sticky mb-5 mr-3 gap-7">
      <div className="w-full h-[400px] rounded-medium Card-Shadow2 p-4 flex flex-col justify-between items-start">
        <div className="w-full rounded-medium py-4 px-2 bg-[#f1f1f1]">
          همه دسته بندی ها
        </div>

        {sideBarData.map((item) => (
          <div key={item.id} className="flex justify-start items-center gap-2">
            <img
              src={item.categoryImage}
              alt={item.categoryName}
              className="w-[30px] h-[30px]"
            />
            <p>{item.categoryName}</p>
          </div>
        ))}
      </div>
      <div className="w-full h-[400px] rounded-medium Card-Shadow2 p-4 flex flex-col justify-start space-y-7 items-start">
        <div className="flex justify-between items-center w-full mt-3">
          <p className="text-[#929292]">دارای تخفیف</p>
          <label className="switch">
            <input
              id="switch-input"
              type="checkbox"
              onChange={() => handleChangeFunc("discount")}
            />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="flex justify-between items-center w-full">
          <p className="text-[#929292]">دارای کوپن</p>
          <label className="switch">
            <input
              id="switch-input"
              type="checkbox"
              onChange={() => handleChangeFunc("coupon")}
            />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="flex justify-between items-center w-full">
          <p className="text-[#929292]">ارسال اکسپرس</p>
          <label className="switch">
            <input
              id="switch-input"
              type="checkbox"
              onChange={() => handleChangeFunc("express")}
            />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="flex justify-between items-center w-full">
          <p className="text-[#929292]">رستوران های به صرفه</p>
          <label className="switch">
            <input id="switch-input" type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
