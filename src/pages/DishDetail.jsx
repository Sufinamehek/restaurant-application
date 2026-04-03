// src/pages/DishDetail.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import menuData from "../data/menuData";
import { FaStar, FaHeart } from "react-icons/fa";
import "../styles/dishDetail.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AppContext } from "../context/AppContext.jsx";

function DishDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cart, addToCart, removeFromCart, addToWishlist, notification } = useContext(AppContext);

  const dish = menuData.find((item) => item.id === parseInt(id));

  const [reviews, setReviews] = useState([]);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // If dish is already in cart, set the quantity from cart
    const cartItem = cart.find(item => item.dish.id === dish?.id);
    if (cartItem) setQuantity(cartItem.quantity);
  }, [cart, dish]);

  if (!dish) return <h2>Dish not found</h2>;

  const handleSubmit = () => {
    if (!text || rating === 0) return;
    const newReview = { text, rating };
    setReviews([newReview, ...reviews]);
    setText("");
    setRating(0);
  };

  const handleAddToCart = () => {
    addToCart(dish, quantity);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      removeFromCart(dish.id, 1);
    } else {
      removeFromCart(dish.id);
      setQuantity(0);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
    addToCart(dish, 1);
  };

  return (
    <>
      <Navbar />

      <div className="dish-detail">
        <div className="dish-container">
          {/* LEFT IMAGE */}
          <div className="dish-left">
            <img src={dish.image} alt={dish.name} />
          </div>

          {/* RIGHT INFO */}
          <div className="dish-right">
            <h1 className="title">{dish.name}</h1>

            <div className="rating">
              ⭐ {dish.rating || 4.5}
            </div>

            <p className="description">
              {dish.description || "Delicious dish made with premium ingredients"}
            </p>

            <h2 className="price">₹{dish.price}</h2>

            {/* QUANTITY + CART BUTTON */}
            <div className="actions">
              <button onClick={handleDecrease} disabled={quantity === 0}>-</button>
              <span style={{ margin: "0 10px", fontWeight: "bold" }}>{quantity}</span>
              <button onClick={handleIncrease}>+</button>

              <button className="add-cart" onClick={handleAddToCart} style={{ marginLeft: "20px" }}>
               Order Now
              </button>

              <button className="wishlist" onClick={() => addToWishlist(dish)}>
                ❤️
              </button>
            </div>

            {notification && <div className="notification">{notification}</div>}

            {/* REVIEWS */}
            <div className="reviews">
              <h3>Customer Reviews</h3>
              {reviews.length === 0 && <p>No reviews yet</p>}
              {reviews.map((r, i) => (
                <div key={i} className="review-item">
                  <span>⭐ {r.rating}</span>
                  <p>{r.text}</p>
                </div>
              ))}
            </div>

            {/* REVIEW FORM */}
            <div className="review-form">
              <h3>Add Review</h3>

              <div className="stars">
                {[1, 2, 3, 4, 5].map((num) => (
                  <span
                    key={num}
                    onClick={() => setRating(num)}
                    className={rating >= num ? "active-star" : ""}
                  >
                    ⭐
                  </span>
                ))}
              </div>

              <textarea
                placeholder="Write your review..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              />

              <button onClick={handleSubmit}>Submit Review</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default DishDetail;