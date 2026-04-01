import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ for navigation
import "../styles/about.css";
import ss3 from "../assets/ss3.jpg";
import ss2 from "../assets/ss2.jpg";

function About() {
  const navigate = useNavigate(); // ✅ hook to navigate

  return (
    <section className="about">
      <div className="about-container">

        {/* Left Image */}
        <div className="about-img">
          <img src={ss2} alt="Restaurant" />
        </div>

        {/* Center Content */}
        <div className="about-content">
          <h4 className="sub-title">Zaika Atelier</h4>
          <h1>The origin of Indian flavors</h1>

          <p className="tagline">— Welcome to Zaika Atelier —</p>

          <p className="description">
            At Zaika Atelier, we bring you authentic Indian cuisine inspired by
            traditional recipes and rich cultural heritage. Our goal is to
            create a dining experience that feels warm, elegant, and truly
            unforgettable.
          </p>

          {/* Learn more button navigates to AboutPage */}
          <button 
            className="about-btn"
            onClick={() => navigate("/about")}
          >
            Learn more
          </button>
        </div>

        {/* Right Image */}
        <div className="about-img">
          <img src={ss3} alt="Restaurant" />
        </div>

      </div>
    </section>
  );
}

export default About;