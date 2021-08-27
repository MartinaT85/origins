import * as React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <h4>
          copyright &copy; {new Date().getFullYear()} <span>O</span>
          rigins all rights reserved
        </h4>
        <h4>Made with ☕ by MT Web Development & Design</h4>
      </div>
    </footer>
  );
};

export default Footer;
