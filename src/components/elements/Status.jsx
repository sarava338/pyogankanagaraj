import React from "react";

const Status = ({ status }) => {
  const { messege, code } = status;
  if (messege)
    return (
    <b
      className="status"
      style={{
        color: code ? "green" : "red",
        fontSize: "1.2rem",
      }}
    >
      {messege}
    </b>
  );
};

export default Status;
