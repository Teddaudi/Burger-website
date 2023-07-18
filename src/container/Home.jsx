import React from "react";
import { Route, Routes } from "react-router-dom";
import UserProfile from "../components/UserProfile";
import Pins from "./Pins";

const Home = () => {
  return (
    <div className="flex bg-gray-50 md:flex-row flex-col h-screen transaction-height duration-75 ease-out">
      <div className="pb-2 flex-1 h-screen overflow-scroll ">
        <Routes>
          <Route path="/user-profile/:userId" element={<UserProfile />} />
          <Route path="/*" element={<Pins />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
