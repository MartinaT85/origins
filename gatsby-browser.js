import * as React from "react";
import Layout from "./src/components/Layout.js";
import { AnimatePresence } from "framer-motion";

export const wrapRootElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
