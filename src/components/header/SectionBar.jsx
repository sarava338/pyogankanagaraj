import React from "react";
import { Outlet } from "react-router-dom";
import Ul from "../elements/Ul";

const SectionBar = () => {
  const list = ["kathai", "kavithai", "katturai"];

  return (
    <nav className="navbar justify-content-center py-0">
      <Ul list={list} />
      <Outlet />
    </nav>
  );
};

export default SectionBar;
