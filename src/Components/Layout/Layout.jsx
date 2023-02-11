import React from "react";

import { Header, Footer } from "../Index";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Header />
      <div className="min-h-screen z-10">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
