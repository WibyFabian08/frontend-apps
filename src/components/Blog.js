import React, { useEffect } from "react";
import AOS from "aos";
import { BlogImage } from "../assets/images";
import BLogCard from "./Cards/BlogCard";

const Blog = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full px-5 mb-40 text-center text-white md:px-20 lg:px-20">
      <h5
        className="text-4xl font-semibold text-center text-primary-400"
        data-aos="fade-down"
      >
        Artikel Terbaru
      </h5>
      <div className="flex flex-wrap justify-center w-full mt-16">
        <BLogCard></BLogCard>
        <BLogCard></BLogCard>
        <BLogCard></BLogCard>
      </div>
    </div>
  );
};

export default Blog;
