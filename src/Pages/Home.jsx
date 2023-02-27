import React, { useLayoutEffect, useState, useEffect } from "react";

import { AiOutlineClose, AiFillGithub } from "react-icons/ai";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";

import Logo from "../Assets/Images/Logo.png";
import profile from "../Assets/Images/Profile.jpg";
import {
  DownLoadSection,
  OwnerSection,
  Discount,
  ResturantCategory,
  NewsExperienceSection,
  TopRateds,
  WithDiscounts,
  WithCoupon,
  Banner,
  Modal,
} from "../Components/Index";
import Layout from "../Components/Layout/Layout";
import useShopStore from "../Utils/ShopSttore";
import { Link } from "react-router-dom";

const Home = () => {
  const [modaPopUp, setModalPopUp] = useState(false);

  const { backToDefault } = useShopStore((state) => ({
    backToDefault: state.backToDefault,
  }));

  useLayoutEffect(() => {
    backToDefault();
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("popUpModalIsVisited")) {
      setTimeout(() => {
        setModalPopUp(true);
        localStorage.setItem("popUpModalIsVisited", true);
      }, 3000);
    } else return;
  }, []);

  return (
    <Layout>
      <Banner />
      <div className="mt-3 px-1 lg:px-12 py-5">
        <ResturantCategory />

        <Discount />

        <NewsExperienceSection />

        <TopRateds />

        <WithDiscounts />

        <WithCoupon />

        <DownLoadSection />

        <OwnerSection />
      </div>
      {modaPopUp ? (
        <Modal>
          <div className="bg-white w-[520px] h-[440px] rounded-medium Card-Shadow">
            <div className="w-full flex justify-between items-center px-4 py-1">
              <AiOutlineClose
                className="mb-3 cursor-pointer text-medium"
                onClick={() => setModalPopUp(false)}
              />
              <img
                src={Logo}
                className="w-[60px] h-[60px] object-contain"
                alt="logo"
              />
            </div>
            <div className="w-[100%] h-[1px] bg-slate-100" />
            <div className="w-full flex justify-center mt-7 font-semibold">
              <h1 className="text-[#ff00ae] text-[1.3rem]">
                به اسنپ فود خوش آمدید
              </h1>
            </div>
            <div className="w-full flex flex-col mt-5">
              <div className="w-full flex justify-center items-center px-5 py-1">
                <div className="w-[100px] h-[100px] object-contain">
                  <LazyLoadImage
                    effect="blur"
                    src={profile}
                    alt=""
                    width={"100%"}
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      borderRadius: "50%",
                    }}
                  />
                </div>
              </div>
              <div className="w-full flex justify-center items-center mt-3">
                <p>علیرضا برخورداری</p>
              </div>
              <div className="w-full flex justify-center mt-2">
                <h2>نام پروژه :</h2>
                <p>شبیه سازی وب سایت اسنپ فود</p>
              </div>
              <div className="w-full flex justify-center mt-2">
                <Link
                  className="text-[#ff00ae] text-[0.88rem] flex justify-center items-center gap-2"
                  target="_blank"
                  to="https://github.com/Alirezabarkhordari73/Snap-Food-Clone"
                >
                  <AiFillGithub className="text-[1.4rem]" />
                  سورس پروژه - گیت هاب
                </Link>
              </div>
              <div className="w-full flex justify-center mt-[3.8rem]">
                <p className="text-[0.6rem] text-[#a7a7a7]">
                  React - Zustand - React Router - Swiper Js - React Leaflet Map
                </p>
              </div>
            </div>
          </div>
        </Modal>
      ) : (
        ""
      )}
    </Layout>
  );
};

export default Home;
