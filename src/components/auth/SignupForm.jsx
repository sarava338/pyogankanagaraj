import React, { useState } from "react";
import Status from "../elements/Status";
import { signup } from "../../firebase/auth";
import EmailInput from "../elements/EmailInput";
import PasswordInput from "../elements/PasswordInput";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({});
    if (password !== confirmPassword) {
      setStatus({ messege: "Passwords do not match", code: false });
    } else {
      signup(email, password)
        .then((res) => {
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setStatus({
            messege: "User was created. You can login now...",
            code: true,
          });
        })
        .catch((err) => {
          setStatus({
            messege: "User not created. Kindly check the error in console",
            code: false,
          });
          console.log(err);
        });
    }
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
      <PasswordInput
        password={confirmPassword}
        setPassword={setConfirmPassword}
        placeholder="Confirm password"
        label="Confirm Password :"
      />
      {status && <Status status={status} />}
      <button type="submit">signup</button>
    </form>
  );
};

export default SignupForm;
