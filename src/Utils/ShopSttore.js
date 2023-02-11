import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { allResturantData } from "../data";

const useShopStore = create((set) => ({
  filterData: allResturantData,
  filterBtns: [
    { id: 1, checked: false, label: "discount" },
    { id: 2, checked: false, label: "express" },
    { id: 3, checked: false, label: "coupon" },
  ],

  applyFilter: (btnname) => {
    set((state) => {
      const filterBtns = state.filterBtns.map((item) =>
        item.label === btnname ? { ...item, checked: !item.checked } : item
      );

      const filterBtnsList = filterBtns
        .filter((item) => item.checked === true)
        .map((item) => item.label.toLowerCase());
      let filterDataList;

      if (filterBtnsList.length) {
        console.log("filterBtnsList", filterBtnsList);
        filterDataList = state.filterData.filter((item) =>
          item.filterBtns.includes(filterBtnsList)
        );
      } else {
        console.log("filterBtnsList2", filterBtnsList);
        filterDataList = allResturantData;
      }
      return {
        filterBtns: filterBtns,
        filterData: filterDataList,
      };
    });
  },
}));

export default useShopStore;
