import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Product } from "../assets/images";
import { Button, InputText } from "../components";
import { sendEmail } from "../redux/actions/authAction";

const SendEmail = () => {
  const dispatch = useDispatch();
  const { authLoginForm, isLoadingAuth, isError, message } = useSelector(
    (state) => state.authState
  );

  const handleChange = (e) => {
    dispatch({
      type: "SET_AUTH_LOGIN_FORM",
      name: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = () => {
    let data = {
      email: authLoginForm.email,
    };
    dispatch(sendEmail(data));
  };
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
                <Link to="/home" className={`text-white text-sm `}>
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

            {isError !== null && (
              <div className="flex items-center justify-center py-3 mt-2 text-lg text-center text-red-500 bg-red-300 rounded-lg">
                {isError}
              </div>
            )}

            {message !== null && (
              <div className="flex items-center justify-center py-3 mt-2 text-lg text-center text-green-500 bg-green-300 rounded-lg">
                {message}
              </div>
            )}

            <div className="flex flex-col mt-5">
              <InputText
                name="email"
                value={authLoginForm.email}
                onChange={(e) => handleChange(e)}
                type="email"
                placeholder="Email"
              />
              <div className="flex items-center justify-between mt-5">
                <div className="flex items-start justify-start w-1/2">
                  <Button
                    isLoading={isLoadingAuth}
                    onClick={() => handleSubmit()}
                    label={"Kirim Email"}
                  ></Button>
                </div>
              </div>
            </div>
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
