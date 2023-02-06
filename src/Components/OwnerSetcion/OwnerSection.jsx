import React from "react";

import OwnerImage from "../../Assets/Images/OwnersSignUpImage.png";
const OwnerSection = () => {
  return (
    <div className="OwnerSection-Container">
      <div className="p-10">
        <h1 className="text-[2.8rem] text-[#414141]">صاحب کسب و کار هستید ؟</h1>
        <p className="text-larg text-[#838282] mt-4">
          با اسنپ فود کسب و کارتان را آنلاین کنید و فروشتان را افزایش دهید{" "}
        </p>
        <button className="w-[190px] h-[55px] text-white rounded-medium bg-[hsl(321,100%,50%)] text-medium mt-5">
          ثبت نام فروشندگان
        </button>
      </div>
      <div className="w-1/2 hidden lg:inline-block">
        <img
          src={OwnerImage}
          className="w-[400px] h-[400px] object-contain absolute left-10 top-[-7rem] hidden lg:inline-block"
        />
      </div>
    </div>
  );
};

export default OwnerSection;
