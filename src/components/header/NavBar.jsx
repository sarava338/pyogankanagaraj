import React from "react";
import { Link, Outlet } from "react-router-dom";
import Ul from "../elements/Ul";

const NavBar = () => {
  const list = ['about','login', 'profile'];

  return (
    <nav className="navbar mx-4">
      <Link className="navbar-brand" to="/">
        Yogan
      </Link>
      <Ul list={list} direction="row" />
      <Outlet />
    </nav>
  );
};

export default NavBar;
