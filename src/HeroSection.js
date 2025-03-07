import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-heading">
          I am a
          <img src="haedingimg.jpeg" alt="Profile" className="profile-img" />
          FREELANCE DESIGNER
          <img src="headingimag2.png" alt="Profile" className="profile-img" />
          From San Francisco
        </h1>
        <section className="portfolio-section">
          <div className="vector-box">
            <div className="vector first-vector">
              <img src="Vector.png" alt="Profile"></img>
            </div>
            <span className="vector-text">doradesign</span>
          </div>

          <div className="vector-box">
            <div className="vector second-vector">
              <img src="Vector 2.png" alt="Profile"></img>
            </div>
            <span className="vector-text second-text">wave</span>
          </div>
          <div className="vector-box">
            <img src="Frame.png" alt="Profile"></img>
          </div>

          <p className="portfolio-description">
            Welcome to my portfolio. Here, artistry meets functionality. Dive
            into a curated showcase of distinctive branding and web designs,
            each crafted to captivate and inspire.
          </p>
        </section>
      </div>
    </section>
  );
};

export default HeroSection;
