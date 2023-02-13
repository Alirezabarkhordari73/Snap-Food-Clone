import React, { useLayoutEffect } from "react";

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
} from "../Components/Index";
import Layout from "../Components/Layout/Layout";
import useShopStore from "../Utils/ShopSttore";

const Home = () => {
  const { backToDefault } = useShopStore((state) => ({
    backToDefault: state.backToDefault,
  }));

  useLayoutEffect(() => {
    backToDefault();
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
    </Layout>
  );
};

export default Home;
