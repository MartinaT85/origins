import * as React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
import Services from "../components/Services";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Projects />
    </Layout>
  );
};

export default IndexPage;
