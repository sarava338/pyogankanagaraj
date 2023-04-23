import React from "react";
import { Link } from "react-router-dom";

const Ul = ({ list }) => {
  return (
    <ul className="navbar-nav flex-row align-items-center">
      {list.map((l) => {
        return (
          <li className="nav-item px-2">
            <Link className="nav-link" to={l}>{l}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Ul;
