import React, { useEffect } from "react";
import AOS from "aos";
import BLogCard from "./Cards/BlogCard";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../redux/actions/newsAction";

const Blog = ({blogRef}) => {
  const dispatch = useDispatch();
  const { news } = useSelector((state) => state.newsState);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    dispatch(getNews("tekno"));
  }, []);

  return (
    <div ref={blogRef} className="w-full px-5 mb-40 text-center text-white md:px-20 lg:px-20">
      <h5
        className="text-4xl font-semibold text-center text-primary-400"
        data-aos="fade-down"
      >
        Artikel Terbaru
      </h5>
      <div className="flex flex-wrap justify-center w-full mt-16">
        {news.length > 0 &&
          news.map((data, index) => {
            return <BLogCard data={data} key={index}></BLogCard>;
          })}
      </div>
    </div>
  );
};

export default Blog;
