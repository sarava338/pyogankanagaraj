import React, { useState } from "react";

const SignupWithMail = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const signup = () => {}

  return (
    <section>
      <form className="signup-form">
        <div>
          <label htmlFor="signup-email">Email : </label>
          <input
            type="text"
            name="email"
            id="signup-email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="signup-password">Password : </label>
          <input
            type="password"
            name="password"
            id="signup-password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="signup-confirm-password">Confirm Password : </label>
          <input
            type="password"
            name="password"
            id="signup-confirm-password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit" onClick={signup}>Signup</button>
      </form>
    </section>
  );
};

export default SignupWithMail;
