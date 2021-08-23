import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Seo from "../components/Seo.js";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const metaTitle = data?.site?.siteMetadata ?? {};

  return (
    <>
      <Seo />
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
      <h1>Home Page</h1>
    </>
  );
};

export default IndexPage;
