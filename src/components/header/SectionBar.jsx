import React from "react";
import { Link, Outlet } from "react-router-dom";

const SectionBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/kathai">Kathai</Link>
        </li>
        <li>
          <Link to="/kavithai">Kavithai</Link>
        </li>
        <li>
          <Link to="/katturai">Katturai</Link>
        </li>
      </ul>
      <Outlet />
    </nav>
  );
};

export default SectionBar;
