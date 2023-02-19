import React, { useState } from "react";

import {
  BsChevronDown,
  BsChevronUp,
  BsFillQuestionCircleFill,
  BsShopWindow,
  BsFillPersonFill,
  BsHeadset,
  BsArrowUpRight,
  BsFillPersonPlusFill,
} from "react-icons/bs";
import { RxCounterClockwiseClock } from "react-icons/rx";

import { Footer } from "../Components/Index";

import Logo from "../Assets/Images/Logo.png";
import { cities, commonQuestions } from "../data";
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
import { ReactComponent as SignUpLevel1 } from "../Assets/Images/Signup1.svg";
import { ReactComponent as SignUpLevel2 } from "../Assets/Images/Signup2.svg";
import { ReactComponent as SignUpLevel3 } from "../Assets/Images/Signup3.svg";
import { ReactComponent as SignUpLevel4 } from "../Assets/Images/Signup4.svg";
import { Link } from "react-router-dom";

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
    <div>
      <div className="SignUpPage">
        <div className="w-full flex justify-center">
          <div className="w-[78%] flex justify-between items-center px-1">
            <ul className="hidden lg:flex justify-center items-center gap-5 text-[#fff] text-[1.2rem]">
              <li>وبلاگ فروشندگان</li>
              <li>مراحل ثبت نام</li>
              <li>سوالات متداول</li>
            </ul>
            <div className="flex justify-between w-full lg:w-[400px] lg:justify-center items-center gap-5">
              <button className="w-[250px] h-[3rem] text-[#fff] bg-[#ff00a4] rounded-small font-semibold">
                نرم افزار دخل مشتریان
              </button>
              <Link to="/">
                <img
                  src={Logo}
                  alt="Logo"
                  className="w-[90px] h-[90px] object-contain"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-full flex flex-col justify-center items-start lg:flex-row">
          <div className="w-full lg:w-1/2 h-full flex-col flex justify-start items-center mt-16">
            <h1 className="text-[2.5rem] text-[#fff]">
              ثبت نام فروشندگان اسنپ فود
            </h1>
            <div className="bg-[#ffffffc4] w-[75%] lg:w-[450px] h-[450px] rounded-medium mt-16 flex flex-col px-3 py-4">
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
                  در صورتی‌که فروشگاه شما هنوز افتتاح نشده‌است، از ثبت‌نام
                  خودداری نموده و پس از افتتاح اقدام به ثبت‌نام نمایید.
                </h3>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 h-full flex justify-center items-start mt-7">
            <div className="w-[97%] lg:w-[65%] bg-white h-[80%] rounded-medium flex flex-col justify-start items-center p-3 gap-5 my-4">
              <h1 className="text-larg my-5">فرم ثبت نام فروشندگان</h1>
              <div className="w-[90%] lg:w-[25vw] relative border-[1px] border-[#eaeaea] rounded-medium">
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
              <div className="w-[90%] lg:w-[25vw] relative border-[1px] border-[#eaeaea] rounded-medium">
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
                className="relative w-[90%] lg:w-[25vw] border-[1px] border-[#eaeaea] rounded-medium"
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
                className="relative w-[90%] lg:w-[25vw] border-[1px] border-[#eaeaea] rounded-medium"
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
                className="relative w-[90%] lg:w-[25vw] border-[1px] border-[#eaeaea] rounded-medium"
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
                className="relative w-[90%] lg:w-[25vw] border-[1px] border-[#eaeaea] rounded-medium"
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
              <button className="w-[90%] lg:w-[25vw] h-[4rem] bg-[#ff00a4] text-[#fff] rounded-medium font-bold">
                دریافت کد تایید
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-20 flex justify-center items-center gap-5 overflow-x-auto mt-28">
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

      <div className="w-full mt-28 flex flex-col justify-start items-center">
        <h1 className="text-[2.9rem]">مراحل ثبت نام</h1>
        <div className="w-full mt-10">
          <div className="w-full flex flex-col items-center justify-start lg:flex-row lg:justify-center lg:items-center gap-6">
            <section className="flex flex-col justify-start items-center w-[170px] mx-10 gap-3">
              <div className="rounded-full bg-green-100 w-[100px] h-[100px] flex justify-center items-center">
                <SignUpLevel1 className="rounded-full" />
              </div>
              <h1 className="text-[1.3rem]">ثبت اطلاعات مالی و فروشگاه</h1>
              <p className="text-[#919191]">
                اطلاعات هویتی-اطلاعات تجاری-اطلاعات تماس
              </p>
            </section>

            <section className="flex flex-col justify-start items-center w-[170px] mx-10 gap-3">
              <div className="rounded-full bg-green-100 w-[100px] h-[100px] flex justify-center items-center">
                <SignUpLevel2 className="rounded-full" />
              </div>
              <h1 className="text-[1.3rem]">بارگذاری مدارک</h1>
              <p className="text-[#919191]">
                تصویر کارت ملی، تصویر اصل جواز کسب یا اجاره نامه رسمی یا سند
                فروشگاه
              </p>
            </section>

            <section className="flex flex-col justify-start items-center w-[170px] mx-10 gap-3">
              <div className="rounded-full bg-green-100 w-[100px] h-[100px] flex justify-center items-center">
                <SignUpLevel3 className="rounded-full" />
              </div>
              <h1 className="text-[1.3rem]">عقد قرارداد</h1>
              <p className="text-[#919191]">
                مطالعه شرایط قرارداد و امضای دیجیتال
              </p>
            </section>

            <section className="flex flex-col justify-start items-center w-[170px] mx-10 gap-3">
              <div className="rounded-full bg-green-100 w-[100px] h-[100px] flex justify-center items-center">
                <SignUpLevel4 className="rounded-full" />
              </div>
              <h1 className="text-[1.3rem]">پایان ثبت‌ نام</h1>
              <p className="text-[#919191]">
                به جمع فروشندگان اسنپ‌فود خوش آمدید
              </p>
            </section>
          </div>
        </div>
      </div>

      <section className="w-full my-28 flex justify-center items-center">
        <div className="w-[96%] lg:w-[75%] lg:h-[280px] bg-white Card-Shadow rounded-medium flex flex-col lg:flex-row justify-around items-center px-5 py-5 gap-8 lg:gap2">
          <div className="flex flex-col justify-center items-center gap-3">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex justify-center items-center">
              <RxCounterClockwiseClock className="text-[1.5rem] text-[#ff00b3]" />
            </div>
            <h1 className="text-[1.9rem] text-[#ff00b3]">12 سال</h1>
            <p>فعالیت از سال 88</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex justify-center items-center">
              <BsShopWindow className="text-[1.5rem] text-[#ff00b3]" />
            </div>
            <h1 className="text-[1.9rem] text-[#ff00b3]">+20,000</h1>
            <p>فروشگاه همکار</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex justify-center items-center">
              <BsFillPersonFill className="text-[1.5rem] text-[#ff00b3]" />
            </div>
            <h1 className="text-[1.9rem] text-[#ff00b3]">میلیون ها مشتری</h1>
            <p>در اسنپ فود</p>
          </div>
        </div>
      </section>

      <section className="mt-20 flex flex-col justify-start items-center mb-10">
        <h1 className="text-[2.1rem] font-semibold">مزایای فروش در اسنپ فود</h1>
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-10 lg:px-5">
          <div className="flex flex-col justify-center items-center gap-3">
            <BsHeadset className="text-[2rem] text-[#ff00b3]" />
            <h1 className="text-[1.2rem]">
              پشتیبانی کامل مشتریان و فروشگاه‌ها
            </h1>
            <p className="text-[#757575]">
              با پشتیبانی ویژه در خدمت شما و مشتریان هستیم
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            <BsArrowUpRight className="text-[2rem] text-[#ff00b3]" />
            <h1 className="text-[1.2rem]">تا ۳ برابر امکان افزایش فروش</h1>
            <p className="text-[#757575]">
              ارائه خدمات باکیفیت با شما، افزایش فروش با ما
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            <BsShopWindow className="text-[2rem] text-[#ff00b3]" />
            <h1 className="text-[1.2rem]">امکان تحویل با سرویس اکسپرس</h1>
            <p className="text-[#757575]">
              درصورت تمایل می‌توانید برای ارسال از سرویس اکسپرس استفاده نمایید
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            <BsFillPersonPlusFill className="text-[2rem] text-[#ff00b3]" />
            <h1 className="text-[1.2rem]">
              بزرگترین سامانه آنلاین فروش مایحتاج روزانه
            </h1>
            <p className="text-[#757575]">
              اسنپ‌فود اولین و بزرگترین سیستم فروش آنلاین در ایران
            </p>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col justify-start items-center mt-28">
        <h1 className="text-[2rem]">سوالات متداول</h1>
        <div className="w-[80%] flex flex-col justify-start items-start h-[500px] rounded-small mt-10">
          {commonQuestions.map((item) => (
            <div className="bg-[#e7e7e7] px-2 py-5 w-full border-[0.5px] border-[#dfdfdf]">
              {item.question}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SignUpOwners;
