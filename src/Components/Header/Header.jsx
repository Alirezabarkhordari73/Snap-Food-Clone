import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../Assets/Images/Logo.png";
import { CiSearch } from "react-icons/ci";
import { MdOutlineMyLocation } from "react-icons/md";
import { RxPerson } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { BsChevronDown, BsShopWindow } from "react-icons/bs";
import { Map, Modal } from "../Index";
import { useStateContext } from "../../Context/StateContext";

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";

const Header = () => {
  const center = {
    lat: 35.715298,
    lng: 51.404343,
  };
  const [searchText, setSearchText] = useState("");
  const [listPlace, setListPlace] = useState([]);
  console.log(listPlace);

  const { handleModal, modalActivateState, noLink } = useStateContext();

  return (
    <div className="sticky top-0 left-0 z-50 drop-shadow-sm">
      <div className="h-[4rem] flex items-center justify-between px-2 relative bg-white">
        <div className="w-[33.33%] flex justify-start items-center gap-5">
          <Link to="/">
            <img
              src={Logo}
              className="w-[67px] h-[67px] object-contain hidden lg:inline"
              alt="logo"
            />
          </Link>

          <div className="flex justify-start items-center gap-2">
            <MdOutlineMyLocation className="text-medium text-[#d6d6d6]" />
            <div className="flex flex-col items-start font-bold">
              <p className="text-small">آدرس انتخابی</p>
              <p className="text-verysmall text-[#cecece] tracking-[1px]">
                تهران ستاران لومبومبا
              </p>
            </div>
            <BsChevronDown
              onClick={() => handleModal("mapModal")}
              className="text-small mr-3 text-[hsl(321,100%,50%)] cursor-pointer"
            />
          </div>
        </div>

        <div
          onClick={() => handleModal("searchModal")}
          className="w-[33.33%] hidden md:flex gap-2 justify-center items-center opacity-1"
        >
          <button className="h-[3rem] w-[29vw] rounded-medium flex justify-start items-center gap-2 px-3 bg-[#e9ecf0]">
            <CiSearch className="text-medium text-[#575757]" />
            <input
              type="text"
              className="w-[25vw] h-[3rem] bg-transparent rounded-md outline-none"
              placeholder="جست و جو در اسنپ فود"
            />
          </button>
        </div>

        <div className="w-[33.33%] lg:hidden flex justify-end items-center gap-3">
          <CiSearch
            onClick={() => handleModal("searchModal")}
            className="text-medium cursor-pointer"
          />
          <RxPerson
            onClick={() => handleModal("signModal")}
            className="text-medium cursor-pointer"
          />
        </div>

        <div className="hidden w-[33.33%] justify-end items-center lg:flex gap-3 text-xl ml-3">
          <div className="flex justify-center items-center gap-2">
            <BsShopWindow className="text-medium" />
            <Link to="/SignUp-Owners" className="text-small">
              ثبت نام فروشندگان
            </Link>
          </div>
          <button
            onClick={() => handleModal("signModal")}
            className="h-[2.9rem] bg-[hsl(321,100%,50%)] rounded-small w-auto px-2 text-white font-bold tracking-tight"
          >
            ورود یا عضویت
          </button>
        </div>
      </div>
      {modalActivateState.searchModal && (
        <Modal ModalName={"searchModal"}>
          <div
            onClick={(event) => noLink(event)}
            className="flex justify-center items-center gap-2 absolute top-2"
          >
            <button className="w-[20rem] h-[3rem] lg:w-[30vw] md:w-[21rem] flex justify-start items-center rounded-medium gap-2 px-3 bg-[#ffffff] border-[1px] border-[#000]">
              <CiSearch className="text-medium text-[#575757]" />
              <input
                type="text"
                className="w-[20rem] h-[3rem] lg:w-[30vw] md:w-[21rem] bg-transparent rounded-md outline-none"
                placeholder="جست و جو در اسنپ فود"
              />
            </button>
          </div>
        </Modal>
      )}
      {modalActivateState.mapModal && (
        <Modal ModalName={"mapModal"}>
          <div
            onClick={(event) => noLink(event)}
            className="flex justify-center items-center"
          >
            <div className="w-[35rem] md:w-[40rem] lg:w-[48rem] h-[90vh] bg-white rounded-medium p-3 flex flex-col justify-between items-center gap-2 Card-Shadow">
              <div className="w-full">
                <AiOutlineClose
                  className="mb-3 cursor-pointer"
                  onClick={() => handleModal("mapModal")}
                />
                <h1 className="font-bold text-larg">انتخاب آدرس</h1>
                <p className="text-small mt-2">
                  برای مشاهده مناسب ترین پیشنهاد ها به شما لطفا موقعیت خود را
                  مشخص کنید .
                </p>
              </div>
              <div className="w-[100%] h-[85%] relative mt-2">
                <Map latlng={center} />
                <button className="absolute flex justify-between items-center gap-2 bg-white rounded-small w-[90%] h-[2.8rem] top-3 right-2 z-[10000] px-2 Card-Shadow2 outline-none">
                  <input
                    type="text"
                    value={searchText}
                    className="w-[100%] h-[100%] bg-transparent rounded-md outline-none"
                    placeholder="جست و جوی منطقه"
                    onChange={(event) => {
                      setSearchText(event.target.value);
                    }}
                  />
                  <CiSearch className="text-medium text-[#575757]" />
                </button>
              </div>
              <button
                onClick={() => {
                  // Search
                  const params = {
                    q: searchText,
                    format: "json",
                    addressdetails: 1,
                    polygon_geojson: 0,
                  };
                  const queryString = new URLSearchParams(params).toString();
                  const requestOptions = {
                    method: "GET",
                    redirect: "follow",
                  };
                  fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
                    .then((response) => response.text())
                    .then((result) => {
                      setListPlace(JSON.parse(result));
                    })
                    .catch((err) => console.log("err: ", err));
                }}
                className="w-full h-[3rem] bg-[hsl(321,100%,50%)] rounded-medium text-xl font-bold text-white mt-3 hover:bg-[#e80097] transition-all duration-200"
              >
                تایید
              </button>
            </div>
          </div>
        </Modal>
      )}
      {modalActivateState.signModal && (
        <Modal ModalName={"signModal"}>
          <div
            onClick={(event) => noLink(event)}
            className="flex justify-center items-center"
          >
            <div className="w-[30rem] h-[340px] bg-white rounded-medium p-3 flex flex-col justify-between items-start Card-Shadow">
              <div className="w-full flex justify-between items-center h-[15%]">
                <AiOutlineClose
                  className="mb-3 cursor-pointer text-medium"
                  onClick={() => handleModal("signModal")}
                />
                <img
                  src={Logo}
                  className="w-[60px] h-[60px] object-contain"
                  alt="logo"
                />
              </div>

              <div className="gap-1 flex flex-col justify-start h-[65%] w-full">
                <h1 className="text-larg font-bold">ورود یا عضویت</h1>
                <div className="mt-12 w-full flex flex-col gap-1">
                  <p className="text-small text-[#414141] font-semibold">
                    شماره تفن همراه
                  </p>
                  <button className="h-[3rem] w-full rounded-medium flex justify-start items-center border-[1px] border-[#d8d8d8]">
                    <input
                      type="text"
                      className="h-[3rem] w-full rounded-medium bg-transparent rounded-md outline-none focus:border-[#000] focus:border-[1px] p-3"
                    />
                  </button>
                  <p className="text-supersmall text-[#808080]">
                    شماره با 0 شروع میشود
                  </p>
                </div>
              </div>

              <button
                onClick={() => console.log("Helllo")}
                className="w-full h-[3rem] bg-[hsl(321,100%,50%)] rounded-medium text-xl font-bold text-white"
              >
                تایید
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Header;
