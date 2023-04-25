import React from "react";

const PasswordInput = ({ password, setPassword, placeholder, label }) => {
  return (
    <div className='my-2'>
      <label htmlFor="password">{label}</label>
      <input
        type="password"
        name="password"
        autoComplete="off"
        placeholder={placeholder}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        required
      />
    </div>
  );
};

export default PasswordInput;
