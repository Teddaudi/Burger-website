import { Route, Routes } from "react-router-dom";
import "./App.css";
import CartCheckout from "./components/CartCheckout";
import Heros from "./components/Heros";
import ProductCard from "./components/ProductCard";
import ContactForm from "./components/ContactForm";
import SignUpForm from "./components/Signup";
import SignInForm from "./components/Signin";


function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Heros />} />
        <Route path="/menu" element={<ProductCard />} />
        <Route path="/cart" element={<CartCheckout />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/signup" element={<SignUpForm/>}/>
        <Route path="/signin" element={<SignInForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
