import React from "react";

import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { BsFillStarFill } from "react-icons/bs";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";

import { DiscountData } from "../../data";
import { CountDownTimer } from "../Index";
import { useStateContext } from "../../Context/StateContext";

const DiscountDetails = ({ selectedProductId }) => {
  const { noLink, handleModal } = useStateContext();

  const THREE_DAYS_IN_MS = 8 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  return (
    <div
      onClick={(event) => noLink(event)}
      className="flex justify-center items-center"
    >
      <div className="w-[800px] h-[820px] bg-white rounded-medium overflow-hidden">
        <div className="w-full h-[70px] bg-gradient-to-r from-[#ff4a9e] to-[#cc27a3] rounded-t-medium flex justify-between items-center px-3 py-2">
          <h1 className="text-white text-medium">فود پارتی</h1>
          <CountDownTimer targetDate={dateTimeAfterThreeDays} />
        </div>
        <div className="p-4 h-full overflow-y-scroll">
          <AiOutlineClose
            onClick={() => handleModal("discountModal")}
            className="mt-3 mb-5 cursor-pointer text-medium text-[#666666]"
          />
          <div className="flex justify-between items-start gap-1">
            <div className="w-[45%] rounded-medium overflow-hidden">
              <LazyLoadImage
                effect="blur"
                src={DiscountData[selectedProductId - 1].image}
                alt={DiscountData[selectedProductId - 1].foodName}
                width={"100%"}
                style={{
                  objectFit: "cover",
                  height: "100%",
                  borderRadius: "15px",
                }}
              />
            </div>
            <div className="w-[53%]">
              <div className="flex items-center justify-between">
                <h1 className="text-medium">
                  {DiscountData[selectedProductId - 1].foodName}
                </h1>
                <div className="flex items-center bg-white Card-Shadow2 text-small gap-1 p-1 rounded-small">
                  <BsFillStarFill className="text-yellow-500 text-small" />
                  {DiscountData[selectedProductId - 1].rate}
                </div>
              </div>
              <p className="text-small text-[#aaa] mt-3">
                {DiscountData[selectedProductId - 1].foodIngredients}
              </p>
              <p className="text-small border-b-[1px] border-[#5e5e5e] py-2 mt-10">
                {DiscountData[selectedProductId - 1].countInStock} عدد باقی
                مانده
              </p>
              <div className="mt-8 flex justify-between items-center">
                <div className="flex gap-1">
                  <div className="bg-[#ffd8f9] flex justify-center items-center w-10 h-7 text-[#ff008c] text-[1.1rem] rounded-medium">
                    %{DiscountData[selectedProductId - 1].discountRange}
                  </div>
                  <p>{DiscountData[selectedProductId - 1].price} تومان</p>
                </div>
                <button className="Card-Shadow2 text-[#ff008c] w-[110px] h-[40px] rounded-[20px]">
                  افزودن
                </button>
              </div>
              <div className="flex justify-between items-center mt-12">
                <p className="text-[#9e9e9e] text-small">ارسال اکسپرس</p>
                <p className="text-medium text-[#00B862] flex justify-center items-center gap-2">
                  {DiscountData[selectedProductId - 1].resturantName}
                  <IoIosArrowBack className="text-[#00B862]" />
                </p>
              </div>
            </div>
          </div>
          <h1 className="mt-5">نظرات کاربران</h1>
          <div className="w-full h-full mt-2 flex justify-center">
            <div className="w-1/3 h-[400px"></div>
            <div className="w-2/3 h-[400px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountDetails;
