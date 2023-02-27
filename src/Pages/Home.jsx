import React, { useLayoutEffect, useState, useEffect } from "react";
import { useStateContext } from "../Context/StateContext";

import { AiOutlineClose } from "react-icons/ai";

import Logo from "../Assets/Images/Logo.png";
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

const Home = () => {
  const [modaPopUp, setModalPopUp] = useState(false);

  const { handleModal, modalActivateState, noLink } = useStateContext();

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
          <div className="bg-white w-[400px] h-[400px] rounded-medium Card-Shadow">
            <div className="w-full flex justify-between items-center px-4 py-2">
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
          </div>
        </Modal>
      ) : (
        ""
      )}
    </Layout>
  );
};

export default Home;
