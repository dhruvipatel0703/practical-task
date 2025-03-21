import React from "react";
import FishingImg from "../../assets/images/fishing_full.jpg";
import tokens from "../../json/colors";
import Button from "../button";

const Hero = () => {
  // Define styles for the heading using predefined tokens
  const headingStyle = {
    ...tokens.type.heading.large,
  };

  // Define styles for the description text
  const descStyle = {
    ...tokens.type.body.medium,
  };

  // Define button styles using token colors and typography
  const buttonStyle = {
    background: tokens.colors.brown.default,
    ...tokens.type.body.default,
    color: tokens.colors.neutral[5],
  };

  return (
    <section className="hero-section">
      <div className="container">
        <div className="row gy-4">
          {/* Left Content Section */}
          <div className="col-md-7 content">
            <p style={headingStyle} className="heading">
              Central Texas <br />
              Fly Fishing
            </p>
            <p style={descStyle} className="desc">
              At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis
              cursus vestibulum, facilisi ac, sed faucibus.
            </p>
            <Button
              props={{
                style: buttonStyle,
              }}
              className="large-default-primary"
            >
              Get started
            </Button>
          </div>
          {/* Right Image Section */}
          <div className="col-md-5 hero-img">
            <img src={FishingImg} alt="Fishing in Central Texas" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
