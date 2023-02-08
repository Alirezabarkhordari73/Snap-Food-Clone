import React from "react";

import { AiOutlineClose } from "react-icons/ai";

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
      <div className="w-[780px] min-h-[800px] bg-white rounded-medium">
        <div className="w-full h-[70px] bg-gradient-to-r from-[#ff4a9e] to-[#cc27a3] rounded-t-medium flex justify-between items-center px-3 py-2">
          <h1 className="text-white text-medium">فود پارتی</h1>
          <CountDownTimer targetDate={dateTimeAfterThreeDays} />
        </div>
        <div className="p-4">
          <AiOutlineClose
            onClick={() => handleModal("discountModal")}
            className="my-3 cursor-pointer text-medium text-[#666666]"
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
            <div className="w-1/2">
              <h1 className="text-medium">
                {DiscountData[selectedProductId - 1].foodName}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountDetails;
