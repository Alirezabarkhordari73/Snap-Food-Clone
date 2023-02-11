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
        <div className="flex justify-center items-center gap-2">
          <IoIosArrowBack />
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });
  console.log(currentLink);
  return (
    <div className="flex justify-start items-center text-[#969696] mt-4 px-2 text-small">
      <Link to="/">اسنپ فود</Link>
      {crumbs}
    </div>
  );
};

export default BreadCrumbs;
