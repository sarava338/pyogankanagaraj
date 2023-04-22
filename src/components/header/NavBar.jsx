import React, { useContext } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <nav className="nav-bar">
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
