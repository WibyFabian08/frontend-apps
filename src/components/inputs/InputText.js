import React from "react";

const InputText = ({ type, name, placeholder, value, onChange }) => {
  return (
    <input
      className="px-6 py-2 mb-5 border border-solid rounded-lg outline-none text-primary-400 border-primary-400 focus:outline-none"
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputText;
