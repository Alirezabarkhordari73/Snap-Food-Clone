import React, { createContext, useReducer, useEffect } from "react";

import { allResturantData } from "../data";

const initialState = {
  data: allResturantData,
  filterData: allResturantData,
};

export const Store = createContext(initialState);

export const ShopStoreProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "CHECKBOX_FILTER":
        return state;
      default:
        return state;
    }
  };
  const [shopState, dispatch] = useReducer(reducer, initialState);
  const filterData = shopState?.filterData;

  return (
    <Store.Provider
      value={{
        filterData,
        dispatch,
      }}
    >
      {children}
    </Store.Provider>
  );
};
