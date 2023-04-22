import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <article className="login-page">
      <p>
        Need an account <Link to="/signup">signup</Link> here
      </p>
    </article>
  );
};

export default Login;
