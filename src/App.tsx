import React from "react";
import logo from "./logo.svg";
import Login from "./components/Login";
import Verification from "./components/Otpinput";
import Authentication from "./components/Authentication";
import TextRevealTW from "./components/text";
import Sidebar from "./pages/components/Sidebar";
import Searchbar from "./pages/components/Searchbar";
import Sidebarright from "./pages/components/Rightbar";
import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/components/LandingPage";
import Profile from "./pages/components/Profile";
import Messages from "./pages/components/Messages";
import Setting from "./pages/components/Setting";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <Authentication /> */}
        <Home />
      </div>
    </BrowserRouter>
  );
}
 
export default App;
