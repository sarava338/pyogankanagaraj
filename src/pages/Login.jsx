import React from "react";
import LoginForm from "../components/auth/LoginForm";

const Login = () => {
  return (
    <article className="d-flex flex-column align-items-center my-2">
      <h2>Login</h2>
      <LoginForm />
    </article>
  );
};

export default Login;
