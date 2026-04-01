import React from "react";
import { useNavigate } from "react-router-dom"; // for navigation
import "../styles/menu.css";
import M1 from "../assets/M1.jpg";
import M2 from "../assets/M2.jpg";
import M3 from "../assets/M3.jpg";
import M4 from "../assets/M4.jpg";

const menuData = [
  { id: 1, name: "Turkish Tea", price: 99, image: M1 },
  { id: 2, name: "Pistachio Dessert", price: 249, image: M3 },
  { id: 3, name: "Chicken Salad", price: 299, image: M2 },
  { id: 4, name: "Chicken Roll", price: 199, image: M4 },
];

function Menu() {
  const navigate = useNavigate();

  const handleOrderNow = (item) => {
    // Redirect to the MenuPage
    navigate("/menu");
  };

  return (
    <section className="menu">
      <h2>Our Menu</h2>

      <div className="menu-grid">
        {menuData.map((item) => (
          <div className="menu-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>
            <p>₹ {item.price}</p>

            <button className="order-btn" onClick={() => handleOrderNow(item)}>
              Order Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;