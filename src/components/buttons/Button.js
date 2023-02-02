import React from "react";

const Button = ({ label, isFull, onClick, isLoading }) => {
  if (isFull) {
    return (
      <button
        disabled={isLoading}
        onClick={onClick}
        className="w-full px-6 py-2 text-center text-white transition-all duration-300 ease-in-out rounded-full bg-primary-200 hover:bg-primary-300"
      >
        {isLoading ? "Loading..." : label}
      </button>
    );
  }
  return (
    <button
      disabled={isLoading}
      onClick={onClick}
      className="px-6 py-2 text-white transition-all duration-300 ease-in-out rounded-full bg-primary-200 hover:bg-primary-300"
    >
      {isLoading ? "Loading..." : label}
    </button>
  );
};

export default Button;
