import React from "react";
import "./Works.css";

const Works = () => {
  return (
    <div className="works-container">
      <div className="vector-row">
        <div className="vector">
          <img src="Star.png" alt="Star Icon" className="star" />
          <h3 className="vector-text">Works</h3>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <div className="card-content">
            <div className="card-image">
              <img src="card1.png" alt="Image 1" />
            </div>
            <div className="card-text">
              <h3>Analysis Application</h3>
              <p>
                With user-centered approach, the goals was to create an
                intuitive interface for enhanced financial intelligence.
              </p>
              <div className="card-btn">
                <button className="hire-me-button">FIGMA</button>
                <button className="hire-me-button">UX</button>
              </div>
              <button className="btn-case">View Case Study</button>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="card-image">
              <img src="card1.png" alt="Image 2" />
            </div>
            <div className="card-text">
              <h3>Fortknox Application</h3>
              <p>
                With user-centered approach, the goals was to create an
                intuitive interface for enhanced financial intelligence.
              </p>
              <div className="card-btn">
                <button className="hire-me-button">MOBILE</button>
                <button className="hire-me-button">WEB</button>
              </div>
              <button className="btn-case">View Case Study</button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="card-image">
              <img src="card1.png" alt="Image 3" />
            </div>
            <div className="card-text">
              <h3>Zenocide Application</h3>
              <p>
                With user-centered approach, the goals was to create an
                intuitive interface for enhanced financial intelligence.
              </p>
              <div className="card-btn">
                <button className="hire-me-button">APP</button>
                <button className="hire-me-button">WEB</button>
              </div>
              <button className="btn-case">View Case Study</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
