import * as React from "react";
import { Link } from "gatsby";
import { VscMenu } from "react-icons/vsc";
import Logo from "../images/Origins(5).svg";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={Logo} alt="Origins" />
          <button type="button" onClick={toggleSidebar} className="toggle-btn">
            <VscMenu />
          </button>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projekty</Link>
          <Link to="/contact">Kontakt</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
