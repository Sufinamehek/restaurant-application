import { useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/cartPage.css";

function CartPage() {
  const { cart, addToCart, removeFromCart, notification } = useContext(AppContext);

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      removeFromCart(item.dish.id, 1); // decrease quantity by 1
    } else {
      removeFromCart(item.dish.id); // remove completely
    }
  };

  return (
    <>
      <Navbar />

      <div className="cart-page">
        <h2>Your Zaika  Cart</h2>

        {notification && <div className="notification">{notification}</div>}

        {cart.length === 0 ? (
          <p>Your cart is empty 😔</p>
        ) : (
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.dish.id} className="cart-item">
                <img src={item.dish.image} alt={item.dish.name} />
                <div className="cart-info">
                  <h4>{item.dish.name}</h4>
                  <p>Price: ₹{item.dish.price}</p>

                  <div className="quantity-control">
                    <button onClick={() => handleDecrease(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => addToCart(item.dish)}>+</button>
                  </div>

                  <p>Total: ₹{(item.dish.price * item.quantity).toFixed(2)}</p>
                  <button className="remove-btn" onClick={() => removeFromCart(item.dish.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <div className="cart-summary">
            <h3>Subtotal: ₹{cart.reduce((total, item) => total + item.dish.price * item.quantity, 0).toFixed(2)}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default CartPage;