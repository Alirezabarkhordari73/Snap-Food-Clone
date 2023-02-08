import React from "react";

import { AiOutlineClose } from "react-icons/ai";

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
      <div className="w-[740px] min-h-[780px] bg-white rounded-medium">
        <div className="w-full h-[70px] bg-gradient-to-r from-[#ff4a9e] to-[#cc27a3] rounded-t-medium flex justify-between items-center px-3 py-2">
          <h1 className="text-white text-medium">فود پارتی</h1>
          <CountDownTimer targetDate={dateTimeAfterThreeDays} />
        </div>
        <div className="p-4">
          <AiOutlineClose
            onClick={() => handleModal("discountModal")}
            className="my-3 cursor-pointer text-medium text-[#666666]"
          />
          <div>
            <div>
              <img
                className="w-[310px] h-[310px] object-contain rounded-medium"
                src={DiscountData[selectedProductId - 1].image}
                alt={DiscountData[selectedProductId - 1].foodName}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountDetails;
