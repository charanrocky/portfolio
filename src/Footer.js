import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer-content">
        <h1 className="footer-heading">LET’S TALK!</h1>
        <p> rehanurraihan@gmail.com</p>
      </div>
      <div className="footer">
        <p>© Rehan Raihan - 2023</p>
        <ul className="footer-menu">
          <li className="footer-item">Home</li>
          <li className="footer-item">Services</li>
          <li className="footer-item">Portfolio</li>
          <li className="footer-item">Contact</li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
