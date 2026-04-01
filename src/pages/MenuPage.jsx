import { useState } from "react";
import MenuList from "../components/MenuList";
import "../styles/menuPage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MenuPage() {
  const [type, setType] = useState("veg");
  const [category, setCategory] = useState("starters");
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilter, setActiveFilter] = useState("none");

  return (
    <>
      <Navbar />

      <div className="menu-page">
        {/* 🔘 Veg / Non-Veg Toggle */}
        <div className="toggle-buttons">
          <button className={type === "veg" ? "active" : ""} onClick={() => setType("veg")}>
            Veg
          </button>
          <button className={type === "nonveg" ? "active" : ""} onClick={() => setType("nonveg")}>
            Non-Veg
          </button>
        </div>

        {/* 📑 Category Tabs */}
        <div className="category-tabs">
          {["starters", "main", "desserts", "drinks"].map((cat) => (
            <button
              key={cat}
              className={category === cat ? "active" : ""}
              onClick={() => setCategory(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* ⚡ Filter Button */}
        <div className="filter-section pp">
          <button className="filter-btn pp" onClick={() => setShowFilters(!showFilters)}>
            Filter {showFilters ? "▲" : "▼"}
          </button>

          {showFilters && (
            <div className="filter-options pp">
              <button
                className={activeFilter === "none" ? "active" : ""}
                onClick={() => setActiveFilter("none")}
              >
                None
              </button>
              <button
                className={activeFilter === "priceLow" ? "active" : ""}
                onClick={() => setActiveFilter("priceLow")}
              >
                ₹ &lt; 200
              </button>
              <button
                className={activeFilter === "priceHigh" ? "active" : ""}
                onClick={() => setActiveFilter("priceHigh")}
              >
                ₹ &gt; 200
              </button>
              <button
                className={activeFilter === "rating" ? "active" : ""}
                onClick={() => setActiveFilter("rating")}
              >
                Rating ≥ 4.5
              </button>
            </div>
          )}
        </div>

        {/* 🍽️ Menu Items */}
        <MenuList type={type} category={category} filter={activeFilter} />
      </div>

      <Footer />
    </>
  );
}

export default MenuPage;