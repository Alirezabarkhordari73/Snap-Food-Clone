import React from "react";

import { IoIosArrowBack } from "react-icons/io";
import { BsFillStarFill } from "react-icons/bs";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";

import Layout from "../Components/Layout/Layout";

import { DiscountData } from "../data";

const Discount = () => {
  return (
    <Layout>
      <div className="p-10">
        <div></div>
        <div className="w-full grid grid-cols-4 gap-10">
          {DiscountData.map((item) => (
            <div
              //   onClick={() => modalEventsHandler(item.id)}
              key={item.id}
              className="bg-white w-[50%px] Card-Shadow2 h-full rounded-medium flex flex-col items-center p-2 cursor-pointer"
            >
              <div className="text-[#a7a7a7] text-small flex flex-col items-center justify-center mt-3">
                <p>{item.resturantName}</p>
                <p>پیک فروشنده : {item.deliveryPrice} تومان</p>
              </div>

              <div className="w-full flex justify-center items-center mt-2">
                <LazyLoadImage
                  effect="blur"
                  src={item.image}
                  alt={item.name}
                  width={"120"}
                  style={{
                    objectFit: "cover",
                    borderRadius: "10px",
                    height: "120px",
                  }}
                />
              </div>
              <div className="text-medium mt-3">
                <p>
                  {item.foodName.length > 25
                    ? `${item.foodName.substring(0, 25)}...`
                    : item.foodName}
                </p>
              </div>
              <div className="w-full flex justify-between items-center mt-2 lg:mt-10 p-5">
                <div>
                  <div className="flex gap-2 items-center">
                    <p>{item.rate}</p>
                    <BsFillStarFill className="text-yellow-500" />
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-medium">{item.countInStock}</span>
                    <p className="text-small text-[#969696] mt-2">
                      عدد باقی مانده
                    </p>
                  </div>
                </div>
                <div>
                  <span className="bg-[hsl(321,100%,50%)] px-[5px] py-[1px] text-small text-white rounded-small">
                    %{item.discountRange}
                  </span>
                  <p>{item.price} تومان</p>
                </div>
              </div>
              <div className="w-[90%] h-[1px] bg-[#6d6d6d] mb-4 mt-2 lg:mt-7" />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Discount;
