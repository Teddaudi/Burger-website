import { Route, Routes } from "react-router-dom";
import "./App.css";
import CartCheckout from "./components/CartCheckout";
import Heros from "./components/Heros";
import ProductCard from "./components/ProductCard";
import Home from "./container/Home";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Heros />} />
        <Route path="/menu" element={<ProductCard />} />
        <Route path="/cart" element={<CartCheckout />} />
      </Routes>
    </div>
  );
}

export default App;
