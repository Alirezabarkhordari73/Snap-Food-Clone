import React from "react";

import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { FreeMode, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ShowProducts = ({ dataSource }) => {
  return (
    <div className="w-[97%] md:w-1/2 lg:w-[80%] min-h-full flex flex-col bg-white Card-Shadow2 mb-16">
      <div className="w-full h-[130px] flex flex-col justify-start items-center p-3">
        <p>کوپن ها</p>
        <div className="w-full flex gap-5 mt-3">
          {dataSource.map((item) =>
            item.coupons.map((item, index) => (
              <div className="bg-[#eee] w-[230px] p-1 text-small text-[#b6b6b6] rounded-medium border-[0.5px] border-[#d8d8d8] flex justify-center items-center">
                {item}
              </div>
            ))
          )}
        </div>
      </div>
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2">
        {dataSource.map((item) =>
          item.products.map((item) => (
            <div
              key={item.id}
              className="w-[100%] h-[230px] border-[0.5px] border-[#eeeeee]"
            >
              <div className="p-4">
                <div className="w-full flex justify-between items-start gap-2">
                  <div>
                    <h1 className="text-[1.1rem]">{item.title}</h1>
                    <p className="text-small text-[#a3a3a3] mt-2">
                      {item.ingredients}
                    </p>
                  </div>
                  <div className="w-[100px] h-[120px]">
                    <LazyLoadImage
                      effect="blur"
                      src={item.image}
                      alt={item.title}
                      width={"90px"}
                      style={{
                        objectFit: "cover",
                        height: "100%",
                        borderRadius: "15px",
                      }}
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <div>
                    <p>{item.price} تومان</p>
                  </div>
                  <button className="Card-Shadow2 w-[120px] h-[2.5rem] rounded-[3rem] text-[rgb(255,0,170)]">
                    افزودن
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
        {dataSource.map((item) =>
          item.drinks.map((item) => (
            <div
              key={item.id}
              className="w-[100%] h-[230px] border-[0.5px] border-[#eeeeee]"
            >
              <div className="p-4">
                <div className="w-full flex justify-between items-start gap-2">
                  <div>
                    <h1 className="text-[1.1rem]">{item.title}</h1>
                    <p className="text-small text-[#a3a3a3] mt-2">
                      {item.ingredients}
                    </p>
                  </div>
                  <div className="w-[100px] h-[120px]">
                    <LazyLoadImage
                      effect="blur"
                      src={item.image}
                      alt={item.title}
                      width={"90px"}
                      style={{
                        objectFit: "cover",
                        height: "100%",
                        borderRadius: "15px",
                      }}
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <div>
                    <p>{item.price} تومان</p>
                  </div>
                  <button className="Card-Shadow2 w-[120px] h-[2.5rem] rounded-[3rem] text-[rgb(255,0,170)]">
                    افزودن
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default trackWindowScroll(ShowProducts);
