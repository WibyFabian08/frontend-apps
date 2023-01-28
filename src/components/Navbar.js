import React, { useState } from "react";
import { Link } from "react-router-dom";
import navbarMenu from "../constants/navbarMenu";
import Button from "./buttons/Button";
import MenuBurger from "../assets/icons/menu.png";
import Close from "../assets/icons/close.png";

const Navbar = ({ heroRef, featureRef, aboutRef }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);

    return () => (window.onscroll = null);
  };
  return (
    <header
      className={`sticky transition-all duration-200 z-50 ease-in-out top-0 flex items-center h-20 bg-transparent ${
        isScrolled && "shadow-md"
      }`}
      style={{
        backgroundColor: isScrolled ? "white" : "rgba(96, 74, 54, 1)",
      }}
    >
      <div className="container flex items-center justify-between px-5 mx-auto md:px-16 lg:px-20">
        <div
          className={`flex items-center justify-center w-16 h-16 text-white ${
            isScrolled ? "bg-primary-400" : "bg-white"
          }  `}
          style={{ borderRadius: "30% 70% 36% 64% / 30% 30% 70% 70%" }}
        >
          {" "}
          <Link
            to="/"
            className={`${
              isScrolled ? "text-white" : "text-primary-600"
            } transition-all duration-300 hover:text-black text-sm`}
          >
            Logo
          </Link>
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center list-none">
            {navbarMenu.map((data, index) => {
              return (
                <li className="ml-10" key={index}>
                  <Link
                    to={data.path}
                    className={`${
                      isScrolled ? "text-primary-600" : "text-white"
                    } transition-all duration-300 hover:text-primary-100`}
                  >
                    {data.name}
                  </Link>
                </li>
              );
            })}

            <li className="ml-10">
              <Button label={"Masuk"}></Button>
            </li>
          </ul>
        </div>
        <div className="block lg:hidden">
          <img
            src={MenuBurger}
            onClick={() => setIsShowMenu(!isShowMenu)}
            alt="menu icon"
            className="object-cover cursor-pointer"
            style={{ width: "30px" }}
          />
        </div>

        <div
          className={`absolute transition-all duration-300 ease-in-out bg-primary-100 ${
            isShowMenu ? "opacity-100  z-10 h-screen inset-0" : "opacity-0  h-0"
          }`}
        >
          <div className="relative p-10">
            <div
              className="absolute cursor-pointer"
              style={{ top: "50px", right: "50px" }}
            >
              <img
                src={Close}
                onClick={() => setIsShowMenu(!isShowMenu)}
                alt="menu icon"
                className="object-cover cursor-pointer"
                style={{ width: "30px" }}
              />
            </div>
            <div>
              <ul className="flex flex-col items-start list-none">
                {navbarMenu.map((data, index) => {
                  return (
                    <li className="mb-5" key={index}>
                      <Link
                        to={data.path}
                        className={`text-primary-600 font-semibold hover:text-primary-400`}
                      >
                        {data.name}
                      </Link>
                    </li>
                  );
                })}

                <li className="w-full">
                  <Button isFull={true} label={"Masuk"}></Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
