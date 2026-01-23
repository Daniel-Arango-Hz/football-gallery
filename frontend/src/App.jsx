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
    // Scroll to top on route change
    if (location.hash) {
      // Si hay un hash, scroll al elemento
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 100);
      }
    } else {
      // Si no hay hash, scroll al top
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

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
