import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../firebase/auth";
import Status from "../elements/Status";
import EmailInput from "../elements/EmailInput";
import PasswordInput from "../elements/PasswordInput";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    login(email, password)
      .then((res) => {
        navigate(-1);
      })
      .catch((err) => {
        setError("Could not login. Kindly check the error in console");
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <EmailInput email={email} setEmail={setEmail} />
      <PasswordInput
        password={password}
        setPassword={setPassword}
        placeholder="Enter password"
        label="Password :"
      />
      {error && <Status status={error} error />}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
