import * as React from "react";
import { Link } from "gatsby";
import { VscClose } from "react-icons/vsc";
import "../styles/global.css";

const SideBar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={isOpen ? "sidebar show-sidebar" : "sidebar"}>
      <button className="close-btn" type="button" onClick={toggleSidebar}>
        <VscClose />
      </button>
      <div className="side-container">
        <ul className={isOpen ? "sidebar-links" : null}>
          <li>
            <Link to="/" onClick={toggleSidebar}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={toggleSidebar}>
              Projekty
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleSidebar}>
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
