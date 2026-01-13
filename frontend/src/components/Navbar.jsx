import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Inicio", "Historia", "Noticias", "Galería", "Contacto"];

  return (
    <nav
      className={`sticky top-0 z-50 px-4 md:px-10 py-4 shadow-sm transition-colors duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md" : "bg-white"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/img/escudo-club.png"
            alt="Escudo Club Deportivo"
            className="w-15 h-15 object-contain"
          />
          <div>
            <h1 className="font-bold text-gray-900">Club Deportivo Guacari</h1>
            <p className="font-bold text-gray-900"></p>
          </div>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item}>
              {item === "Galería" ? (
                <NavLink to="/galería" className="text-blue-700 font-semibold">
                  {item}
                </NavLink>
              ) : item === "Noticias" ? (
                <NavLink to="/noticias" className="text-blue-700 font-semibold">
                  {item}
                </NavLink>
              ) : (
                <span className="text-gray-400 cursor-not-allowed">{item}</span>
              )}
            </li>
          ))}
        </ul>

        {/* Botón Hamburguesa */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block h-0.5 w-full bg-gray-700 transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-full bg-gray-700 transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-full bg-gray-700 transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <ul className="flex flex-col mt-4 space-y-2 md:hidden">
          {navItems.map((item) => (
            <li key={item}>
              {item === "Galería" ? (
                <NavLink
                  to="/galería"
                  className="text-blue-700 font-semibold block"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </NavLink>
              ) : item === "Noticias" ? (
                <NavLink
                  to="/noticias"
                  className="text-blue-700 font-semibold block"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </NavLink>
              ) : (
                <span className="text-gray-400 cursor-not-allowed block">{item}</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
