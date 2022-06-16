import React from "react";
import "./submit.css";

export default function SubmitButton({ text }) {
  return (
    <div>
      <button className="btn">{text}</button>
    </div>
  );
}
