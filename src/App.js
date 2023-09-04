import { Route, Routes } from "react-router-dom";
import "./App.css";
import CartCheckout from "./components/CartCheckout";
import Heros from "./components/Heros";
import ProductCard from "./components/ProductCard";
import ContactForm from "./components/ContactForm";
import { useEffect, useState } from "react";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";


function App({ isAuthenticated }) {
  const [cartItems, setCartItems] = useState([]);
  
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    console.log(cartItems)
  };

  const removeFromCart = (itemToRemove) => {
    const updatedCart = cartItems.filter(item => item.id !== itemToRemove.id);
    setCartItems(updatedCart);
  };



  return (
    <div>
      <Routes>
        <Route path="/hero" element={<Heros />} key={1} />
        <Route path="/menu" element={<ProductCard addToCart={addToCart} key={2} />} />
        <Route path="/cart" element={<CartCheckout cartItems={cartItems} removeFromCart={removeFromCart} key={3} />} />
        <Route path="/contact" element={<ContactForm />} key={4} />
        <Route path="/" element={<SignUp />} key={5} />
        <Route path="/signin" element={<SignIn />} key={6} />
        </Routes>
    </div>
  );
}

export default App;
