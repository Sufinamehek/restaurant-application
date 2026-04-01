// src/pages/ReservationPage.jsx
import React, { useState } from "react";
import "../styles/reservationPage.css";
import table from "../assets/table.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ReservationPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "1",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <section className="reservation-page">
        <h2>Reserve Your Table</h2>

        <div className="reservation-wrapper">

          {/* FORM connected to Formspree */}
          <form
            className="reservation-form"
            action="https://formspree.io/f/mojploew"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
            />

            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
            />

            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              required
            />

            <select
              name="guests"
              value={form.guests}
              onChange={handleChange}
              required
            >
              {[1,2,3,4,5,6,7,8].map((g) => (
                <option key={g} value={g}>
                  {g} Guest{g > 1 ? "s" : ""}
                </option>
              ))}
            </select>

            <textarea
              name="message"
              placeholder="Special Request (optional)"
              value={form.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit">Book Now</button>
          </form>

          {/* IMAGE */}
          <div className="reservation-img">
            <img src={table} alt="Dining Table" />
          </div>

        </div>
      </section>
      <Footer />
    </>
  );
}

export default ReservationPage;