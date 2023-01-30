import React, { useEffect } from "react";
import AOS from "aos";
import { Product, Profile } from "../assets/images";
import { StarIcon } from "../assets/icons";
import TestimoniCard from "./Cards/TestimoniCard";
import clients from "../constants/client";

const Testimoni = ({ testimoniRef }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      ref={testimoniRef}
      className="container w-full px-5 mx-auto mt-20 mb-20 text-center text-white lg:px-20"
    >
      <h5
        className="text-4xl font-semibold text-center text-primary-400"
        data-aos="fade-down"
      >
        Klien Kami <br />
        Dipercaya Oleh Perusahaan Ternama
      </h5>
      <div className="flex flex-wrap items-center justify-center w-full mx-auto mt-16 lg:w-9/12">
        {clients.map((data, index) => {
          return (
            <div
              className="flex items-center justify-center w-20 h-20 mx-5 mb-5 overflow-hidden text-sm text-white bg-white rounded-full"
              data-aos="fade-right"
              key={index}
            >
              <img
                src={data.image}
                className="object-cover w-full h-full"
                alt="logo"
              />
            </div>
          );
        })}
      </div>
      <h5
        className="mt-10 text-4xl font-semibold text-center text-primary-400"
        data-aos="fade-down"
      >
        Apa Kata Klien Kami
      </h5>
      <div className="flex flex-wrap items-center justify-center mt-10">
        <TestimoniCard></TestimoniCard>
        <TestimoniCard></TestimoniCard>
        <TestimoniCard></TestimoniCard>
        <TestimoniCard></TestimoniCard>
      </div>
    </div>
  );
};

export default Testimoni;
