import React, { useState } from "react";
import "./auth.css";
import Status from "../elements/Status";
import { signup } from "../../firebase/auth";
import EmailInput from "../elements/EmailInput";
import PasswordInput from "../elements/PasswordInput";

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
      <EmailInput email={email} setEmail={setEmail} />
      <PasswordInput
        password={password}
        setPassword={setPassword}
        placeholder="Enter password"
        label="Password :"
      />
      <PasswordInput
        password={confirmPassword}
        setPassword={setConfirmPassword}
        placeholder="Confirm password"
        label="Confirm Password :"
      />
      {error && <Status status={error} error />}
      {success && <Status status={success} />}
      <button type="submit">signup</button>
    </form>
  );
};

export default SignupForm;
