import axios from "axios";

const API = axios.create({
  baseURL: "https://databaserealtimealatkandang.000webhostapp.com/restApi.php",
});

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem("user")) {
//     req.headers.token = localStorage.getItem("user");
//   }

//   return req;
// });

// https://api-berita-indonesia.vercel.app/antara/tekno/

export const login = (data) =>
  API.post(`?function=login`, data, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
  });

export const register = (data) =>
  API.post(`?function=register`, data, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
  });

export const sendEmail = (data) =>
  API.post("?function=sendEmail", data, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
  });

export const resetPassword = (data, email) =>
  API.post(`?function=resetPassword&email=${email}`, data, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
  });

export const getUserById = (id) => API.get(`?function=getUserById&id=${id}`);

export const getDataKandang = (id) => API.get(`?function=getDataById&id=${id}`);
