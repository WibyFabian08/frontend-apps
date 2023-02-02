import React from "react";
import { Link } from "react-router-dom";

import { Product } from "../assets/images";
import { Button } from "../components";

const SendEmail = () => {
  return (
    <div className="container flex items-center justify-center w-full h-screen px-5 mx-auto text-center text-white md:px-10 lg:px-20">
      <div className="flex flex-wrap items-center">
        <div className="w-full px-5 lg:w-1/2">
          <div className="flex-col items-start justify-start">
            <div className="flex items-center justify-start">
              <div
                className={`flex items-center justify-center mr-3 w-16 h-16 text-white bg-primary-400`}
                style={{ borderRadius: "30% 70% 36% 64% / 30% 30% 70% 70%" }}
              >
                {" "}
                <Link to="/" className={`text-white text-sm `}>
                  Logo
                </Link>
              </div>

              <h5 className="text-2xl font-semibold text-left text-primary-400">
                Lorem ipsum
              </h5>
            </div>
            <h5 className="mt-5 text-3xl font-bold text-left text-primary-400">
              Forgot Password
            </h5>
            <h5 className="text-xl font-normal text-left text-primary-400">
              Silahkan Isi Email Anda Untuk Reset Password
            </h5>
            <div className="flex flex-col mt-5">
              <input
                className="px-6 py-2 mt-5 border border-solid rounded-lg outline-none text-primary-400 border-primary-400 focus:outline-none"
                type="email"
                placeholder="Email"
              />
              <div className="flex items-center justify-between mt-5">
                <div className="flex items-start justify-start w-1/2">
                  <Link to="/reset-password">
                    <Button label={"Kirim Email"}></Button>
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className="flex items-start justify-start mt-5">
              <Button label={"Pelajari Lebih Lanjut"}></Button>
            </div> */}
          </div>
        </div>
        <div className="hidden w-full px-5 mt-10 lg:w-1/2 lg:mt-0 lg:block">
          <div className="flex items-center justify-center lg:justify-end">
            <div
              style={{
                height: "70vh",
                width: "70vh",
                borderRadius: "77% 23% 27% 73% / 56% 30% 70% 44% ",
              }}
              className="flex items-center justify-center bg-primary-600"
            >
              <img
                src={Product}
                alt="product-image"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendEmail;
