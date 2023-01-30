import React, { useEffect } from "react";
import { HeroImage } from "../assets/images";
import AOS from "aos";

const Hero = ({heroRef}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div ref={heroRef} className="bg-primary-600">
        <div className="container flex flex-wrap items-center justify-between px-5 mx-auto lg:px-20 md:px-10">
          <div
            className="w-full px-2 mx-auto mt-5 text-center lg:w-1/2 md:mt-0"
            data-aos="fade-right"
          >
            <h2 className="text-3xl leading-tight text-white md:text-4xl">
              Lorem ipsum dolor emet <br />{" "}
              <span className="font-bold">Laboriosam fugs ut expedita</span>
            </h2>
            <p className="mt-6 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam fugit voluptatibus quidem ut expedita et consequuntur
              illum. Ex quis vel labore, laborum perspiciatis, rem blanditiis
              aliquid, quisquam veritatis asperiores doloremque.
            </p>
          </div>
          <div
            className="flex items-center justify-center w-full px-2 md:mt-10 lg:justify-end lg:w-1/2"
            data-aos="fade-left"
          >
            <div
              className="relative hidden w-1/2 border border-white border-solid md:block"
              style={{ height: "50vh" }}
            >
              <div
                className="absolute hidden w-full h-full md:block"
                style={{ bottom: "-40px", left: "-40px" }}
              >
                <img
                  src={HeroImage}
                  alt="hero image"
                  className="object-cover w-full h-full rounded-bl-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#604a36"
          fillOpacity="1"
          d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,133.3C672,117,768,139,864,133.3C960,128,1056,96,1152,74.7C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default Hero;
