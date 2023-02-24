import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Layout from "../Components/Layout/Layout";
import {
  ProductSideBar,
  BreadCrumbs,
  ShowProducts,
  ProductLeftSideBar,
} from "../Components/Index";
import useShopStore from "../Utils/ShopSttore";

const Products = () => {
  const [dataSource, setDataSource] = useState([]);
  const { getProducts, newExperience } = useShopStore((state) => ({
    getProducts: state.getProducts,
    newExperience: state.newExperience,
  }));

  const location = useLocation();

  let urlId = "";
  let urlCategoryName = "";

  const crumbs = location.pathname.split("/").filter((crumb) => crumb !== "");
  urlCategoryName = crumbs.splice(0, 1);
  urlId = crumbs.splice(0, 2);

  console.log(urlId);
  console.log(urlCategoryName);

  useEffect(() => {
    getProducts(urlCategoryName[0], parseInt(urlId[0]));
  }, []);
  console.log(newExperience);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <main className="w-full relative bg-[#f5f5f5]">
        <BreadCrumbs />
        <div className="w-full h-[70px]"></div>
        <div className="flex flex-col justify-start items-center md:flex-row md:items-start md:justify-between">
          <ProductSideBar dataSource={newExperience} />
          <ShowProducts dataSource={newExperience} />
          <ProductLeftSideBar />
        </div>
      </main>
    </Layout>
  );
};

export default Products;
