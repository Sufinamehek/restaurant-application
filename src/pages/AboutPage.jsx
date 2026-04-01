// src/pages/AboutPage.jsx
import React from "react";
import "../styles/aboutPage.css";

import ss3 from "../assets/ss3.jpg";
import pict1 from "../assets/pict1.jpg";
import art1 from "../assets/art1.jpg";
import ssv from "../assets/ssv.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About";

function AboutPage() {
  return (
    <>
      <Navbar />

      <section className="about-page">

        {/* HERO SECTION */}
<div
  className="about-hero"
  style={{ backgroundImage: `url(${pict1})` }}
>  <div className="overlay-hi">
    <h1>About Us</h1>
  </div>
</div>

        {/* SECTION 1 */}
       {/* SECTION 1 */}
<div className="about-block">
  <h2>Art Of Food</h2>
  <p className="divider">Where We Started</p>

  <div className="about-section">
    <div className="about-page-img">
      <img src={art1} alt="journey" />
    </div>
    <div className="about-page-text">
     <p className="vision-text">
        Our journey began with a passion for authentic flavors and
        timeless recipes...
      </p>
      <p>
        At Zaika Atelier, the art of food is not just about cooking—it is about storytelling. Our journey began with a deep love for authentic Indian flavors, inspired by age-old recipes passed down through generations. Each dish we create carries the essence of tradition, carefully crafted with a modern touch.

We believe that food is an experience that connects people, evokes memories, and celebrates culture. From the selection of the finest ingredients to the presentation of every plate, we pay attention to every detail to ensure perfection.

Zaika Atelier was born to bring together heritage and elegance, where every bite tells a story and every visit becomes a cherished memory.
      </p>
    </div>
  </div>
</div>

{/* SECTION 2 (VISION) */}
<div className="about-block">
  <h2>OUR VISION</h2>
  <p className="divider">Zaika Atelier</p>

  <div className="about-section ">
    <div className="about-page-text-left">
  <p className="vision-text">
  At Zaika Atelier, our vision is to become...
</p>
      <p>
        At Zaika Atelier, our vision is to become a symbol of timeless culinary excellence by blending rich Indian heritage with modern luxury. 
        We aspire to create an unforgettable dining experience where every detail—from flavors to ambiance—reflects elegance, culture, 
        and authenticity. Our goal is to be more than just a restaurant; we aim to be a destination where tradition meets innovation.     
    </p>
    </div>
    <div className="about-page-img-left">
      <img src={ssv} alt="vision" />
    </div>
  </div>
</div>

{/* SECTION 3 */}
<div className="about-block">
  <h2>OUR MISSION</h2>
  <p className="divider">Zaika Atelier</p>

  <div className="about-section reverse">
    <div className="about-page-text">
  <p className="vision-text">
  At Zaika Atelier, our Mission is to become...
</p>
      <p>
        Our mission is to deliver exceptional dining experiences through authentic flavors, 
        high-quality ingredients, and warm hospitality. 
        We are committed to preserving traditional recipes while presenting them with a contemporary touch. Every dish we serve is crafted with passion
         and care, ensuring that our guests not only enjoy a meal but create lasting memories.
       </p>
    </div>
    <div className="about-page-img">
      <img src={ss3} alt="vision" />
    </div>
  </div>
</div>

      </section>

      <Footer />
    </>
  );
}

export default AboutPage;