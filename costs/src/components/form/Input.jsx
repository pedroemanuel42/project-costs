import React from "react";
import "./input.css";

export default function Input({
  text,
  name,
  type,
  placeholder,
  handleOnChange,
  value,
}) {
  return (
    <div className="form-control">
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
      />
    </div>
  );
}
