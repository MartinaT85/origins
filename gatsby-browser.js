import * as React from "react";
import Layout from "./src/components/Layout.js";
import { AnimatePresence } from "framer-motion";

export const wrapPageElement = ({ element, props }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Layout {...props}>{element}</Layout>
    </AnimatePresence>
  );
};
