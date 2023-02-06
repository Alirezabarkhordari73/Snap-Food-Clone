import React from "react";

import AndroidBtn from "../../Assets/Images/AndroidBtn.png";
import BazarBtn from "../../Assets/Images/BazarBtn.png";
import DownloadImage from "../../Assets/Images/Image1.png";

const DownLoadSection = () => {
  return (
    <div className="DownLoadSection-Container p-16">
      <div className="lg:w-1/2 w-full h-full p-5">
        <h1 className="text-[2.2rem] text-[#464646]">اپلیکیشن اسنپ فود</h1>
        <p className="text-[#858585] mt-6">
          با اپلیکیشن اسنپ‌فود به راحتی و با چند کلیک ساده می‌توانید رستوران‌ها،
          کافه‌ها، شیرینی‌فروشی‌ها و سوپرمارکت‌های نزدیک خودتان را جست‌و‌جو کرده
          و از تجربه سفارش آسان از اسنپ‌فود لذت ببرید.
        </p>
        <div className="mt-10">
          <p className="text-small">
            برای دریافت لینک دانلود اپلیکیشن شماره موبایل خود را وارد نمایید
          </p>
          <form className="w-[65%] h-[3rem] mt-5 bg-white flex justify-center items-center p-2 rounded-medium Card-Shadow">
            <input className="w-[65%] rounded-medium bg-transparent" />
            <button className="w-[35%] h-full bg-[hsl(321,100%,50%)] rounded-medium text-white">
              دریافت لینک
            </button>
          </form>
        </div>
        <div className="flex justify-start items-center gap-4 mt-8 flex-wrap">
          <img src={AndroidBtn} className="w-[130px] object-fill" alt="" />
          <img src={BazarBtn} className="w-[130px] object-fill" alt="" />
          <img src={BazarBtn} className="w-[130px] object-fill" alt="" />
          <img src={BazarBtn} className="w-[130px] object-fill" alt="" />
        </div>
      </div>
      <div className="w-1/2">
        <img
          src={DownloadImage}
          className="w-[610px] h-[610px] object-contain absolute left-0 top-[-9rem] hidden lg:inline-block"
          alt=""
        />
      </div>
    </div>
  );
};

export default DownLoadSection;
