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
        filterDataList = state.filterData.filter((item) =>
          item.filterBtns.some((item) => filterBtnsList.includes(item))
        );
      } else {
        filterDataList = allResturantData;
      }
      return {
        filterBtns: filterBtns,
        filterData: filterDataList,
      };
    });
  },
  filterByCategory: (categoryname) => {
    set((state) => {
      const iraniData = state.filterData.filter((item) =>
        item.category.includes(categoryname)
      );
      return {
        filterData: iraniData,
      };
    });
  },
}));

export default useShopStore;
