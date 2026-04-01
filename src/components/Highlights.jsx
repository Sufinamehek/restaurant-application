// src/components/Highlights.jsx
import React from "react";
import "../styles/highlights.css";
// import img1 from "../assets/img1.jpg";
// import img2 from "../assets/img2.jpg";
import image1 from "../assets/image1.png";
import image from "../assets/image.png";
import image3 from "../assets/image3.jpg";

function Highlights() {
  return (
    <section className="highlights">
      <div className="highlight-container">

        {/* Card 1 */}
        <div className="card hover-card">
          <img src={image1} alt="" />
          <div className="overlay">
            <p>Enjoyable atmosphere, we create the authentic mood</p>
          </div>
        </div>

        {/* Card 2 (Always visible text) */}
        <div className="card static-card">
          <img src={image3} alt="" />
          <div className="overlay show">
            <p>Open for You Every Weekend – Join Us!</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card hover-card">
          <img src={image} alt="" />
          <div className="overlay">
            
           <p >Experience Pizza Like Never Before</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Highlights;