import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="experience-container">
      <div className="vector-row">
        <div className="vector">
          <img src="Star.png" alt="Star Icon" className="star" />
          <h3 className="vector-text">Blog</h3>
        </div>
      </div>
      <div className="rows-container">
        <div className="first-row">
          <div className="first-column">
            <img src="card1.png" alt="Card Image" />
          </div>

          <div className="second-column">
            <span> Nov 9, 2023</span>
            <h3>How UX works in web</h3>
            <div className="card-btn">
              <button className="hire-me-button">UI</button>
              <button className="hire-me-button">UX</button>
            </div>
          </div>

          <div className="third-column">
            <button className="btn-read">Read</button>
          </div>
        </div>

        <div className="first-row">
          <div className="first-column">
            <img src="card2.png" alt="Card Image" />
          </div>
          <div className="second-column">
            <span>Aug 18, 2023</span>
            <h3>Case study - Analysis Application.</h3>
            <div className="card-btn">
              <button className="hire-me-button">DESIGN</button>
              <button className="hire-me-button">PRINT</button>
            </div>
          </div>
          <div className="third-column">
            <button className="btn-read">Read</button>
          </div>
        </div>

        <div className="first-row">
          <div className="first-column">
            <img src="card3.png" alt="Card Image" />
          </div>
          <div className="second-column">
            <span>Feb 16, 2023</span>
            <h3>3 ways to develop your skill</h3>
            <div className="card-btn">
              <button className="hire-me-button">FIGMA</button>
              <button className="hire-me-button">WEB</button>
            </div>
          </div>

          <div className="third-column">
            <button className="btn-read">Read</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
