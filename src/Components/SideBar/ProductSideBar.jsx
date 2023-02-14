import React from "react";

const ProductSideBar = () => {
  return (
    <div className="w-1/4 h-full flex flex-col justify-start items-center ml-4 top-[75px] right-0 sticky mb-5 mr-3 gap-7">
      <div className="w-full h-[400px] rounded-medium p-4 flex flex-col justify-between items-start">
        <div className="w-full rounded-medium py-4 px-2">همه دسته بندی ها</div>
      </div>
    </div>
  );
};

export default ProductSideBar;
