import React from "react";

import { IoPersonOutline } from "react-icons/io5";
import { ImMobile2, ImQrcode } from "react-icons/im";
import { TfiEmail } from "react-icons/tfi";
import { RiMessage2Fill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { SiAparat } from "react-icons/si";

import Layout from "../Components/Layout/Layout";
import Captcha from "../Components/Captcha/Captcha";

const ContactUs = () => {
  return (
    <Layout>
      <div className="bg-[#eaebf0] w-full min-h-screen px-10 py-4">
        <div className="text-[1.5rem] flex justify-center items-center gap-1 p-2 mt-10">
          <span className="text-[hsl(321,100%,50%)]">تماس با</span>
          <span>اسنپ فود</span>
        </div>
        <p className="text-[1rem] flex justify-center items-center gap-1 p-2 mt-4">
          بی صبرانه منتظر شنیدن نظرات و پیشنهادات شما هستیم .
        </p>

        <div className="w-full flex flex-col items-center lg:flex-row lg:justify-between mt-16 gap-5">
          <div className="w-full lg:w-1/2 h-full flex flex-col items-start justify-start px-20 text-[#7a7a7a] text-[0.8rem] gap-6">
            <div className="w-full flex justify-start gap-8">
              <div className="w-[20%]">
                <p>تلفن ثابت :</p>
              </div>
              <p>۹۶۶۱۲ (۰۲۱)</p>
            </div>
            <div className="w-full flex justify-start gap-8">
              <div className="w-[20%]">
                <p>نمابر :</p>
              </div>
              <p>۸۹۷۷۲۳۰۲ (۰۲۱)</p>
            </div>
            <div className="w-full flex justify-start gap-8">
              <div className="w-[20%]">
                <p>ایمیل :</p>
              </div>
              <p>info@snappfood.ir</p>
            </div>
            <div className="w-full flex justify-start gap-8">
              <div className="w-[20%]">
                <p>آدرس :</p>
              </div>
              <p className="w-[80%]">
                تهران، جردن، بالاتر از اسفندیار، خ سعیدی،نبش تقاطع خ مهرداد،پلاک
                ۱، طبقه ۵، واحد ۱۰
              </p>
            </div>
            <div className="w-full flex justify-start gap-8">
              <div className="w-[20%]">
                <p>کد پستی :</p>
              </div>
              <p>۱۹۶۷۹۶۳۱۲۴</p>
            </div>
            <div className="flex items-center justify-center gap-5 text-medium mt-5">
              <span className="Icon-Container">
                <AiOutlineTwitter />
              </span>
              <span className="Icon-Container">
                <FaLinkedinIn />
              </span>
              <span className="Icon-Container">
                <BsInstagram />
              </span>
              <span className="Icon-Container">
                <FaTelegramPlane />
              </span>
              <span className="Icon-Container">
                <SiAparat />
              </span>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-full flex flex-col gap-3">
            <button className="h-[3rem] w-[85%] flex justify-start items-center gap-2 px-3 bg-[#ffffff]">
              <IoPersonOutline className="text-small text-[#868686]" />
              <input
                type="text"
                className="w-[25vw] h-[3rem] bg-transparent outline-none text-small"
                placeholder="نام و نام خانوادگی"
              />
            </button>
            <button className="h-[3rem] w-[85%] flex justify-start items-center gap-2 px-3 bg-[#ffffff]">
              <TfiEmail className="text-small text-[#868686]" />
              <input
                type="text"
                className="w-[25vw] h-[3rem] bg-transparent outline-none text-small"
                placeholder="ایمیل"
              />
            </button>
            <button className="h-[3rem] w-[85%] flex justify-start items-center gap-2 px-3 bg-[#ffffff]">
              <ImMobile2 className="text-small text-[#868686]" />
              <input
                type="text"
                className="w-[25vw] h-[3rem] bg-transparent outline-none text-small"
                placeholder="شماره موبایل"
              />
            </button>
            <select className="w-[85%] h-[3rem] px-2 text-small">
              <option>مدیر مرکز تماس و پشتیبانی مشتریان</option>
              <option>مدیر تیم قرارداد با رستوران ها</option>
              <option>مدیر تیم ارتباط با رستوران ها</option>
              <option>مدیر تیم محصولات</option>
            </select>
            <div className="w-[85%] h-[7rem] bg-white flex justify-start items-start text-small gap-2 pr-3 py-1">
              <RiMessage2Fill className="text-small text-[#868686]" />
              <textarea
                className="w-[100%] h-[7rem] bg-transparent outline-none text-small"
                placeholder="پیام"
              />
            </div>
            <button className="h-[3rem] w-[85%] relative flex justify-start items-center gap-2 px-3 bg-[#ffffff]">
              <ImQrcode className="text-small text-[#868686]" />
              <input
                type="text"
                className="w-[25vw] h-[3rem] bg-transparent outline-none text-small"
                placeholder="کد امنیتی"
              />
              <Captcha />
            </button>
            <button className="w-[85%] h-[3rem] bg-[hsl(321,100%,50%)] rounded-medium text-xl font-bold text-white mt-2">
              ارسال نظر
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
