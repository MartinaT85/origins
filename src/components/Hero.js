import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

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
              <motion.h1>Montáž sadrokártónu</motion.h1>
            </div>
            <div className="hide">
              <motion.h1>a sádrové omietky v </motion.h1>
            </div>
            <div className="hide">
              <motion.h1>
                <span>Žiline</span> a okolí
              </motion.h1>
            </div>
          </motion.div>
          <button type="button" className="btn">
            Kontaktujte nas
          </button>
        </div>
      </header>
    </>
  );
};

export default Hero;
