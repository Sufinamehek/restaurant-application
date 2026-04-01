import React, { useState } from "react";
import "../styles/contact.css";

import { FaInstagram, FaEnvelope, FaMapMarkerAlt, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import pict1 from "../assets/pict1.jpg";
import table from "../assets/table.png";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AboutPage() {
  const navigate = useNavigate();
  const [formStatus, setFormStatus] = useState(""); // success message

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/mojploew", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setFormStatus("Thank you! Your message has been sent.");
      e.target.reset();
    } else {
      setFormStatus("Oops! There was a problem.");
    }
  };

  return (
    <>
      <Navbar />

      <section className="about-page">
        {/* HERO */}
        <div
          className="about-heroo"
          style={{ backgroundImage: `url(${pict1})` }}
        >
          <div className="overlay-h">
            <h1>Contact Us</h1>
          </div>
        </div>

        {/* CONTACT + FORM */}
        <div className="about-block contact-block">
          <h2>Send Us a Message</h2>
          <p className="divider">We’d Love to Hear From You</p>

          <div className="about-section">
            {/* LEFT → CONTACT INFO */}
            <div className="contact-content">
              <p className="contact-intro">
                We’re here to assist you with reservations, inquiries, or any special requests.
                Reach out to us and experience the warmth of Zaika Atelier.
              </p>

              <div className="contact-item">
                <FaInstagram />
                <span><strong>Instagram :</strong> @zaikaatelier</span>
              </div>

              <div className="contact-item">
                <FaEnvelope />
                <span><strong>Email :</strong> contact@zaikaatelier.com</span>
              </div>

              <div className="contact-item">
                <FaTwitter />
                <span><strong>Twitter :</strong> @zaikaatelier</span>
              </div>

              <div className="contact-item">
                <FaMapMarkerAlt />
                <span><strong>Location :</strong> Mumbai, India</span>
              </div>
            </div>

            {/* RIGHT → FORM */}
            <div className="contact-form-box">
              <form className="contact-form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
                <button type="submit">Send Message</button>
                {formStatus && <div className="thank-you">{formStatus}</div>}
              </form>
            </div>
          </div>
        </div>

        {/* RESERVATION */}
        <div className="about-block">
          <h2>Reservation</h2>
          <p className="divider">Zaika Atelier</p>

          <div className="about-section reverse">
            <div className="about-text">
              <h3>Book Your Table</h3>
              <p>
                Experience the perfect blend of ambiance and flavors at Zaika Atelier.
                Reserve your table now for an unforgettable dining experience.
              </p>

              <button onClick={() => navigate("/reservation")}>
                Book Now
              </button>
            </div>

            <div className="about-img">
              <img src={table} alt="reservation" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AboutPage;