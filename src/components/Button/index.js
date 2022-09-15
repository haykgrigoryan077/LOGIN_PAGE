import React from "react";
import "./style.css";

const Button = ({ onClick, disabled, text }) => (
  <div className="buttonWrapper">
    <button className="button" onClick={onClick} disabled={disabled}>
      {text}
    </button>
  </div>
);

export default Button;
