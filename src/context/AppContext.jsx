import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [cart, setCart] = useState([]);       // { dish, quantity }
  const [wishlist, setWishlist] = useState([]); // { dish }
  const [notification, setNotification] = useState(""); // message

  // CART FUNCTIONS
  const addToCart = (dish) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.dish.id === dish.id);
      if (exists) {
        return prev.map((item) =>
          item.dish.id === dish.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { dish, quantity: 1 }];
      }
    });
    setNotification(`${dish.name} added to cart ✅`);
    clearNotification();
  };

  const removeFromCart = (dishId) => {
    const dish = cart.find((item) => item.dish.id === dishId)?.dish;
    setCart((prev) => prev.filter((item) => item.dish.id !== dishId));
    if (dish) {
      setNotification(`${dish.name} removed from cart 🗑️`);
      clearNotification();
    }
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cart.reduce(
    (total, item) => total + item.dish.price * item.quantity,
    0
  );

  // WISHLIST FUNCTIONS
  const addToWishlist = (dish) => {
    if (!wishlist.find((item) => item.id === dish.id)) {
      setWishlist((prev) => [...prev, dish]);
      setNotification(`${dish.name} added to wishlist ❤️`);
      clearNotification();
    }
  };

  const removeFromWishlist = (dishId) => {
    const dish = wishlist.find((item) => item.id === dishId);
    setWishlist((prev) => prev.filter((item) => item.id !== dishId));
    if (dish) {
      setNotification(`${dish.name} removed from wishlist 💔`);
      clearNotification();
    }
  };

  // Notification auto-clear
  const clearNotification = () => {
    setTimeout(() => setNotification(""), 2000); // 2 seconds
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        wishlist,
        cartCount,
        cartSubtotal,
        addToCart,
        removeFromCart,
        addToWishlist,
        removeFromWishlist,
        notification,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}   