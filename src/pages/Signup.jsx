import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <article className="signup-page">
      <p>
        Already an user <Link to="/login">login</Link> here
      </p>
    </article>
  );
};

export default Signup;
