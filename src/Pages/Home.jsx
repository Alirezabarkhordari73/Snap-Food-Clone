import React from "react";

import {
  DownLoadSection,
  OwnerSection,
  Discount,
  ResturantCategory,
  NewsExperienceSection,
  TopRateds,
  WithDiscounts,
  WithCoupon,
} from "../Components/Index";
import Layout from "../Components/Layout/Layout";

const Home = () => {
  return (
    <Layout>
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
