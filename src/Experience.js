import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience-container">
      <div className="vector-row">
        <div className="vector">
          <img src="Star.png" alt="Star Icon" className="star" />
          <h3 className="vector-text">Experience</h3>
        </div>
      </div>
      <div className="flex-row">
        <h5 className="flex-end">Aligned Right</h5>

        <div className="column-container">
          <h5>Fortknox</h5>
          <span>Mar 2022 - Oct 2023</span>
        </div>
      </div>
      <hr className="divider" />
      <div className="flex-row">
        <h5 className="flex-end">Intern Designer</h5>

        <div className="column-container">
          <h5>OmniSafe</h5>
          <span>Mar 2022 - Oct 2023</span>
        </div>
      </div>
      <hr className="divider" />
      <div className="flex-row">
        <h5 className="flex-end">UI Designer</h5>

        <div className="column-container">
          <h5>Doradesign</h5>
          <span>Mar 2022 - Oct 2023</span>
        </div>
      </div>
      <hr className="divider" />
      <div className="flex-row">
        <h5 className="flex-end">Frontend Developer</h5>

        <div className="column-container">
          <h5>OpacityAuthor</h5>
          <span>Mar 2022 - Oct 2023</span>
        </div>
      </div>
      <hr className="divider" />
    </div>
  );
};

export default Experience;
