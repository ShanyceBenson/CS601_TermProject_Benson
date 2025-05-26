import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">CS601_Term</div>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {[
          ["Home", "/"],
          ["About Me", "/about"],
          ["Interest", "/interests"],
          ["Resume", "/resume"],
          ["Projects", "/projects"],
          ["Contact", "/contact"],
          ["Get to Know Me Game", "/game"],
        ].map(([label, path]) => (
          <li key={path}>
            <NavLink
              to={path}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
