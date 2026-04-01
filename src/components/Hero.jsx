// src/components/Hero.jsx
import React from "react";
import "../styles/hero.css";
import s5 from "../assets/s5.jpg"; 
import s4 from "../assets/s4.jpg";
import s6 from "../assets/s6.jpg";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const slides = [
    { id: 1, image: s5 },
    { id: 2, image: s4 },
    { id: 3, image: s6 },
  ];

  return (
    <div
      id="heroCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000" // 3 seconds
    >
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={slide.image}
              className="d-block w-100 carousel-img"
              alt={`Slide ${slide.id}`}
            />

            {/* Overlay Text */}
            <div className="hero-overlay">
              <h1>Authentic Indian Flavors</h1>
              <p>
                Savor India’s culinary heritage, crafted with care and
                presented with modern sophistication at Zaika Atelier
              </p>
              <span className="since-text">Since 1915</span>
              <button
                className="cta-btn"
                onClick={() => navigate("/reservation")}
              >
                Book a Table
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Hero;