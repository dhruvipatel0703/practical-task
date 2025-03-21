import Accordian from "../Accordian";
import tokens from "../../json/colors";
import { useState, useEffect } from "react";

function Features() {
  // State to track if the viewport is mobile-sized
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // Function to update the state on window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Container background styling
  const containerStyle = {
    backgroundColor: tokens.colors.tan.lighter,
  };

  // Button styling for the accordion
  const btnColor = {
    backgroundColor: tokens.colors.tan.lighter,
    borderBottomWidth: "thin",
    borderBottom: "1px solid",
    borderBottomColor: tokens.colors.neutral[40],
    borderRadius: "none",
    ...tokens.type.body.medium,
  };

  // Styling for the accordion body
  const accBody = {
    backgroundColor: tokens.colors.tan.lighter,
  };

  // Styling for the accordion container
  const accStyle = {
    border: "none",
  };

  // Description text styling, different for mobile and desktop
  const desc = isMobile
    ? { ...tokens.type.heading.default }
    : { ...tokens.type.heading.medium };

  return (
    <>
      {/* Section container with background style */}
      <section style={containerStyle} className="feature-sec">
        <div className="container">
          {/* Section heading */}
          <p className="desc" style={desc}>
            Featured options
          </p>
          {/* Accordion component with styles passed as props */}
          <Accordian btnColor={btnColor} accBody={accBody} accStyle={accStyle} />
        </div>
      </section>
    </>
  );
}

export default Features;
