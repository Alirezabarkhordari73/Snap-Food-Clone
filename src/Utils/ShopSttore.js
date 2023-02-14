import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { allResturantData, newExperienceResturantData } from "../data";

let initFilterBtns = [
  { id: 1, checked: false, label: "discount" },
  { id: 2, checked: false, label: "express" },
  { id: 3, checked: false, label: "coupon" },
];

const useShopStore = create(
  devtools((set) => ({
    filterData: allResturantData,
    tempData: [],
    filterBtns: initFilterBtns,
    newExperience: newExperienceResturantData,

    applyFilter: (btnname, crumbs) => {
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
          filterDataList =
            crumbs === "resturant" ? allResturantData : state.tempData;
        }
        return {
          ...state,
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
          ...state,
          filterData: iraniData,
          tempData: iraniData,
        };
      });
    },
    backToDefault: () => {
      set((state) => {
        return {
          ...state,
          filterData: allResturantData,
          filterBtns: initFilterBtns,
          newExperience: newExperienceResturantData,
        };
      });
    },
    getProducts: (categoryname, id) => {
      set((state) => {
        if (categoryname === "newexperiences") {
          const data = state.newExperience.filter((item) => item.id === id);
          // console.log(data);
          return {
            ...state,
            newExperience: data,
          };
        } else {
          return {
            ...state,
            newExperience: [],
          };
        }
      });
    },
  }))
);

export default useShopStore;
