import * as React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import { graphql } from "gatsby";

import { motion } from "framer-motion";
import { pageAnimation } from "../components/PageAnimation.js";

const IndexPage = ({ data }) => {
  const {
    allSanityProject: { nodes: projects },
  } = data;
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Hero />
      <Projects title="Čo Vám ponúkame" projects={projects} />
    </motion.div>
  );
};

export const query = graphql`
  {
    allSanityProject {
      nodes {
        description {
          children {
            text
          }
        }
        image {
          asset {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
        slug {
          current
        }
        title
        id
      }
    }
  }
`;

export default IndexPage;
