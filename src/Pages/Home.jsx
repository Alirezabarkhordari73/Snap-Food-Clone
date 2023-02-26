import React, { useLayoutEffect, useState, useEffect } from "react";

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
  const { backToDefault } = useShopStore((state) => ({
    backToDefault: state.backToDefault,
  }));

  useLayoutEffect(() => {
    backToDefault();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setModalPopUp(true);
    }, 3000);
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
          <div className="bg-white w-[500px] h-[500px] rounded-medium Card-Shadow"></div>
        </Modal>
      ) : (
        ""
      )}
    </Layout>
  );
};

export default Home;
