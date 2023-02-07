import React from "react";

import { Header, Footer, Banner, Modal } from "../Index";
import { useStateContext } from "../../Context/StateContext";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Header />
      <Banner />
      <div className="min-h-screen z-10">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
