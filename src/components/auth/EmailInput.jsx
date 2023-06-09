import React from "react";

const EmailInput = ({ email, setEmail }) => {
  return (
    <div className="my-2">
      <label htmlFor="email">Email : </label>
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        autoComplete="off"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        required
      />
    </div>
  );
};

export default EmailInput;
