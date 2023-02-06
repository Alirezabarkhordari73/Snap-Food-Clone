import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";

import { foodCategoryData } from "../../data";

const ResturantCategory = () => {
  return (
    <div>
      <h1 className="font-bold">دسته بندی ها</h1>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 justify-items-center mt-5">
        {foodCategoryData.map((item) => (
          <div
            key={item.categoryId}
            className="relative w-[220px] h-[110px] md:w-[220px] lg:w-[210px] xl:w-[190px] Card-Shadow rounded-small cursor-pointer">
            <LazyLoadImage
              effect="blur"
              src={item.categoryImage}
              alt={item.name}
              width={"100%"}
              style={{
                objectFit: "cover",
                borderRadius: "10px",
                height: "110px",
              }}
            />
            <div className="absolute flex justify-center items-center gap-1 bottom-0 right-0 bg-white w-24 h-8 rounded-small">
              <h2>{item.name}</h2>
              <IoIosArrowBack className="text-[hsl(321,100%,50%)]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResturantCategory;
