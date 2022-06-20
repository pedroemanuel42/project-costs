import React from "react";
import "./loading.css";
import loading from "../../img/loading.svg";

export default function Loading() {
  return (
    <div className="loader-container">
      <img src={loading} alt="Loading" className="loader"/>
    </div>
  );
}
