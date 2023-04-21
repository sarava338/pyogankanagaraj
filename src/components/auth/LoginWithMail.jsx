import React from "react";

const LoginWithMail = () => {
  return (
    <section>
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
    </section>
  );
};

export default LoginWithMail;
