import React from "react";
import { Header, Footer, Banner } from "../Index";

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
