import React, { useState } from "react";

import { IoIosArrowBack } from "react-icons/io";
import { BsFillStarFill } from "react-icons/bs";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { FreeMode, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { CountDownTimer, Modal, DiscountDetails } from "../Index";
import DiscountImage from "../../Assets/Images/DiscountImg.png";
import { DiscountData } from "../../data";
import { useStateContext } from "../../Context/StateContext";
import { Link } from "react-router-dom";

const Discount = () => {
  const { handleModal, modalActivateState, isModalClicked } = useStateContext();
  const [selectedProductId, setselectedProductId] = useState(0);

  const THREE_DAYS_IN_MS = 8 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  const modalEventsHandler = (id) => {
    setselectedProductId(id);
    handleModal("discountModal");
  };

  //check if modal is open add hidden overflow style to body tag
  if (isModalClicked) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "scroll";
  }

  return (
    <div className="DiscountSection-Container">
      <div className="h-[50%] md:h-full w-[100%] md:w-[20%] flex flex-col items-center pt-3 lg:pt-10">
        <CountDownTimer targetDate={dateTimeAfterThreeDays} />
        <img
          src={DiscountImage}
          alt="DiscountImage"
          className="w-[120px] h-[120px] object-contain mt-1 lg:mt-3"
        />
        <h1 className="text-[2rem] text-white font-extralight lg:mt-5">
          فود پارتی
        </h1>
        <p className="text-white text-small mt-1 lg:mt-4">
          تخفیفات لحظه ای ویژه شما
        </p>
        <button className="bg-white text-black w-[180px] h-[2.2rem] flex items-center justify-center gap-2 rounded-medium mt-5">
          <Link to="/discount-page">مشاهده همه</Link>
          <IoIosArrowBack className="text-[hsl(321,100%,50%)]" />
        </button>
      </div>
      <div className="w-full h-full px-16 py-4 md:px-5 flex justify-center items-center overflow-hidden">
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
            1280: { slidesPerView: 3, spaceBetween: 25 },
          }}
        >
          {DiscountData.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                onClick={() => modalEventsHandler(item.id)}
                className="bg-white w-[45%px] h-full rounded-medium flex flex-col items-center p-2 cursor-pointer"
              >
                <div className="text-[#a7a7a7] text-small flex flex-col items-center justify-center mt-3">
                  <p>{item.resturantName}</p>
                  <p>پیک فروشنده : {item.deliveryPrice} تومان</p>
                </div>

                <div className="w-full flex justify-center items-center mt-3">
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
                <h1 className="text-medium mt-4">{item.foodName}</h1>
                <div className="w-full flex justify-between items-center mt-5 lg:mt-10 p-5">
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
                <div className="w-[90%] h-[1px] bg-[#6d6d6d] mt-2 lg:mt-10" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {modalActivateState.discountModal && (
        <Modal ModalName={"discountModal"}>
          <DiscountDetails selectedProductId={selectedProductId} />
        </Modal>
      )}
    </div>
  );
};

export default Discount;
