import React from "react";

import { BsFillPinAngleFill, BsFillStarFill } from "react-icons/bs";
const ProductSideBar = ({ dataSource }) => {
  return (
    <div className="w-1/3 h-full flex flex-col justify-start items-center ml-4 top-[75px] right-0 sticky mb-5 mr-3 gap-7">
      {dataSource.map((item) => (
        <section
          key={item.id}
          className="w-full h-[400px] rounded-medium p-3 flex flex-col justify-start items-start"
        >
          <header className="flex w-full gap-3">
            <img
              src={item.resturantImage}
              alt={item.resturantName}
              className="w-[110px] h-[110px] rounded-medium"
            />
            <div className="flex flex-col justify-between items-start">
              <div className="flex items-center gap-1">
                <BsFillStarFill className="text-yellow-500 text-small" />
                {item.rating?.ratingValue}
              </div>
              <p>{item.resturantName}</p>
            </div>
            <div>
              <span className="bg-[hsl(321,100%,50%)] px-[5px] py-[1px] text-small text-white rounded-small">
                %{item.discount}
              </span>
            </div>
          </header>

          <button className="w-full h-[2.5rem] Card-Shadow2 bg-white text-green-600 rounded-[3rem] mt-7">
            اظلاعات و نظرات
          </button>
        </section>
      ))}
    </div>
  );
};

export default ProductSideBar;
