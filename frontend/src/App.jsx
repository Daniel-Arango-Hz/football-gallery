import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Gallery from "./pages/Gallery.jsx";
import News from "./pages/News.jsx";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Routes>
        {/* Redirige automáticamente de / a /galería */}
        <Route path="/" element={<Navigate to="/galería" replace />} />
         {/*<Route path="/home" element={<Home />} />*/}
        <Route path="/galería" element={<Gallery />} />
        <Route path="/noticias" element={<News />} />
      </Routes>
      <Footer />
    </div>
  );
}
