import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer-div">
      <p className="footer-text">
        © {new Date().getFullYear()} Mahmoud Elhadry · Software Engineer
      </p>
    </footer>
  );
}
