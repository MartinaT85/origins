import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Seo from "../components/Seo";

const Layout = ({
  children,
  title = false,
  description = false,
  path = false,
}) => {
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  // const metaTitle = data?.site?.siteMetadata ?? {};

  return (
    <>
      <Seo title={title} description={description} path={path} />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projekty</Link>
        <Link to="/contact">Kontakt</Link>
        <main>{children}</main>
      </nav>
    </>
  );
};

export default Layout;
