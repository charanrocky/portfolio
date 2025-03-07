import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Expertise from "./Expertise";
import Works from "./Works";
import Experience from "./Experience";
import Blog from "./Blog";
import Whattheysay from "./Whattheysay";
import FAQ from "./FAQ";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <HeroSection />
      </div>
      <div>
        <Expertise />
      </div>
      <div>
        <Works />
      </div>
      <div>
        <Experience />
      </div>
      <div>
        <Blog />
      </div>
      <div>
        <Whattheysay />
      </div>
      <div>
        <FAQ />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
