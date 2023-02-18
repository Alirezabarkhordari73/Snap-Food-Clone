import React, { useState } from "react";

import {
  BsChevronDown,
  BsChevronUp,
  BsFillQuestionCircleFill,
} from "react-icons/bs";

import Logo from "../Assets/Images/Logo.png";
import { cities } from "../data";
import img1 from "../Assets/Images/1.jpg";
import img2 from "../Assets/Images/2.jpg";
import img3 from "../Assets/Images/3.jpg";
import img4 from "../Assets/Images/4.jpg";
import img5 from "../Assets/Images/5.jpg";
import img6 from "../Assets/Images/6.jpg";
import img7 from "../Assets/Images/7.jpg";
import img8 from "../Assets/Images/8.jpg";
import img9 from "../Assets/Images/9.jpg";
import img10 from "../Assets/Images/10.jpg";

const SignUpOwners = () => {
  let [dropMenuOneIsOpen, setDropMenuOneIsOpen] = useState(false);
  let [dropMenuTwoIsOpen, setDropMenuTwoIsOpen] = useState(false);
  const [clickOnUnput1, setClickOnInput1] = useState(false);
  const [clickOnUnput2, setClickOnInput2] = useState(false);
  const [clickOnUnput3, setClickOnInput3] = useState(false);
  const [clickOnUnput4, setClickOnInput4] = useState(false);

  const showDrop1Handler = () => {
    setDropMenuOneIsOpen(!dropMenuOneIsOpen);
    setDropMenuTwoIsOpen((dropMenuTwoIsOpen = false));
  };
  const showDrop2Handler = () => {
    setDropMenuOneIsOpen((dropMenuOneIsOpen = false));
    setDropMenuTwoIsOpen(!dropMenuTwoIsOpen);
  };
  return (
    <div className="SignUpPage">
      <div className="w-full flex justify-center">
        <div className="w-[78%] flex justify-between items-center px-1">
          <ul className="flex justify-center items-center gap-5 text-[#fff] text-[1.2rem]">
            <li>وبلاگ فروشندگان</li>
            <li>مراحل ثبت نام</li>
            <li>سوالات متداول</li>
          </ul>
          <div className="flex justify-center items-center gap-5">
            <button className="w-[250px] h-[3rem] text-[#fff] bg-[#ff00a4] rounded-small font-semibold">
              نرم افزار دخل مشتریان
            </button>
            <img
              src={Logo}
              alt="Logo"
              className="w-[90px] h-[90px] object-contain"
            />
          </div>
        </div>
      </div>
      <div className="w-[100%] h-full flex justify-center items-start">
        <div className="w-1/2 h-full flex-col flex justify-start items-center mt-16">
          <h1 className="text-[2.5rem] text-[#fff]">
            ثبت نام فروشندگان اسنپ فود
          </h1>
          <div className="bg-[#ffffffc4] w-[450px] h-[450px] rounded-medium mt-16 flex flex-col px-3 py-4">
            <h1 className="text-[#000] text-[1.5rem]">
              هنگام ثبت نام به نکات زیر دقت کنید
            </h1>
            <div className="w-full flex justify-start items-start gap-4 mt-5">
              <BsFillQuestionCircleFill className="text-yellow-400 text-[1.7rem]" />
              <h3 className="text-small w-[80%]">
                اگر فروشگاه شما در یکی از دسته‌های آرایشی و بهداشتی،‌ فرهنگ و
                هنر، خانه و آشپزخانه، مد و پوشاک و دیجیتال قرار می‌گیرد برای
                ثبت‌نام به اسنپ‌شاپ مراجعه نمایید.
              </h3>
            </div>
            <div className="w-full flex justify-start items-start gap-4 mt-5">
              <div className="w-full">
                <p className="text-[#d13fc9] pr-10">ثبت نام در اسنپ شاپ</p>
              </div>
            </div>
            <div className="w-full flex justify-start items-start gap-4 mt-5">
              <BsFillQuestionCircleFill className="text-yellow-400 text-[1.7rem]" />
              <h3 className="text-small w-[80%]">
                تصویر اصل جواز فعالیت/ اجاره‌نامه رسمی یا سند فروشگاه برای
                ثبت‌نام الزامی است.
              </h3>
            </div>
            <div className="w-full flex justify-start items-start gap-4 mt-5">
              <BsFillQuestionCircleFill className="text-yellow-400 text-[1.7rem]" />
              <h3 className="text-small w-[80%]">
                درحال حاضر امکان ثبت‌نام عمده‌فروشی‌ها وجود ندارد.
              </h3>
            </div>
            <div className="w-full flex justify-start items-start gap-4 mt-5">
              <BsFillQuestionCircleFill className="text-yellow-400 text-[1.7rem]" />
              <h3 className="text-small w-[80%]">
                در صورتی‌که فروشگاه شما هنوز افتتاح نشده‌است، از ثبت‌نام خودداری
                نموده و پس از افتتاح اقدام به ثبت‌نام نمایید.
              </h3>
            </div>
          </div>
        </div>

        <div className="w-1/2 h-full flex justify-center items-start mt-7">
          <div className="w-[65%] bg-white h-[80%] rounded-medium flex flex-col justify-start items-center p-3 gap-5">
            <h1 className="text-larg my-5">فرم ثبت نام فروشندگان</h1>
            <div className="w-[25vw] relative border-[1px] border-[#eaeaea] rounded-medium">
              <button
                onClick={() => showDrop1Handler()}
                className="w-full flex justify-between items-center px-2 h-[4rem] text-[#414141]"
              >
                انتخاب نوع کسب و کار
                {dropMenuOneIsOpen ? (
                  <BsChevronUp className="text-small mr-3 cursor-pointer" />
                ) : (
                  <BsChevronDown className="text-small mr-3 cursor-pointer" />
                )}
              </button>
              {dropMenuOneIsOpen && (
                <div className="w-full h-[400px] overflow-y-scroll bg-white z-[10000] px-4 py-2 absolute top-[3.8rem] flex flex-col rounded-medium gap-6 Card-Shadow2">
                  <div className="p-1 flex justify-between items-center h-[2.6rem]">
                    رستوران
                    <BsChevronDown className="text-small mr-3 cursor-pointer" />
                  </div>
                  <div className="p-1 flex justify-between items-center h-[2.6rem]">
                    کافه
                    <BsChevronDown className="text-small mr-3 cursor-pointer" />
                  </div>
                  <div className="p-1 flex justify-between items-center h-[2.6rem]">
                    شیرینی
                    <BsChevronDown className="text-small mr-3 cursor-pointer" />
                  </div>
                  <div className="p-1 flex justify-between items-center h-[2.6rem]">
                    آجیل
                    <BsChevronDown className="text-small mr-3 cursor-pointer" />
                  </div>
                  <div className="p-1 flex justify-between items-center h-[2.6rem]">
                    نانوایی
                    <BsChevronDown className="text-small mr-3 cursor-pointer" />
                  </div>
                  <div className="p-1 flex justify-between items-center h-[2.6rem]">
                    آبمیوه بستنی
                    <BsChevronDown className="text-small mr-3 cursor-pointer" />
                  </div>
                  <div className="p-1 flex justify-between items-center h-[2.6rem]">
                    میوه
                    <BsChevronDown className="text-small mr-3 cursor-pointer" />
                  </div>
                  <div className="p-1 flex justify-between items-center h-[2.6rem]">
                    عطاری
                    <BsChevronDown className="text-small mr-3 cursor-pointer" />
                  </div>
                  <div className="p-1 flex justify-between items-center h-[2.6rem]">
                    پروتئین
                    <BsChevronDown className="text-small mr-3 cursor-pointer" />
                  </div>
                  <div className="p-1 flex justify-between items-center h-[2.6rem]">
                    داروخانه
                    <BsChevronDown className="text-small mr-3 cursor-pointer" />
                  </div>
                </div>
              )}
            </div>
            <div className="w-[25vw] relative border-[1px] border-[#eaeaea] rounded-medium">
              <button
                onClick={() => showDrop2Handler()}
                className="w-full flex justify-between items-center px-2 h-[4rem] text-[#414141]"
              >
                انتخاب شهر
                {dropMenuTwoIsOpen ? (
                  <BsChevronUp className="text-small mr-3 cursor-pointer" />
                ) : (
                  <BsChevronDown className="text-small mr-3 cursor-pointer" />
                )}
              </button>
              {dropMenuTwoIsOpen && (
                <div className="w-full bg-white  h-[400px] overflow-y-scroll z-[10000] px-4 py-2 absolute top-[3.8rem] flex flex-col rounded-medium gap-6 Card-Shadow2">
                  {cities.map((item) => (
                    <div
                      key={item.id}
                      className="p-1 flex justify-between items-center h-[2.6rem]"
                    >
                      {item.name}
                      <BsChevronDown className="text-small mr-3 cursor-pointer" />
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div
              onFocus={() => setClickOnInput1(!clickOnUnput1)}
              onBlur={() => setClickOnInput1(!clickOnUnput1)}
              className="relative w-[25vw] border-[1px] border-[#eaeaea] rounded-medium"
            >
              <input className="w-full flex justify-between items-center px-2 h-[4rem] outline-none" />
              <p
                className={`${
                  clickOnUnput1 ? "top-[10%] text-small" : "top-[35%]"
                } right-2 absolute text-[#9d9d9d] transition-all duration-300`}
              >
                نام فروشگاه
              </p>
            </div>
            <div
              onFocus={() => setClickOnInput2(!clickOnUnput2)}
              onBlur={() => setClickOnInput2(!clickOnUnput2)}
              className="relative w-[25vw] border-[1px] border-[#eaeaea] rounded-medium"
            >
              <input className="w-full flex justify-between items-center px-2 h-[4rem] outline-none" />
              <p
                className={`${
                  clickOnUnput2 ? "top-[10%] text-small" : "top-[35%]"
                } right-2 absolute text-[#9d9d9d] transition-all duration-300`}
              >
                نام مالک فروشگاه
              </p>
            </div>
            <div
              onFocus={() => setClickOnInput3(!clickOnUnput3)}
              onBlur={() => setClickOnInput3(!clickOnUnput3)}
              className="relative w-[25vw] border-[1px] border-[#eaeaea] rounded-medium"
            >
              <input className="w-full flex justify-between items-center px-2 h-[4rem] outline-none" />
              <p
                className={`${
                  clickOnUnput3 ? "top-[10%] text-small" : "top-[35%]"
                } right-2 absolute text-[#9d9d9d] transition-all duration-300`}
              >
                نام خانوادگی مالک فروشگاه
              </p>
            </div>
            <div
              onFocus={() => setClickOnInput4(!clickOnUnput4)}
              onBlur={() => setClickOnInput4(!clickOnUnput4)}
              className="relative w-[25vw] border-[1px] border-[#eaeaea] rounded-medium"
            >
              <input className="w-full flex justify-between items-center px-2 h-[4rem] outline-none" />
              <p
                className={`${
                  clickOnUnput4 ? "top-[10%] text-small" : "top-[35%]"
                } right-2 absolute text-[#9d9d9d] transition-all duration-300`}
              >
                شماره تلفن همراه
              </p>
            </div>
            <button className="w-[25vw] h-[4rem] bg-[#ff00a4] text-[#fff] rounded-medium font-bold">
              دریافت کد تایید
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-20 flex justify-center items-center gap-5">
        <img
          src={img1}
          alt=""
          className="rounded-full Card-Shadow2 border-[0.5px] border-[#f1dfed]"
        />
        <img
          src={img2}
          alt=""
          className="rounded-full Card-Shadow2 border-[0.5px] border-[#f1dfed]"
        />
        <img
          src={img3}
          alt=""
          className="rounded-full Card-Shadow2 border-[0.5px] border-[#f1dfed]"
        />
        <img
          src={img4}
          alt=""
          className="rounded-full Card-Shadow2 border-[0.5px] border-[#f1dfed]"
        />
        <img
          src={img5}
          alt=""
          className="rounded-full Card-Shadow2 border-[0.5px] border-[#f1dfed]"
        />
        <img
          src={img6}
          alt=""
          className="rounded-full Card-Shadow2 border-[0.5px] border-[#f1dfed]"
        />
        <img
          src={img7}
          alt=""
          className="rounded-full Card-Shadow2 border-[0.5px] border-[#f1dfed]"
        />
        <img
          src={img8}
          alt=""
          className="rounded-full Card-Shadow2 border-[0.5px] border-[#f1dfed]"
        />
        <img
          src={img9}
          alt=""
          className="rounded-full Card-Shadow2 border-[0.5px] border-[#f1dfed]"
        />
        <img
          src={img10}
          alt=""
          className="rounded-full Card-Shadow2 border-[0.5px] border-[#f1dfed]"
        />
      </div>
      <div className="w-full mt-20">
        <h1>مراحل ثبت نام</h1>
      </div>
    </div>
  );
};

export default SignUpOwners;
