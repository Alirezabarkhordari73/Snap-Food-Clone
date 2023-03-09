import React, { useState } from "react";

import { BsFillStarFill, BsClock } from "react-icons/bs";
import { AiOutlineClose, AiFillStar } from "react-icons/ai";
import { RiBankCard2Line } from "react-icons/ri";
import { CgShoppingCart } from "react-icons/cg";

import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

import { useStateContext } from "../../Context/StateContext";
import { Modal, Map } from "../Index";

const ProductSideBar = ({ dataSource }) => {
  const [WeekDaysClicked, setWeekDaysClicked] = useState(false);
  const { handleModal, modalActivateState, noLink } = useStateContext();
  const DayNames = [
    "شنبه",
    "یکشنبه",
    "دو شنبه",
    "سه شنبه",
    "چهار شنبه",
    "پنج شنبه",
    "جمعه",
  ];

  return (
    <div className="w-full h-[200px] md:w-1/2 lg:w-1/3 lg:h-full flex flex-col justify-start items-center ml-4 top-[75px] right-0 md:sticky mb-5 mr-1 gap-7">
      {dataSource.map((item) => (
        <section
          key={item.id}
          className="w-full h-[400px] rounded-medium p-1 flex flex-col justify-start items-start"
        >
          <header className="flex w-full gap-3">
            <img
              src={item.resturantImage}
              alt={item.resturantName}
              className="w-[90px] h-[90px] rounded-medium"
            />
            <div className="flex flex-col justify-between items-start">
              <div className="flex items-center gap-1">
                <BsFillStarFill className="text-yellow-500 text-small" />
                {item.rating?.ratingValue}
              </div>
              <p>{item.resturantName}</p>
            </div>
            <div>
              <span className="bg-[#ff00a6] px-[5px] py-[1px] text-small text-white rounded-small">
                %{item.discount}
              </span>
            </div>
          </header>

          <button
            onClick={() => handleModal("usersIdeas")}
            className="w-full h-[2.5rem] Card-Shadow2 bg-white text-green-600 rounded-[3rem] mt-7"
          >
            اظلاعات و نظرات
          </button>
          {modalActivateState.usersIdeas && (
            <Modal ModalName={"usersIdeas"}>
              <div
                onClick={(event) => noLink(event)}
                className="flex justify-center items-center"
              >
                <div className="w-[800px] h-[790px] bg-white rounded-medium p-3 flex flex-col justify-start items-start Card-Shadow">
                  <div>
                    <AiOutlineClose
                      className="mb-3 cursor-pointer text-medium"
                      onClick={() => handleModal("usersIdeas")}
                    />
                  </div>
                  <div className="w-full flex justify-between items-center mt-1">
                    <div className="w-2/3 flex justify-start items-start gap-4">
                      <img
                        src={item.resturantImage}
                        className="w-[130px] h-[130px] rounded-medium object-contain"
                        alt=""
                      />
                      <div className="w-full flex flex-col">
                        <h1 className="text-[1.2rem]">{item.resturantName}</h1>
                        <div className="flex justify-start items-start mt-2">
                          {item.category.map((product) => (
                            <p
                              key={product}
                              className="text-[0.9rem] text-[#8e8e8e]"
                            >
                              {product},
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="w-1/3 h-full">
                      <Map latlng={item.location} />
                    </div>
                  </div>
                  <div className="w-full flex justify-between items-center px-5 py-1 mt-3">
                    <div className="flex flex-col justify-start items-center gap-1 p-2 text-[#6d6d6d]">
                      <BsClock className="text-[1.1rem]" />
                      <p className="text-[0.8rem]">ساعت کاری</p>
                      <div className="flex justify-center items-center gap-2 text-[0.9rem]">
                        <span className="text-[#18b73a]">باز</span>
                        امروز از ساعت
                        <span>{item.workTime.startAt}</span>تا
                        <span>{item.workTime.endAt}</span>
                        {WeekDaysClicked ? (
                          <MdOutlineKeyboardArrowUp
                            className="text-[1.3rem] text-[#ff00a6]"
                            onClick={() => setWeekDaysClicked(!WeekDaysClicked)}
                          />
                        ) : (
                          <MdOutlineKeyboardArrowDown
                            className="text-[1.3rem] text-[#ff00a6]"
                            onClick={() => setWeekDaysClicked(!WeekDaysClicked)}
                          />
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-center gap-1 p-2 text-[#6d6d6d]">
                      <RiBankCard2Line className="text-[1.1rem]" />
                      <p className="text-[0.8rem]">شیوه پرداخت</p>
                      <div className="flex justify-center items-center gap-2 text-[0.9rem]">
                        <span>آنلاین</span>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start items-center gap-1 p-2 text-[#6d6d6d]">
                      <CgShoppingCart className="text-[1.1rem]" />
                      <p className="text-[0.8rem]">حداقل سبد خرید</p>
                      <div className="flex justify-center items-center gap-2 text-[0.9rem]">
                        <span>90,000 هزار تومن</span>
                      </div>
                    </div>
                  </div>
                  <div className={`${WeekDaysClicked ? "ShowBox" : "Box"}`}>
                    {WeekDaysClicked &&
                      DayNames.map((day) => (
                        <div className="h-full gap-1 flex flex-col items-center justify-center w-[12%] text-[0.8rem] text-[#8c8c8c]">
                          <p>{day}</p>
                          <div className="flex justify-center items-center gap-1">
                            <span>{item.workTime.startAt}</span>تا
                            <span>{item.workTime.endAt}</span>
                          </div>
                        </div>
                      ))}
                  </div>
                  <div className="w-full flex justify-between items-start mt-4">
                    <div className="w-[35%] flex flex-col justify-center items-start">
                      <div className="flex items-center justify-center gap-1">
                        <AiFillStar className="text-[#ffca4e] text-[2rem]" />
                        <h1 className="text-[2rem]">4.2</h1>
                      </div>
                    </div>

                    <div className="w-[65%] flex flex-col px-2">
                      <div className="w-full flex justify-center items-center mb-1 gap-1">
                        <div className="w-[20%] flex justify-end items-center">
                          <AiFillStar className="text-[#dfdfdf]" />
                          <AiFillStar className="text-[#dfdfdf]" />
                          <AiFillStar className="text-[#dfdfdf]" />
                          <AiFillStar className="text-[#dfdfdf]" />
                          <AiFillStar className="text-[#dfdfdf]" />
                        </div>
                        <div className="h-1 w-[80%] bg-neutral-200 dark:bg-neutral-600">
                          <div className="h-1 bg-[#12a81e] w-[30%]"></div>
                        </div>
                      </div>
                      <div className="w-full flex justify-center items-center mb-1 gap-1">
                        <div className="w-[20%] flex justify-end items-center">
                          <AiFillStar className="text-[#dfdfdf]" />
                          <AiFillStar className="text-[#dfdfdf]" />
                          <AiFillStar className="text-[#dfdfdf]" />
                          <AiFillStar className="text-[#dfdfdf]" />
                        </div>
                        <div class="h-1 w-[80%] bg-neutral-200 dark:bg-neutral-600">
                          <div class="h-1 bg-[#12a81e] w-[30%]"></div>
                        </div>
                      </div>
                      <div className="w-full flex justify-center items-center mb-1 gap-1">
                        <div className="w-[20%] flex justify-end items-center">
                          <AiFillStar className="text-[#dfdfdf]" />
                          <AiFillStar className="text-[#dfdfdf]" />
                          <AiFillStar className="text-[#dfdfdf]" />
                        </div>
                        <div class="h-1 w-[80%] bg-neutral-200 dark:bg-neutral-600">
                          <div class="h-1 bg-[#12a81e] w-[30%]"></div>
                        </div>
                      </div>
                      <div className="w-full flex justify-center items-center mb-1 gap-1">
                        <div className="w-[20%] flex justify-end items-center">
                          <AiFillStar className="text-[#dfdfdf]" />
                          <AiFillStar className="text-[#dfdfdf]" />
                        </div>
                        <div class="h-1 w-[80%] bg-neutral-200 dark:bg-neutral-600">
                          <div class="h-1 bg-[#12a81e] w-[30%]"></div>
                        </div>
                      </div>
                      <div className="w-full flex justify-center items-center mb-1 gap-1">
                        <div className="w-[20%] flex justify-end items-center">
                          <AiFillStar className="text-[#dfdfdf]" />
                        </div>
                        <div class="h-1 w-[80%] bg-neutral-200 dark:bg-neutral-600">
                          <div class="h-1 bg-[#12a81e] w-[30%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
          )}
        </section>
      ))}
    </div>
  );
};

export default ProductSideBar;
