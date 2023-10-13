import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import axios from "axios";
import CartCheckout from "./components/CartCheckout";
import Heros from "./components/Heros";
import ProductCard from "./components/ProductCard";
import ContactForm from "./components/ContactForm";
import Test2 from "./components/pages/Test2";
import Test from "./components/pages/Test";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [userIsAuthenticated, setUserIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
  };

  

  const PrivateRoute = ({ element: Component,isAuthenticated  }) => {
    return userIsAuthenticated ? <Component /> : <Navigate to="/login" />;
  };

  useEffect(() => {
    const user = localStorage.getItem("Email");
    if (user) {
      setUserIsAuthenticated(true);
    }
    setTimeout(() => {
      setLoading(false);
      axios
        .get("https://burger-6t4w.onrender.com/menu")
        .then((res) => {
          setMenu(res.data);
        })
        .catch((error) => {
          console.error("Error fetching menu:", error);
        });
    }, 30000); // Reduced the timeout to 3 seconds for testing
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={<PrivateRoute element={Heros} />}
      />
      <Route path="/menu" element={<ProductCard addToCart={addToCart} menu={menu} loading={loading} />} />
      <Route path="/cart" element={<CartCheckout cartItems={cartItems} removeFromCart={removeFromCart} />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/signup" element={<Test2 />} />
      <Route path="/login" element={<Test />} />
    </Routes>
  );
}

export default App;
