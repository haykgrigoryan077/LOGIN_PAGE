import React from "react";
import "./style.css";

const Input = ({ type, placeholder, color, name, value, onChange }) => (
  <input
    className="input"
    type={type}
    placeholder={placeholder}
    color={color}
    name={name}
    value={value}
    onChange={onChange}
  />
);

export default Input;
