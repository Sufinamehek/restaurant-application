import { useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";
import "../styles/wishlistPage.css"; // create this for styling
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function WishlistPage() {
  const { wishlist, removeFromWishlist, addToCart, notification } = useContext(AppContext);

  return (
    <>
    <Navbar/>
    <div className="wishlist-page">
      <h2>Your Wishlist</h2>

      {notification && <div className="notification">{notification}</div>}

      {wishlist.length === 0 ? (
        <p>Your wishlist is empty 😔</p>
      ) : (
        <div className="wishlist-items">
          {wishlist.map((dish) => (
            <div key={dish.id} className="wishlist-item">
              <img src={dish.image} alt={dish.name} />
              <div className="wishlist-info">
                <h4>{dish.name}</h4>
                <p>Price: ₹{dish.price}</p>

                <div className="actions">
                  <button
                    className="add-cart-btn"
                    onClick={() => addToCart(dish)}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromWishlist(dish.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
}

export default WishlistPage;