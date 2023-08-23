import { Route, Routes } from "react-router-dom";
import "./App.css";
import CartCheckout from "./components/CartCheckout";
import Heros from "./components/Heros";
import ProductCard from "./components/ProductCard";
import ContactForm from "./components/ContactForm";
import { useEffect, useState } from "react";
import SignUp from "./components/pages/SignUp";


function App({user}) {
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0)
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/menu')
      .then(response => response.json())
      .then(value => setData(value))
      .catch(error => console.error('Error fetching menu:', error));

  }, []);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    setCount((prev) => prev + 1)
    if (existingItem) {
      const updatedItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
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
    <Routes>
      <Route path="/" element={<Heros />} key={1} />
      <Route path="/menu" element={<ProductCard addToCart={addToCart} count={count} data={data} key={2} />} />
      <Route path="/cart" element={<CartCheckout cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} key={3} />} />
      <Route path="/contact" element={<ContactForm />} key={4} />
    </Routes>
  );
}

export default App;
  // const addToCart = (product) => {
  //   setCartItems((prevCartItems) => [...prevCartItems, product]);
  // };