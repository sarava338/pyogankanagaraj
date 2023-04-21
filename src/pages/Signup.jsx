import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <section className="signup">
      <form className="signup-form">
        <div>
          <label htmlFor="firstname">First Name : </label>
          <input type="text" name="firstname" id="firstname" />
        </div>
        <div>
          <label htmlFor="lastname">Last Name : </label>
          <input type="text" name="lastname" id="lastname" />
        </div>
        <div>
          <label htmlFor="signup-email">Email : </label>
          <input type="text" name="email" id="signup-email" />
        </div>
        <div>
          <label htmlFor="signup-password">Password : </label>
          <input type="password" name="password" id="signup-password" />
        </div>
        <button type="submit">Signup</button>
      </form>
      <p>
        Already an user <Link to="/login">login</Link> here
      </p>
    </section>
  );
};

export default Signup;
