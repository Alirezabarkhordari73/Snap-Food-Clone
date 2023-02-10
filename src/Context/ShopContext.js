import React, { createContext, useReducer } from "react";

import { allResturantData } from "../data";

const initialState = {
  data: allResturantData,
  filterData: allResturantData,
};

export const Store = createContext(initialState);

export const ShopStoreProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "GET_WITHDISCOUNT":
        const withDiscountData = allResturantData.filter(
          (item) => item.discount === false
        );
        return { ...state, filterData: withDiscountData };
      case "GET_ALLDATA":
        return { ...state, filterData: allResturantData };
      default:
        return state;
    }
  };
  const [shopState, dispatch] = useReducer(reducer, initialState);
  const filterData = shopState?.filterData;

  return (
    <Store.Provider value={{ filterData, dispatch }}>{children}</Store.Provider>
  );
};
