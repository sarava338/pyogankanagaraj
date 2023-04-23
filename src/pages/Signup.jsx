import React from "react";
import SignupForm from "../components/auth/SignupForm";

const Signup = () => {
  return (
    <article className="d-flex flex-column align-items-center my-2">
      <h2>Signup</h2>
      <SignupForm />
    </article>
  );
};

export default Signup;
