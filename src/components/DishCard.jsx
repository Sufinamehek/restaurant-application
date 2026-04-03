import { FaHeart, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";

function DishCard({ dish }) {
  const navigate = useNavigate();
  const { addToCart, addToWishlist } = useContext(AppContext);

const handleAddToCart = (e) => {
  e.stopPropagation(); // prevents card click
  addToCart(dish);     // add to cart
  // navigate("/cart"); // optional: only if you want to go to cart immediately
};

  const handleAddToWishlist = (e) => {
    e.stopPropagation();
    addToWishlist(dish);
  };

  return (
    <div 
      className="dish-card"
      onClick={() => navigate(`/dish/${dish.id}`)} // go to dish detail
    >
      <div className="wishlist" onClick={handleAddToWishlist}>
        <FaHeart />
      </div>

      <img src={dish.image} alt={dish.name} />

      <div className="dish-info">
        <h3>{dish.name}</h3>

        <div className="rating">
          <FaStar /> {dish.rating || 4.5}
        </div>

        <p className="price">₹{dish.price}</p>

        {dish.reviews && dish.reviews.length > 0 && (
          <div className="reviews">
            {dish.reviews.map((r, i) => (
              <p key={i}>{r.comment}</p>
            ))}
          </div>
        )}

<button
  className="add-btn"
  onClick={(e) => {
    e.stopPropagation();   // don't trigger card click
    addToCart(dish);       // add to cart
  }}
>
 Order Now
</button>
      </div>
    </div>
  );
}

export default DishCard;