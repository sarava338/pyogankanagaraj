import React, { useContext } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <nav>
      <Link to="/">Yogan</Link>
      <ul>
        <li>
          <Link to="login">Login</Link>
        </li>
        <li>profile</li>
      </ul>
    </nav>
  );
};

export default NavBar;
