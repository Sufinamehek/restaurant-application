// src/components/Navbar.jsx
import { useState, useEffect, useContext } from "react";
import { FaUser, FaHeart, FaShoppingCart, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅ add this
import { AppContext } from "../context/AppContext.jsx"; 
import "../styles/navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { cartCount, wishlist, notification } = useContext(AppContext);

  const navigate = useNavigate(); // ✅ add navigate for redirect

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
<h2 className="logo" onClick={() => navigate("/")}>
  Zaika Atelier
</h2>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars size={25} />
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/about")}>About</li>
          <li onClick={() => navigate("/menu")}>Menu</li>
          <li onClick={() => navigate("/reservation")}>Reservations</li>
          <li onClick={() => navigate("/contact")}>Contact Us</li>
        </ul>

        <div className="nav-icons">
          <FaUser className="icon" title="Login / Profile" />

          {/* Wishlist Icon */}
          <div className="wishlist-icon" onClick={() => navigate("/wishlist")}>
  <FaHeart className="icon" title="Wishlist" />
  {wishlist.length > 0 && <span className="count">{wishlist.length}</span>}
</div>

          {/* Cart Icon */}
          <div 
  className="cart-icon" 
  onClick={() => navigate("/cart")} // redirect to CartPage
>

            <FaShoppingCart className="icon" title="Cart" />
            {cartCount > 0 && <span className="count">{cartCount}</span>}
  
          </div>
        </div>

        {notification && <div className="notification">{notification}</div>}
      </div>
    </nav>
  );
}

export default Navbar;