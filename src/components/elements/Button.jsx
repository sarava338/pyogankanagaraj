import React from "react";

const Button = ({ type, value, className, onClick }) => {
  return (
    <button className={className + " my-2"} type={type} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
