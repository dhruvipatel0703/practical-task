import React from "react";

// Button component that accepts children, props, and additional attributes
const Button = ({ children, props, ...rest }) => {
  return (
    <>
      {/* Render a button with styles passed via props */}
      <button style={props?.style} type="button" className="btn" {...rest}>
        {/* If children exist, render them; otherwise, show default text */}
        {children ?? "default button"}
      </button>
    </>
  );
};

export default Button;
