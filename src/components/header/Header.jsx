import React from "react";
import NavBar from "./NavBar";
import SectionBar from "./SectionBar";
import "./header.css";

const Header = () => {
  return (
    <header>
      <NavBar />
      <hr />
      <SectionBar />
      <hr />
    </header>
  );
};

export default Header;
