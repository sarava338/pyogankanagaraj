import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../firebase/auth";
import Status from "../elements/Status";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import Button from "../elements/Button";
import { useAuth } from "../../contexts/AuthContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState({});
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password)
      .then((res) => {
        console.log(res.user.email);
        setCurrentUser(res.user);
        navigate('/');
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
    <form
      onSubmit={handleSubmit}
      className="d-flex flex-column align-items-center"
    >
      <EmailInput email={email} setEmail={setEmail} />
      <PasswordInput
        password={password}
        setPassword={setPassword}
        placeholder="Enter password"
        label="Password :"
      />
      <Status status={status} />
      <Button type="submit" value="login" className='btn btn-primary' />
      <p>
        Need an account <Link to="/signup">signup</Link> here
      </p>
    </form>
  );
};

export default LoginForm;
