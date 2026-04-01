import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ReservationPage from "./pages/ReservationPage";
import AboutPage from "./pages/AboutPage";
import ContactusPage from "./pages/ContactusPage";
import MenuPage from "./pages/MenuPage";
import DishDetail from "./pages/DishDetail";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/about" element={<AboutPage /> } />
        <Route path="/contact" element={<ContactusPage />} />
        <Route path="/menu" element={<MenuPage />  } />
        <Route path="/dish/:id" element={<DishDetail   />} />
        <Route path="/cart" element={<CartPage  />} />
        <Route path="/wishlist" element={<WishlistPage />} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;