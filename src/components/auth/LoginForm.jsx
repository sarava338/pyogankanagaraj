import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../firebase/auth";
import Status from "../elements/Status";

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
      <div>
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          name="email"
          id="login-email"
          placeholder="Enter email"
          autoComplete="off"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password : </label>
        <input
          type="password"
          name="password"
          id="login-password"
          placeholder="Enter password"
          autoComplete="off"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
      </div>
      {error && <Status status={error} error />}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
