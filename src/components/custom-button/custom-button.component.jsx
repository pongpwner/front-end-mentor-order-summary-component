import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ label, cancel, ...otherProps }) => (
  <button className={`custom-button ${cancel ? "cancel" : ""} `}>
    {label}
  </button>
);
export default CustomButton;
