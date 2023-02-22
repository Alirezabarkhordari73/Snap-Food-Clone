import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../Assets/Images/Logo.png";
import Etemad from "../../Assets/Images/Etemad.png";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { SiAparat } from "react-icons/si";

const Footer = () => {
  return (
    <div className="w-full min-h-[300px] bg-[#f5f5f5] flex-wrap lg:flex mt-16">
      <div className="basis-[45%] p-8">
        <div className="flex items-center gap-4">
          <Link to="/">
            <img
              src={Logo}
              className="w-[75px] h-[75px] object-contain hidden lg:inline"
              alt="logo"
            />
          </Link>
          <div>
            <h1 className="text-[hsl(321,100%,50%)] text-medium">اسنپ فود</h1>
            <p className="text-small text-[#818181]">
              تجربه سفارش غذا از زود فود تا اسنپ فود
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 text-medium mt-5">
          <Link
            to="https://twitter.com/snappfood"
            target="_blank"
            className="Icon-Container"
          >
            <AiOutlineTwitter />
          </Link>
          <Link
            to="https://www.linkedin.com/company/snappfood"
            target="_blank"
            className="Icon-Container"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            to="https://www.instagram.com/snappfood_ir/"
            target="_blank"
            className="Icon-Container"
          >
            <BsInstagram />
          </Link>
          <Link
            to="https://t.me/snappfood"
            target="_blank"
            className="Icon-Container"
          >
            <FaTelegramPlane />
          </Link>
          <Link
            to="https://www.aparat.com/snappfood"
            target="_blank"
            className="Icon-Container"
          >
            <SiAparat />
          </Link>
        </div>
      </div>
      <div className="flex basis-[30%] p-8 gap-16">
        <ul className="flex flex-col text-small text-[#818181] space-y-3">
          <Link to="/about-us" target="_blank">
            درباره اسنپ فود
          </Link>
          <Link to="">همکاری با ما</Link>
          <Link to="">وبلاگ</Link>
          <Link to="">قوانین سایت</Link>
          <Link to="">حریم خصوصی</Link>
          <Link to="">ثبت نام فروشندگان</Link>
        </ul>
        <ul className="flex flex-col text-small text-[#818181] space-y-3">
          <Link to="/contact-us" target="_blank">
            تماس با اسنپ فود
          </Link>
          <Link to="">پرسش های متداول</Link>
          <Link to="">ثبت شکایات</Link>
          <Link to="">اپلیکیشن موبایل</Link>
        </ul>
      </div>
      <div className="basis-[20%] p-8">
        <div className="flex justify-center">
          <img src={Etemad} alt="etemad" />
          <img src={Etemad} alt="etemad" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
