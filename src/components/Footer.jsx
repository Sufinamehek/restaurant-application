// src/components/Footer.jsx
import React from "react";
import "../styles/footer.css";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>Zaika Atelier</h2>
          <p>
            Experience the art of Indian flavors with elegance and tradition.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h4>Explore</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/reservation">Reservations</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Mumbai, India</p>
          <p><a href="tel:+919876543210">+91 98765 43210</a></p>
          <p><a href="mailto:zaika@atelier.com">zaika@atelier.com</a></p>
        </div>

        {/* Social */}
        <div className="footer-social">
          <h4>Follow</h4>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 Zaika Atelier. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;