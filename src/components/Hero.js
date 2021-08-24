import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

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
          <div className="hero-text">
            <h1>
              Coloring book hot chicken <span>paleo</span> cloud
            </h1>
            <p>
              Succulents locavore af paleo umami whatever authentic activated
              charcoal organic.
            </p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;
