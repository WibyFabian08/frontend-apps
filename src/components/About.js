import React, { useEffect } from "react";
import AOS from "aos";
import Button from "./buttons/Button";
import { Product } from "../assets/images";

const About = ({aboutRef}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div ref={aboutRef} className="container w-full px-10 mx-auto text-center text-white md:px-20">
      <h5 className="text-4xl font-semibold text-center text-primary-400" data-aos="fade-down">
        Tentang Kami
      </h5>
      <div className="flex flex-wrap items-center mt-16">
        <div className="w-full lg:w-1/2" data-aos="fade-right">
          <div className="flex-col items-start justify-start px-2">
            <h5 className="text-2xl font-semibold text-left text-primary-400">
              Lorem ipsum dolor sit amet,
            </h5>
            <p className="mt-5 text-left text-md text-primary-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              aut id, distinctio qui saepe debitis, dolor numquam totam quas
              reprehenderit amet repudiandae corporis praesentium velit sint
              tempora! Explicabo, doloribus corrupti!
            </p>
            <div className="flex items-start justify-start mt-5">
              <Button label={"Pelajari Lebih Lanjut"}></Button>
            </div>
          </div>
        </div>
        <div className="hidden w-full mt-10 lg:w-1/2 lg:mt-0 md:block" data-aos="fade-left">
          <div className="flex items-center justify-center px-2 lg:justify-end">
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

export default About;
