import * as React from "react";
import { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Seo from "../components/Seo";
import Navbar from "../components/Navbar";
import "../styles/global.css";
import SideBar from "./Sidebar";
import Footer from "./Footer";

const Layout = ({
  children,
  title = false,
  description = false,
  path = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

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
      <div className="sticky-footer">
        <Navbar toggleSidebar={toggleSidebar} />
        <SideBar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
