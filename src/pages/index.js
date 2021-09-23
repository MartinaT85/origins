import * as React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";

import { motion } from "framer-motion";
import { pageAnimation } from "../components/PageAnimation.js";

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Hero />
      {/* <Services /> */}
      <Projects />
    </motion.div>
  );
};

export default IndexPage;
