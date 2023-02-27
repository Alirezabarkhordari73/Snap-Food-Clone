import React, { createContext, useContext, useState } from "react";

export const Store = createContext();

const initialState = {
  mapModal: false,
  searchModal: false,
  signModal: false,
  discountModal: false,
  popUpModal: false,
};

export const ContextProvider = ({ children }) => {
  const [modalActivateState, setModalActivateState] = useState(initialState);
  const [isModalClicked, setIsModalClicked] = useState(false);

  const handleModal = (modalname) => {
    setModalActivateState({
      ...initialState,
      [modalname]: !modalActivateState[modalname],
    });
    if (modalname === "discountModal") {
      setIsModalClicked(!isModalClicked);
    } else if (modalname === "mapModal") {
      setIsModalClicked(!isModalClicked);
    }
  };

  function noLink(event) {
    event.stopPropagation();
  }

  return (
    <Store.Provider
      value={{
        modalActivateState,
        setModalActivateState,
        handleModal,
        initialState,
        isModalClicked,
        noLink,
      }}
    >
      {children}
    </Store.Provider>
  );
};

export const useStateContext = () => useContext(Store);
