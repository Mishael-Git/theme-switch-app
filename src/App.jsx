import React from "react";
import Body from "./Components/Body";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Test from "./Components/test";
function App() {
  return (
    <div className="max-w-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
