import React from "react";

import { BsFillPinAngleFill, BsFillStarFill } from "react-icons/bs";
import { RiEBike2Fill } from "react-icons/ri";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { FreeMode, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SliderComponents = ({ Data }) => {
  return (
    <div className="mt-1 overflow-hidden">
      <Swiper
        pagination={{ clickable: true }}
        navigation
        className="my-swiper"
        freeMode={true}
        slidesPerView={3}
        spaceBetween={20}
        modules={[FreeMode, Navigation]}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          480: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 15 },
          1280: { slidesPerView: 3, spaceBetween: 20 },
        }}
      >
        {Data.map((item) => (
          <SwiperSlide key={item.resturantName} className="py-6">
            <div className="bg-white relative w-[50%px] h-[400px] rounded-medium flex flex-col items-center justify-start cursor-pointer Card-Shadow2 hover:Card-Shadow3">
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
                <div className="text-small text-[#00B862] absolute top-[6%] right-0 bg-white py-1 pr-2 pl-3 rounded-l-medium flex items-center gap-2">
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
              <div className="w-[60%] p-2 flex justify-center items-center gap-4 Card-Shadow2 rounded-medium mt-6 text-small">
                <div className="flex gap-2 items-center">
                  <RiEBike2Fill />
                  <p>{item.deliveryType}</p>
                </div>
                <p>{item.deliveryPrice} تومان</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderComponents;
