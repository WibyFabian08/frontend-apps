import React, { useEffect } from "react";
import AOS from "aos";
import FeatureCard from "./Cards/FeatureCard";

const Feautre = ({ featureRef }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full px-10 mt-0 mb-20 text-center text-white lg:px-0 md:px-20 md:-mt-20 lg:-mt-64 ">
      <h5
        ref={featureRef}
        className="text-4xl font-semibold text-center text-primary-400 lg:text-white"
        data-aos="fade-down"
      >
        Fitur Kami
      </h5>
      <div className="flex flex-wrap justify-center mt-20">
        <FeatureCard duration={"1000"}></FeatureCard>
        <FeatureCard duration={"2000"}></FeatureCard>
        <FeatureCard duration={"3000"}></FeatureCard>
      </div>
    </div>
  );
};

export default Feautre;
