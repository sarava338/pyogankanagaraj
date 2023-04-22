import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import "./page.css";

const Login = () => {
  return (
    <article className="login-page">
      <h2>Login</h2>
      <LoginForm />
      <p>
        Need an account <Link to="/signup">signup</Link> here
      </p>
    </article>
  );
};

export default Login;
