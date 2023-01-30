import axios from "axios";

const API = axios.create({ baseURL: "https://api-berita-indonesia.vercel.app/antara" });

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem("user")) {
//     req.headers.token = localStorage.getItem("user");
//   }

//   return req;
// });

// https://api-berita-indonesia.vercel.app/antara/tekno/

export const getNews = (name) => API.get(`/${name}`);