import React from "react";
import { Link } from "react-router-dom";
import SignupForm from "../components/auth/SignupForm";

const Signup = () => {
  return (
    <article className="signup-page">
      <h2>Sign up</h2>
      <SignupForm />
      <p>
        Already an user <Link to="/login">login</Link> here
      </p>
    </article>
  );
};

export default Signup;
