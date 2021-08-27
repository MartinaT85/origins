import * as React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Services from "../components/Services";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Services />
    </Layout>
  );
};

export default IndexPage;
