import React from "react";
import { Route, Routes } from "react-router-dom";
import Heros from "../components/Heros";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <>
    <Routes>
          <Route path="/" element={<Heros />} />
          <Route path="/menu" element={<ProductCard />} />
        </Routes>
    </>
  );
};

export default Home;
