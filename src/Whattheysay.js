import React from "react";

import "./Whattheysay.css";

const Whattheysay = () => {
  return (
    <div className="whattheysay-container">
      <div className="vector-row">
        <div className="vector">
          <img src="Star.png" alt="Star Icon" className="star" />
          <h3 className="vector-text">What they say</h3>
        </div>
      </div>

      <div className="profile-container">
        <div className="profile-column">
          <img src="whattheysay.png" alt="Profile" className="profile-pic" />
          <div className="profile-info">
            <h3 className="name">Floyd Miles</h3>
            <span className="name-description">eBay</span>
          </div>
        </div>
        <div className="info-column">
          <div className="vectors">
            <img src="wnfo.png" className="vector1"></img>
            <img src="wnfo.png" className="vector1"></img>
          </div>
          <p className="description">
            Synergy's resume builder is fantastic. It helped me create a
            professional resume that stood out to employers. Synergy's resume
            builder is fantastic. It helped me create a professional resume that
            stood out to employers.
          </p>
          <div className="arrow-buttons">
            <button className="arrow left-arrow">&#8592;</button>
            <button className="arrow right-arrow">&#8594;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whattheysay;
