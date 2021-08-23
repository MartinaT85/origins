import * as React from "react";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
      <h1>Home Page</h1>
    </>
  );
};

export default IndexPage;
