import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import axios from "axios";
import CartCheckout from "./components/CartCheckout";
import Heros from "./components/Heros";
import ProductCard from "./components/ProductCard";
import ContactForm from "./components/ContactForm";
//import isAuthenticated from "./components/util/localStorage";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState([]);
  const[isAuthenticated,setIsAuthenticated]=useState(true)
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
  };

  const PrivateRoute = ({ element: Component }) => {
    return isAuthenticated ? <Component /> : <Navigate to="/login" />;
  };

  useEffect(() => {
    // Fetch the menu data
    axios
      .get("https://burger-6t4w.onrender.com/menu")
      .then((res) => {
        setMenu(res.data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching menu:", error);
        setLoading(false); // Set loading to false even in case of an error
      });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<PrivateRoute element={Heros} />} />
      <Route
        path="/menu"
        element={<PrivateRoute element={() => <ProductCard addToCart={addToCart} menu={menu} loading={loading} />} />}
      />
      <Route
        path="/cart"
        element={<PrivateRoute element={() => <CartCheckout cartItems={cartItems} removeFromCart={removeFromCart} />} />}
      />
      <Route path="/contact" element={<PrivateRoute element={ContactForm} />} />
      <Route path="/signup" element={<PrivateRoute element={SignUp} />} />
      <Route path="/login" element={<PrivateRoute element={Login} />} />
    </Routes>
  );
}

export default App;
