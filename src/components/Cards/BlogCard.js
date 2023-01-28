import React from "react";

import { BlogImage } from "../../assets/images";

const BLogCard = () => {
  return (
    <div
      className="px-5 mb-10 lg:mb-0 lg:w-1/3 md:w-1/2"
      data-aos="fade-right"
    >
      <div className="flex flex-col w-full rounded-lg shadow-lg bg-primary-100">
        <div className="w-full h-48 overflow-hidden">
          <img
            src={BlogImage}
            className="object-cover w-full h-full"
            alt="blog image"
          />
        </div>
        <div className="p-2">
          <p className="text-xs text-left text-primary-300">
            Teknologi - 30 Januari 2023
          </p>

          <p className="mt-2 text-sm font-semibold text-left text-primary-400">
            Lorem ipsum dolor sit amet consectetur
          </p>

          <p className="mt-2 text-xs text-left text-primary-300">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            ipsam fugiat error,
          </p>

          <p className="mt-2 text-xs text-left text-primary-300">
            William - Product Designer
          </p>
        </div>
      </div>
    </div>
  );
};

export default BLogCard;
