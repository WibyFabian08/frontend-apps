import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { Product } from "../assets/images";
import { Button } from "../components";
import { register } from "../redux/actions/authAction";

const SignUp = () => {
  const dispatch = useDispatch();
  const { authRegisterForm, isLoadingAuth, isError } = useSelector(
    (state) => state.authState
  );

  const history = useHistory();

  const handleChange = (e) => {
    dispatch({
      type: "SET_AUTH_REGISTER_FORM",
      name: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(register(authRegisterForm, history));
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
                <Link to="/" className={`text-white text-sm `}>
                  Logo
                </Link>
              </div>

              <h5 className="text-2xl font-semibold text-left text-primary-400">
                Lorem ipsum
              </h5>
            </div>
            <h5 className="mt-5 text-3xl font-bold text-left text-primary-400">
              Selamat Datang
            </h5>
            <h5 className="text-xl font-normal text-left text-primary-400">
              Silahkan Isi Form Untuk Membuat Akun Anda
            </h5>

            {isError !== null && (
              <div className="flex items-center justify-center py-3 mt-2 text-lg text-center text-red-500 bg-red-300 rounded-lg">
                {isError}
              </div>
            )}

            <div className="flex flex-col mt-5">
              <input
                className="px-6 py-2 border border-solid rounded-lg outline-none text-primary-400 border-primary-400 focus:outline-none"
                type="text"
                name="name"
                value={authRegisterForm.name}
                onChange={(e) => handleChange(e)}
                placeholder="Name"
              />
              <input
                className="px-6 py-2 mt-5 border border-solid rounded-lg outline-none text-primary-400 border-primary-400 focus:outline-none"
                type="email"
                name="email"
                value={authRegisterForm.email}
                onChange={(e) => handleChange(e)}
                placeholder="Email"
              />
              <input
                className="px-6 py-2 mt-5 border border-solid rounded-lg outline-none text-primary-400 border-primary-400 focus:outline-none"
                type="number"
                name="id_produk"
                value={authRegisterForm.id_produk}
                onChange={(e) => handleChange(e)}
                placeholder="ID Product"
              />
              <input
                className="px-6 py-2 mt-5 border border-solid rounded-lg outline-none text-primary-400 border-primary-400 focus:outline-none"
                type="password"
                name="password"
                value={authRegisterForm.password}
                onChange={(e) => handleChange(e)}
                placeholder="Password"
              />

              <div className="flex items-center justify-between mt-5">
                <div className="flex items-start justify-start w-1/2">
                  <Button
                    isLoading={isLoadingAuth}
                    onClick={() => handleSubmit()}
                    label={"Daftar"}
                  ></Button>
                </div>
              </div>

              <div className="flex items-center justify-center mt-5">
                <Link
                  to="/sign-in"
                  className="text-lg font-semibold text-center text-primary-400"
                >
                  Sudah Punya Akun? Masuk Sekarang
                </Link>
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

export default SignUp;
