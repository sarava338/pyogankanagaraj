import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../firebase/auth";
import Status from "../elements/Status";
import EmailInput from "../elements/EmailInput";
import PasswordInput from "../elements/PasswordInput";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({});
    login(email, password)
      .then((res) => {
        navigate(-1);
      })
      .catch((err) => {
        setStatus({
          messege: "Could not login. Kindly check the error in console",
          code: false,
        });
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <EmailInput email={email} setEmail={setEmail} />
      <PasswordInput
        password={password}
        setPassword={setPassword}
        placeholder="Enter password"
        label="Password :"
      />
      {status && <Status status={status} />}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
