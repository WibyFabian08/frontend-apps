import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import navbarMenu from "../constants/navbarMenu";
import Button from "./buttons/Button";
import AOS from "aos";
import contacts from "../constants/contact";
import information from "../constants/information";

const Footer = ({ heroRef, featureRef, aboutRef, testimoniRef, blogRef }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const handleClick = (name) => {
    if (name === "Fitur") {
      featureRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (name === "Home") {
      heroRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (name === "Tentang") {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (name === "Testimoni") {
      testimoniRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (name === "Blog") {
      blogRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <>
      <div className="relative pt-32 pb-5 bg-primary-600">
        <div
          className="container absolute left-0 right-0 flex items-center px-5 mx-auto lg:px-48"
          style={{ top: "-15%" }}
          data-aos="fade-right"
        >
          <div className="flex flex-col items-center w-full p-5 rounded-lg shadow-lg md:p-10 md:flex-row bg-primary-100">
            <div className="w-full md:w-1/2">
              <h5 className="text-xl font-semibold text-center text-primary-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </h5>
            </div>
            <div className="flex items-center justify-center w-full mt-5 md:mt-0 md:w-1/2">
              <div className="mx-2">
                <Button label={"Demo Perangkat Keras"}></Button>
              </div>
              <div className="mx-2">
                <Button label={"Coba Gratis"}></Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap px-10 md:px-20 lg:px-32">
          <div className="w-full mb-10 lg:w-3/12 md:w-1/2 lg:mb-0" data-aos="fade-right">
            <div className="flex items-center">
              <div
                className={`flex items-center justify-center w-16 h-16 text-white bg-white mr-3`}
                style={{ borderRadius: "30% 70% 36% 64% / 30% 30% 70% 70%" }}
              >
                {" "}
                <Link to="/" className={`text-primary-400`}>
                  Logo
                </Link>
              </div>
              <div>
                <p className="text-xl font-semibold text-left text-white ">
                  Lorem Ipsum
                </p>
                <p className="mt-3 text-sm text-left text-white">
                  Lorem Ipsum doler set imit
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center"></div>
          </div>
          <div
            className="w-full mb-5 lg:w-3/12 md:w-1/2 lg:mb-0"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <p className="text-xl font-semibold text-white ">Informasi</p>
            <ul>
              {information.map((data, index) => {
                return (
                  <li className="my-2" key={index}>
                    <Link
                      className="text-sm text-white hover:text-primary-100"
                      to="#"
                    >
                      {data.data}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div
            className="w-full mb-5 lg:w-3/12 md:w-1/2 lg:mb-0"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <p className="text-xl font-semibold text-white ">Perusahaan</p>
            <ul>
              {navbarMenu.map((data, index) => {
                return (
                  <li className="my-2" key={index}>
                    <span
                      className="text-sm text-white cursor-pointer hover:text-primary-100"
                      onClick={() => handleClick(data.name)}
                    >
                      {data.name}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div
            className="w-full lg:w-3/12 md:w-1/2"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <p className="text-xl font-semibold text-white ">Kontak</p>
            <ul>
              {contacts.map((data, index) => {
                return (
                  <li className="my-2" key={index}>
                    <Link
                      className="text-sm text-white hover:text-primary-100"
                      to="#"
                    >
                      {data.data}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="container flex items-center justify-center px-10 mx-auto mt-20">
          <p className="text-xs text-center text-white">
            2020 Copyright Product by Loerem ipsum dolor sit emet. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
