import React from "react";

const FeatureCard = ({duration}) => {
  return (
    <div
      className="w-full h-full px-5 mb-10 lg:w-1/4 md:w-1/2 lg:mb-0 "
      data-aos="fade-right"
      data-aos-duration={duration}
    >
      <div className="flex flex-col items-center w-full h-full p-5 rounded-lg shadow-lg bg-primary-100">
        <div className="flex items-center justify-center w-20 h-20 text-white bg-primary-400" 
        style={{borderRadius: "30% 70% 36% 64% / 30% 30% 70% 70%"}}>
          {" "}
          Lorem
        </div>
        <h5 className="mt-5 text-2xl font-semibold text-center text-primary-400">
          Lorem ipsum dolor{" "}
        </h5>
        <p className="mt-5 text-xs text-center text-primary-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aut
          id, distinctio qui saepe debitis, dolor numquam totam quas
          reprehenderit amet repudiandae corporis praesentium velit sint
          tempora! Explicabo, doloribus corrupti!
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
