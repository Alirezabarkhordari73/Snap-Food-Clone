import React, { useState } from "react";

import { BsFillPinAngleFill, BsFillStarFill } from "react-icons/bs";
import { RiEBike2Fill } from "react-icons/ri";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import InfiniteScroll from "react-infinite-scroll-component";

import Layout from "../Components/Layout/Layout";
import { Spinner, SideBar } from "../Components/Index";

import { allResturantData } from "../data";

const Resturant = () => {
  const [dataSource, setDataSource] = useState(allResturantData.slice(0, 9));
  const [hasMore, setHasMore] = useState(true);
  let targetIndexVal;

  const fetchData = () => {
    if (dataSource.length < allResturantData.length) {
      setTimeout(() => {
        if (dataSource.length + 10 >= allResturantData.length) {
          targetIndexVal =
            dataSource.length + (allResturantData.length - dataSource.length);
          console.log("more", targetIndexVal);
        } else {
          targetIndexVal = dataSource.length + 10;
          console.log("less", targetIndexVal);
        }
        setDataSource(
          dataSource.concat(
            allResturantData.slice(dataSource.length, targetIndexVal)
          )
        );
      }, 1000);
    } else {
      setHasMore(false);
    }
  };

  return (
    <Layout>
      <div className="w-full h-7 mt-5">breadcrumbs</div>
      <main className="w-full relative">
        <div className="w-full h-[70px]"></div>
        <div className="flex items-start justify-between">
          <SideBar />
          <div className="w-[100%]">
            <InfiniteScroll
              dataLength={dataSource.length}
              hasMore={hasMore}
              next={fetchData}
              loader={
                hasMore ? (
                  <div className="w-full justify-center items-center p-5">
                    <Spinner />
                  </div>
                ) : (
                  ""
                )
              }
              className="grid grid-cols-1 lg:grid-cols-3 w-full gap-5 p-3"
            >
              {dataSource.map((item) => (
                <div className="bg-white relative w-[50%px] h-[400px] rounded-medium flex flex-col items-center justify-start cursor-pointer Card-Shadow2 hover:Card-Shadow3">
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
                    <p className="flex gap-2 items-center">
                      <RiEBike2Fill />
                      <p>{item.deliveryType}</p>
                    </p>
                    <p>{item.deliveryPrice} تومان</p>
                  </div>
                </div>
              ))}
            </InfiniteScroll>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Resturant;
