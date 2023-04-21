import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { themeContext } from "../../contexts/ThemeContext";

const NavBar = () => {
  const { theme, setTheme } = useContext(themeContext);

  return (
    <nav className="nav-bar">
      <Link to="/">Yogan</Link>
      <ul>
        <li>
          <button
            id="theme-button"
            onClick={(e) => {
              e.preventDefault();
              setTheme(!theme);
            }}
          >
            &lt;&gt;
          </button>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="login">Login</Link>
        </li>
        <li>profile</li>
      </ul>
    </nav>
  );
};

export default NavBar;
