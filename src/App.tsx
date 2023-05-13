import React, { useContext } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { StdLandingPage } from "./components/StdLandingPage/StdLandingPage";
import { IconCardCarousel } from "./components/IconCardCarousel/IconCardCarousel";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AppContext } from "./context/AppContext";
import { googleLogout } from "@react-oauth/google";
import Dashboard from "./pages/Dashboard/Dashboard";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import Logo from "./images/logoLeft.png";

function App() {
  const navigate = useNavigate();
  const { setProfile, profile, projects, setProjects, darkMode, setDarkMode } =
    useContext(AppContext);

  const logOut = () => {
    googleLogout();
    setProfile(undefined);
    setProjects(undefined);
    navigate("/");
  };
  return (
    <div className="App">
      <Header />
      <div className="chatBot-img-container">
        <img src={Logo} alt="" className="chatboat-img" />
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
