// src/components/Experience.jsx
import React from "react";
import "../styles/experience.css";
import s1 from "../assets/s1.jpg";

function Experience() {
  return (
    <section className="experience">

      {/* Sticky Image */}
      <div
        className="sticky-bg"
        style={{ backgroundImage: `url(${s1})` }}
      ></div>

      {/* Scroll Content */}
      <div className="content">
        <h2>A warm and distinctive atmosphere</h2>

        <p>
          Enjoy the most delicious Indian cuisine in a distinctive atmosphere
          that reflects the heritage and beautiful life of the past, with
          seating inspired by rich cultural traditions and timeless elegance.
        </p>

        <p>
          Every detail at Zaika Atelier is designed to give you a luxurious
          dining experience — from handcrafted interiors to authentic flavors
          that tell a story of India’s culinary legacy.
        </p>

        <p>
          Step into a space where tradition meets modern comfort, creating
          unforgettable moments with every visit.
        </p>
      </div>

    </section>
  );
}

export default Experience;