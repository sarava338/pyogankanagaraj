import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";

const Login = () => {
  return (
    <article>
      <h2>Login</h2>
      <LoginForm />
      <p>
        Need an account <Link to="/signup">signup</Link> here
      </p>
    </article>
  );
};

export default Login;
