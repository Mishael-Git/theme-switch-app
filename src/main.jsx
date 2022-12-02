import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Styles/theme-switch.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./services/ThemeProvider";
import { Toaster } from "react-hot-toast";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Toaster />
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
