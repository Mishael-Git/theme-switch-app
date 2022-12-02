import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Test from "./Components/test";
import ReactSwitch from "react-switch";
import { useThemeContext } from "./services/ThemeProvider";

function App() {
  const { changeTheme } = useThemeContext();
  //function for handleClick

  return (
    <div
      className={`max-w-full ${
        changeTheme === true
          ? "bg-[#080e1b] text-slate-50  font-MSGothic"
          : "bg-[#cbd5e1] text-slate-900"
      }`}
    >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    </div>
  );
}

export default App;
