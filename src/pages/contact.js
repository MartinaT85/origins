import * as React from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import { pageAnimation } from "../components/PageAnimation.js";

const Contact = () => {
  return (
    <motion.section
      className="contact-page"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <article className="contact-form">
        <h3>Get in touch</h3>
        <form action="https://formspree.io/f/meqvvgqa" method="POST">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="meno"
              className="form-control"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              className="form-control"
              required
            />
            <textarea
              name="message"
              placeholder="Ako Vám môžeme pomôcť?"
              className="form-control"
              rows="5"
            ></textarea>
            <button type="submit" className="submit-btn btn">
              Odoslať
            </button>
          </div>
        </form>
      </article>
    </motion.section>
  );
};

export default Contact;
