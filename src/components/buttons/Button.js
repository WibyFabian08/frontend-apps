import React from "react";

const Button = ({label, isFull}) => {
  if(isFull) {
    return (
      <button className="w-full px-6 py-2 text-center text-white transition-all duration-300 ease-in-out rounded-full bg-primary-200 hover:bg-primary-300">
      {label}
    </button>
    )
  }
  return (
    <button className="px-6 py-2 text-white transition-all duration-300 ease-in-out rounded-full bg-primary-200 hover:bg-primary-300">
      {label}
    </button>
  );
};

export default Button;
