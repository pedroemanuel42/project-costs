import React from "react";
import { Link } from "react-router-dom";
import "./link-button.css";

export default function LinkButton({ to, text }) {
  return (
    <Link className="btn" to={to}>
      {text}
    </Link>
  );
}
