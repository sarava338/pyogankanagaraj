import React from "react";
import { Link } from "react-router-dom";

const Ul = ({ list, direction }) => {
  return (
    <ul className={`navbar-nav flex-${direction} align-items-center`}>
      {list.map((item) => {
        return (
          <li className="nav-item px-2" key={item}>
            <Link className="nav-link" to={item}>
              {item}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Ul;
