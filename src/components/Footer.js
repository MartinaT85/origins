import * as React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <h4>
        copyright &copy; {new Date().getFullYear()} <span>O</span>
        rigins all rights reserved
      </h4>
      <h4>Made with ☕ by MT Web Development & Design</h4>
    </footer>
  );
};

export default Footer;
