import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">CS601_Term</div>
        <ul className="nav-links">
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About Me</NavLink>
          </li>
          <li>
            <NavLink to="/interests" className={({ isActive }) => isActive ? 'active' : ''}>Interest</NavLink>
          </li>
          <li>
            <NavLink to="/resume" className={({ isActive }) => isActive ? 'active' : ''}>Resume</NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
          </li>
          <li>
            <NavLink to="/game" className={({ isActive }) => isActive ? 'active' : ''}>Get to Know Me Game</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
