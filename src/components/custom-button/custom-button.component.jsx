import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ label, type, cancel, ...otherProps }) => (
  <button type={type} className={`custom-button ${cancel ? "cancel" : ""} `}>
    {label}
  </button>
);
export default CustomButton;
