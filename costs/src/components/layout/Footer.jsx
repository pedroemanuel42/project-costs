import React from "react";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="social-list">
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      <p className="copy-right">
        <span>Costs</span> &copy; 2022
      </p>
    </footer>
  );
}
