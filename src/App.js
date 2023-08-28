import { Route, Routes } from "react-router-dom";
import "./App.css";
import CartCheckout from "./components/CartCheckout";
import Heros from "./components/Heros";
import ProductCard from "./components/ProductCard";
import ContactForm from "./components/ContactForm";
import { useEffect, useState } from "react";
import SignUp from "./components/pages/SignUp";


function App({user}) {
  // const [cartItems, setCartItems] = useState([]);
  // const [count, setCount] = useState(0)
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch('http://localhost:4000/menu')
  //     .then(response => response.json())
  //     .then(value => setData(value))
  //     .catch(error => console.error('Error fetching menu:', error));

  // }, []);

  // const addToCart = (product) => {
  //   const existingItem = cartItems.find((item) => item.id === product.id);
  //   setCount((prev) => prev + 1)
  //   if (existingItem) {
  //     const updatedItems = cartItems.map((item) =>
  //       item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
  //     );
  //     setCartItems(updatedItems);
  //   } else {
  //     setCartItems([...cartItems, { ...product, quantity: 1 }]);
  //   }
  // };

  // const removeFromCart = (itemToRemove) => {
  //   const updatedItems = cartItems.filter((item) => item.id !== itemToRemove.id);
  //   setCartItems(updatedItems);
  // };

  // const updateQuantity = (itemToUpdate, amount) => {
  //   const updatedItems = cartItems.map((item) =>
  //     item.id === itemToUpdate.id ? { ...item, quantity: item.quantity + amount } : item
  //   );
  //   setCartItems(updatedItems);
  // };
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
    <Routes>
      <Route path="/" element={<Heros />} key={1} />
      <Route path="/menu" element={<ProductCard addToCart={addToCart}  key={2} />} />
      <Route path="/cart" element={<CartCheckout cartItems={cartItems} removeFromCart={removeFromCart}  key={3} />} />
      <Route path="/contact" element={<ContactForm />} key={4} />
    </Routes>
  );
}

export default App;
  // const addToCart = (product) => {
  //   setCartItems((prevCartItems) => [...prevCartItems, product]);
  // };

//  [ {_id: '64db0e8c88fdd6624e9b7d34', title: 'Chicken Burger', price: 599, image: 'https://t3.ftcdn.net/jpg/04/47/73/06/240_F_447730659_uGlJcY17hW7T63jwUG46KhDts9jLxbA7.jpg', __v: 0},
// {_id: '64db0e8c88fdd6624e9b7d36', title: 'Hamburger', price: 499, image: 'https://img.freepik.com/free-photo/delicious-meat-…107934376&ga=GA1.2.1322095638.1686651987&semt=sph', __v: 0},
// {_id: '64db0e8c88fdd6624e9b7d33', title: 'Beef Burger', price: 399, image: 'https://t3.ftcdn.net/jpg/02/09/77/52/240_F_209775210_ntMYPohb7QxBgGs08t3yoc60etwX357g.jpg', __v: 0},
// {_id: '64db0e8c88fdd6624e9b7d3c', title: 'Elk burger', price: 120, image: 'https://www.finedininglovers.com/sites/g/files/xknfdk626/files/2022-05/burger.jpg', __v: 0},
// {_id: '64db0e8c88fdd6624e9b7d32', title: 'Cheese Burger', price: 49}]