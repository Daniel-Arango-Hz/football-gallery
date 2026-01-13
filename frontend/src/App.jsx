import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Gallery from "./pages/Gallery.jsx";
import News from "./pages/News.jsx";
import Players from "./pages/Players.jsx";
import History from "./pages/History.jsx";
import Sponsorships from "./pages/Sponsorships.jsx";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galería" element={<Gallery />} />
        <Route path="/noticias" element={<News />} />
        <Route path="/jugadores" element={<Players />} />
        <Route path="/historia" element={<History />} />
        <Route path="/patrocinios" element={<Sponsorships />} />
      </Routes>
      <Footer />
    </div>
  );
}
