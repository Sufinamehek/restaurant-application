// src/components/Reservation.jsx
import React from "react";
import "../styles/reservation.css";
import table from "../assets/table.png";
import { useNavigate } from "react-router-dom";

function Reservation() {
  const navigate = useNavigate();
  return (
    <section className="reservation">
      <div className="reservation-container">

        {/* LEFT CONTENT */}
        <div className="reservation-content">
          <h2>Reserve Your Table</h2>
          <p>
            Experience fine dining with elegance. Book your table now and enjoy
            unforgettable moments at Zaika Atelier with authentic flavors and
            warm hospitality.
          </p>

          <button onClick={() => navigate("/reservation")}>
            Book Now
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="reservation-image">
          <img src={table} alt="Dining Table" />
        </div>

      </div>
    </section>
  );
}

export default Reservation;