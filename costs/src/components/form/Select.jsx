import React from "react";
import "./select.css";

export default function Select({ text, name, options, handleOnChange, value }) {
  return (
    <div className="form-control">
      <label htmlFor={name}>{text}</label>
      <select
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value || ""}
      >
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
