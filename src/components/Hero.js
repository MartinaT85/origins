import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import { titleAnimation, fade } from "../components/PageAnimation.js";
import { Link } from "gatsby";

const Hero = () => {
  return (
    <>
      <header className="hero">
        <StaticImage
          src="../images/landing-img.jpg"
          alt="kitchen"
          className="hero-img"
          placeholder="tracedSVG"
          loading="eager"
          layout="fullWidth"
        />
        <div className="hero-container">
          <motion.div className="hero-text">
            <div className="hide">
              <motion.h1 variants={titleAnimation}>
                Montáž sadrokártónu
              </motion.h1>
            </div>
            <div className="hide">
              <motion.h1 variants={titleAnimation}>a sádrové omietky</motion.h1>
            </div>
            <div className="hide">
              <motion.h1 variants={titleAnimation}>
                v <span> Žiline</span> a okolí
              </motion.h1>
            </div>
            <Link to="/contact">
              <motion.button variants={fade} type="button" className="btn">
                Kontaktujte nás
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </header>
    </>
  );
};

export default Hero;
