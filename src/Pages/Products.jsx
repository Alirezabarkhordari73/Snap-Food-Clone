import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Layout from "../Components/Layout/Layout";
import { ProductSideBar, BreadCrumbs, ShowProducts } from "../Components/Index";
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

  useEffect(() => {
    getProducts(urlCategoryName[0], parseInt(urlId[0]));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log("newExperience", newExperience);
  return (
    <Layout>
      <BreadCrumbs />
      <main className="w-full relative bg-slate-100">
        <div className="w-full h-[70px]"></div>
        <div className="flex items-start justify-between">
          <ProductSideBar />
          <ShowProducts dataSource={newExperience} />
          <div className="w-1/4 h-screen"></div>
        </div>
      </main>
    </Layout>
  );
};

export default Products;
