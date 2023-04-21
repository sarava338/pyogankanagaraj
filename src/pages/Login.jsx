import React from "react";
import LoginWithMail from "../components/auth/LoginWithMail";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <article className="login-page">
      <LoginWithMail />
      <p>
        Need an account <Link to="/signup">signup</Link> here
      </p>
    </article>
  );
};

export default Login;
