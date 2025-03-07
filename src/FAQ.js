import React from "react";
import "./FAQ.css";

const FAQ = () => {
  return (
    <div className="faq-container">
      <div className="vector-row">
        <div className="vector">
          <img src="Star.png" alt="Star Icon" className="star" />
          <h3 className="vector-text">Frequently asked questions</h3>
        </div>
      </div>

      <div className="faq-content">
        <h4>What is your design process?</h4>
        <p>
          My design process typically involves four key phases: research,
          design, prototype, and test. In the research phase, I gather insights
          about the user and their needs. In the design phase, I create
          wireframes and visual designs that meet those needs. In the prototype
          phase, I create interactive models of the design for testing. In the
          test phase, I collect feedback from users to refine the design.
        </p>
        <h4>What tools and software do you use for UX design?</h4>
        <h4>How do you measure the success of your UX designs?</h4>
      </div>
      <div className="lower-container">
        <div className="vector-row">
          <div className="vector">
            <img src="Star.png" alt="Star Icon" className="star" />
            <h3 className="lower-text">LOW</h3>
          </div>
        </div>
        <div className="vector-row">
          <div className="vector">
            <img src="Star.png" alt="Star Icon" className="star" />
            <h3 className="lower-text">FIGMA</h3>
          </div>
        </div>
        <div className="vector-row">
          <div className="vector">
            <img src="Star.png" alt="Star Icon" className="star" />
            <h3 className="lower-text">DESIGNER</h3>
          </div>
        </div>
        <div className="vector-row">
          <div className="vector">
            <img src="Star.png" alt="Star Icon" className="star" />
            <h3 className="lower-text">DEVELOPER</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
