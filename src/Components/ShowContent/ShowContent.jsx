import React from "react";
import { Link } from "react-router-dom";

import { BsFillPinAngleFill, BsFillStarFill } from "react-icons/bs";
import { RiEBike2Fill } from "react-icons/ri";

import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";

const ShowContent = ({ dataSource }) => {
  console.log(dataSource);
  return (
    <div className="w-[100%]">
      <section className="grid grid-cols-1 lg:grid-cols-3 w-full gap-5 p-3">
        {dataSource.map((item) => (
          <Link
            to={`/showproduct/${item.id}`}
            key={item.id}
            className="bg-white relative w-[50%px] h-[400px] rounded-medium flex flex-col items-center justify-start cursor-pointer Card-Shadow2 hover:Card-Shadow3"
          >
            <div className="w-full h-[40%] rounded-t-medium overflow-hidden">
              <LazyLoadImage
                effect="blur"
                src={item.foodImage}
                alt={item.resturantName}
                width={"100%"}
                style={{
                  objectFit: "cover",
                  height: "100%",
                }}
              />
            </div>
            <img
              alt={item.resturantName}
              src={item.resturantImage}
              className="w-[100px] h-[100px] rounded-medium top-[21%] mx-auto absolute Card-Shadow2"
            />
            {item.freeDeliverByOrder && (
              <div className="text-small text-[#00af5d] absolute top-[6%] right-0 bg-white py-1 pr-2 pl-3 rounded-l-medium flex items-center gap-2">
                <BsFillPinAngleFill />
                ارسال رایگان سفارش با خرید حداقل 200 هزار تومن
              </div>
            )}
            <h1 className="mt-10 text-medium">{item.resturantName}</h1>
            <div className="flex gap-2 items-center mt-3">
              <BsFillStarFill className="text-yellow-500 text-small" />
              <p className="text-small">{item.rating.ratingValue}</p>
              <p className="text-[#979797] text-small">
                ({item.rating.usersVotesCount})
              </p>
            </div>
            <p className="text-[#979797] text-small mt-2">
              {item.shortDescription}
            </p>
            <div className="w-[65%] p-2 flex justify-center items-center gap-4 Card-Shadow2 rounded-medium mt-6 text-small">
              <div className="flex gap-2 items-center">
                <RiEBike2Fill />
                <p>{item.deliveryType}</p>
              </div>
              <p>{item.deliveryPrice} تومان</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default trackWindowScroll(ShowContent);
