import { Route, Routes } from "react-router-dom";
import "./App.css";
import CartCheckout from "./components/CartCheckout";
import Heros from "./components/Heros";
import ProductCard from "./components/ProductCard";
import ContactForm from "./components/ContactForm";
import SignUpForm from "./components/Signup";
import SignInForm from "./components/Signin";
import { useState } from "react";


function App() {
  const [cartItems, setCartItems] = useState([]);

  // const addToCart = (product) => {
  //   const existingItem = cartItems.find((item) => item.id === product.id);

  //   if (existingItem) {
  //     const updatedItems = cartItems.map((item) =>
  //       item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
  //     );
  //     setCartItems(updatedItems);
  //   } else {
  //     setCartItems([...cartItems, { ...product, quantity: 1 }]);
  //   }
  // };
  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };
  const removeFromCart = (itemToRemove) => {
    const updatedItems = cartItems.filter((item) => item.id !== itemToRemove.id);
    setCartItems(updatedItems);
  };

  const updateQuantity = (itemToUpdate, amount) => {
    const updatedItems = cartItems.map((item) =>
      item.id === itemToUpdate.id ? { ...item, quantity: item.quantity + amount } : item
    );
    setCartItems(updatedItems);
  };
  return (
    <div>

      <Routes>
        <Route path="/" element={<Heros />} />
        <Route path="/menu" element={<ProductCard addToCart={addToCart} />} />
        <Route path="/cart" element={<CartCheckout cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/signin" element={<SignInForm />} />
      </Routes>
    </div>
  );
}

export default App;
