import React from "react";
import "./Expertise.css";

const Expertise = () => {
  return (
    <div className="expertise-container">
      <div className="vector-row">
        <div className="vector">
          <img src="Star.png" alt="Star Icon" className="star" />
          <h3 className="vector-text">Expertise</h3>
        </div>
      </div>

      <section className="services-section">
        <ul className="services-list">
          <li className="service-item">
            <h5>Branding</h5>
            <p>
              I create efficient, adaptable, and engaging websites. No
              predefined patterns. No sluggish, complex code. Webflow forms the
              foundation of my web development approach. I employ it to provide
              safe, top-notch bespoke websites.
            </p>
          </li>
          <li className="service-item">
            <h5>UI Design</h5>
            <p>
              I create efficient, adaptable, and engaging websites. No
              predefined patterns. No sluggish, complex code. Webflow forms the
              foundation of my web development approach. I employ it to provide
              safe, top-notch bespoke websites.
            </p>
          </li>
          <li className="service-item">
            <h5>UX Design</h5>
            <p>
              I comprehend and resolve digital product issues using a
              user-focused methodology. Investigation. compassion, and visual
              conveyance are a few techniques I apply to captivate and involve
              your users while fulfilling your business requirements
            </p>
          </li>
          <li className="service-item">
            <h5>Development</h5>
            <p>
              I create user-friendly, adaptive, engaging websites. No
              cookie-cutters. No cumbersome. complex coding. Webflow forms the
              foundation of my web development approach, I employ it to produce
              safe, top-notch personalized websites.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Expertise;
