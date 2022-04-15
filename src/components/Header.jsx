import React from "react";
import PropTypes from "prop-types";

const Header = ({ text, bgColor, textColor }) => {
  const HeaderColors = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={HeaderColors}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
};

Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

Header.prototype = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.textColor,
};
export default Header;