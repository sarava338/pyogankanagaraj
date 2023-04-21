import React from "react";
import SignupWithMail from "../components/auth/SignupWithMail";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <article className="signup-page">
      <SignupWithMail />
      <p>
        Already an user <Link to="/login">login</Link> here
      </p>
    </article>
  );
};

export default Signup;
