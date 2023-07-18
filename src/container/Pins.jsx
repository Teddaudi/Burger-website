import React from "react";
import { Route, Routes } from "react-router-dom";
import Menu from "../components/Menu";
import UploadFood from "../components/UploadFood";
import Cart from "../components/Cart";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Burger from "../components/Burger";
import Hero from "../components/Hero";

const Pins = () => {
  return (
    <div className="h-full">
      <Navbar />

      <Footer />
    </div>
  );
};

export default Pins;
