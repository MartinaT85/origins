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
              Montáž sadrokártónu a sádrové omietky v <span>Žiline</span> a
              okolí
            </h1>
          </div>
          <button type="button" className="btn">
            Kontaktujte nas
          </button>
        </div>
      </header>
    </>
  );
};

export default Hero;
