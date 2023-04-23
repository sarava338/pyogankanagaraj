import React from "react";
import { Link, Outlet } from "react-router-dom";
import Ul from "../elements/Ul";

const NavBar = () => {
  const list = ['login', 'profile'];

  return (
    <nav className="navbar mx-4">
      <Link className="navbar-brand" to="/">
        Yogan
      </Link>
      <Ul list={list} />
      <Outlet />
    </nav>
  );
};

export default NavBar;
