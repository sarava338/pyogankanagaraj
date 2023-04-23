import React from "react";

const Button = ({ type, value, className }) => {
  return (
    <button className={className + " my-2"} type={type}>
      {value}
    </button>
  );
};

export default Button;
