import React from "react";

const Modal = ({ children, setModalOneIsOpen }) => {
  const eventHandler = () => {
    setModalOneIsOpen(false);
  };
  return (
    <div
      className="Overlay w-full min-h-screen absolute top-0 right-0 flex justify-center items-start"
      onClick={eventHandler}>
      {children}
    </div>
  );
};

export default Modal;
