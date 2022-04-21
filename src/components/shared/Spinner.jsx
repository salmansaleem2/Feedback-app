import React from "react";
import Spiner from "../assets/spinner.gif";

const Spinner = () => {
  return (
    <img
      src={Spiner}
      alt="Loading..."
      style={{ width: "100px", margin: "auto", display: "block" }}
    />
  );
};

export default Spinner;
