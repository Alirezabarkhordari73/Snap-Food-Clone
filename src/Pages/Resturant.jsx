import React, { useState, useContext, useEffect } from "react";

import { BsFillPinAngleFill, BsFillStarFill } from "react-icons/bs";
import { RiEBike2Fill } from "react-icons/ri";

import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";

import Layout from "../Components/Layout/Layout";
import { SideBar, BreadCrumbs, Banner } from "../Components/Index";

import useShopStore from "../Utils/ShopSttore";

const Resturant = () => {
  const [dataSource, setDataSource] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const { filterData } = useShopStore((state) => ({
    filterData: state.filterData,
  }));
  console.log("filterData", filterData);

  let targetIndexVal;
  //auto scroll to top
  const ScrollHandler = (e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
        e.target.documentElement.scrollHeight &&
      hasMore === true
    ) {
      fetchData();
    } else return;
  };

  //infinit scroll functionality
  const fetchData = () => {
    if (dataSource.length < filterData.length) {
      setTimeout(() => {
        if (dataSource.length + 7 >= filterData.length) {
          targetIndexVal =
            dataSource.length + (filterData.length - dataSource.length);
        } else {
          targetIndexVal = dataSource.length + 7;
        }
        setDataSource(
          dataSource.concat(filterData.slice(dataSource.length, targetIndexVal))
        );
      }, 1000);
    } else {
      setHasMore(false);
    }
  };
  useEffect(() => {
    setDataSource(filterData.slice(0, 9));
    setHasMore(true);
  }, [filterData]);

  useEffect(() => {
    window.addEventListener("scroll", ScrollHandler);
    return () => {
      window.removeEventListener("scroll", ScrollHandler);
    };
  }, [ScrollHandler]);

  return (
    <Layout>
      <Banner />
      <BreadCrumbs />
      <main className="w-full relative">
        <div className="w-full h-[70px]"></div>
        <div className="flex items-start justify-between">
          <SideBar />
          <div className="w-[100%]">
            <section className="grid grid-cols-1 lg:grid-cols-3 w-full gap-5 p-3">
              {dataSource.map((item) => (
                <div
                  key={item.id}
                  className="bg-white relative w-[50%px] h-[400px] rounded-medium flex flex-col items-center justify-start cursor-pointer Card-Shadow2 hover:Card-Shadow3"
                >
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
                    <div className="text-small text-[#00af5d] absolute top-[6%] right-0 bg-white py-1 pr-2 pl-3 rounded-l-medium flex items-center gap-2">
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
                  <div className="w-[65%] p-2 flex justify-center items-center gap-4 Card-Shadow2 rounded-medium mt-6 text-small">
                    <div className="flex gap-2 items-center">
                      <RiEBike2Fill />
                      <p>{item.deliveryType}</p>
                    </div>
                    <p>{item.deliveryPrice} تومان</p>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default trackWindowScroll(Resturant);
