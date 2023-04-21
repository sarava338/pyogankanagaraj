import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="login">
      <form id="login-form">
        <div>
          <label htmlFor="login-email">Email : </label>
          <input type="email" name="email" id="login-email" />
        </div>
        <div>
          <label htmlFor="login-password">Password : </label>
          <input type="password" name="password" id="input-password" />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Need an account <Link to="/signup">signup</Link> here
      </p>
    </section>
  );
};

export default Login;
