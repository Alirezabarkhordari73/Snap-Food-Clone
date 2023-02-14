import React from "react";
import { Link, useLocation } from "react-router-dom";

import { IoIosArrowBack } from "react-icons/io";

const BreadCrumbs = () => {
  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <div className="flex justify-center items-center gap-2" key={crumb}>
          <IoIosArrowBack />
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

  return (
    <div className="flex bg-transparent h-[30px] p-6 justify-start items-center text-[#969696] text-small">
      <Link to="/">اسنپ فود</Link>
      {crumbs}
    </div>
  );
};

export default BreadCrumbs;
