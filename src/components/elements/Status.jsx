import React from "react";

const Status = ({ status, error }) => {
  return (
    <b
      style={{
        color: error ? "red" : "green",
        fontSize: "1.2rem",
      }}
    >
      {status}
    </b>
  );
};

export default Status;
