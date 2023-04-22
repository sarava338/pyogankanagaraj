import React, { useState } from "react";
import "./auth.css";
import Status from "../elements/Status";
import { signup } from "../../firebase/auth";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      signup(email, password)
        .then((res) => {
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setSuccess("User was created. You can login now...");
        })
        .catch((err) => {
          setError("User not created. Kindly check the error in console");
          console.log(err);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <div>
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          name="email"
          id="signup-email"
          value={email}
          placeholder="Enter email"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="password">Password : </label>
        <input
          type="password"
          name="password"
          id="signup-password"
          value={password}
          placeholder="Enter password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="confirm-password">Confirm Password : </label>
        <input
          type="password"
          name="password"
          id="signup-confirm-password"
          value={confirmPassword}
          placeholder="Confirm password"
          required
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
      </div>
      {error && <Status status={error} error />}
      {success && <Status status={success} />}
      <button type="submit">signup</button>
    </form>
  );
};

export default SignupForm;
