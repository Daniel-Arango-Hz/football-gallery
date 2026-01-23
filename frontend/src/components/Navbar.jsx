import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("el-club");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      setMenuVisible(true);
      document.body.style.overflow = "hidden";
      // Detectar la categoría actual basado en la ruta
      const currentPath = location.pathname;
      if (currentPath.includes("/historia")) {
        setSelectedCategory("el-club");
      } else if (currentPath.includes("/patrocinios")) {
        setSelectedCategory("socios");
      } else if (currentPath.includes("/jugadores")) {
        setSelectedCategory("futbol");
      } else if (currentPath.includes("/galería")) {
        setSelectedCategory("galeria");
      } else if (currentPath.includes("/noticias")) {
        setSelectedCategory("noticias");
      }
    } else {
      // Mantener visible durante la animación
      const timer = setTimeout(() => {
        setMenuVisible(false);
      }, 650);
      document.body.style.overflow = "auto";
      return () => clearTimeout(timer);
    }
  }, [menuOpen, location]);

  const menuCategories = {
    "el-club": {
      label: "HISTORIA",
      items: [
        { label: "El Escudo", path: "/historia#escudo" },
        { label: "Cronología", path: "/historia#cronologia" },
        { label: "Nuestros Valores", path: "/historia#valores" },
        { label: "Palmarés", path: "/historia#palmares" },
      ],
    },
    socios: {
      label: "SOCIOS",
      items: [
        { label: "Beneficios", path: "/patrocinios#beneficios" },
        { label: "Afiliación", path: "/patrocinios#afiliacion" },
        { label: "Membresía", path: "/patrocinios#membresia" },
        { label: "Ver Patrocinadores", path: "/patrocinios" },
      ],
    },
    futbol: {
      label: "FÚTBOL",
      items: [
        { label: "Equipo Principal", path: "/jugadores" },
        { label: "Categorías Inferiores", path: "/jugadores" },
      ],
    },
    galeria: {
      label: "GALERÍA",
      items: [
        { label: "Fotos de Partidos", path: "/galería" },
        { label: "Eventos del Club", path: "/galería" },
        { label: "Instalaciones", path: "/galería" },
        { label: "Galería de Videos", path: "/galería" },
      ],
    },
    noticias: {
      label: "NOTICIAS",
      items: [
        { label: "Últimas Noticias", path: "/noticias" },
        { label: "Resultados", path: "/noticias" },
        { label: "Próximos Partidos", path: "/noticias" },
        { label: "Comunicados", path: "/noticias" },
      ],
    },
  };

  const mainNavItems = [
    { id: "el-club", label: "EL CLUB" },
    { id: "socios", label: "SOCIOS" },
    { id: "futbol", label: "FÚTBOL" },
    { id: "galeria", label: "GALERÍA" },
    { id: "noticias", label: "NOTICIAS" },
  ];

  const additionalOptions = [
    { label: "RacingPass", path: "/" },
    { label: "Informes y Balances", path: "/" },
    { label: "Noticias", path: "/noticias" },
    { label: "Locademia Online", path: "/" },
    { label: "Comisión Directiva", path: "/" },
    { label: "Sponsors y Proveedores", path: "/" },
    { label: "Certificaciones de Calidad", path: "/" },
    { label: "Vidas Racinguistas", path: "/" },
  ];

  const handleCategoryClick = (categoryId) => {
    const isMobile = window.innerWidth < 640;
    // Siempre actualiza el estado para mostrar la selección
    setSelectedCategory(categoryId);
    
    if (isMobile) {
      // En móvil, navega directamente al primer item de la categoría
      const firstItem = menuCategories[categoryId]?.items[0];
      if (firstItem) {
        setMenuOpen(false);
        setTimeout(() => {
          navigate(firstItem.path);
          // Scroll dejando espacio para el navbar sticky (aproximadamente 100px)
          window.scrollTo(0, 100);
        }, 100);
      }
    }
  };

  const handleNavigateWithHash = (path) => {
    setMenuOpen(false);
    // Extrae la sección del item si existe
    const section = path.split('#')[1];
    if (section) {
      // Si hay una sección, navega con estado
      navigate(path.split('#')[0], { state: { section } });
    } else {
      navigate(path);
    }
  };

  const socialLinks = [
    { icon: "spotify", url: "https://spotify.com" },
    { icon: "youtube", url: "https://youtube.com" },
    { icon: "instagram", url: "https://instagram.com" },
    { icon: "twitter", url: "https://twitter.com" },
    { icon: "facebook", url: "https://facebook.com" },
  ];

  return (
    <>
      <nav
        className={`sticky top-0 z-50 px-4 md:px-10 py-4 ${
          menuOpen ? "shadow-none animate-fadeNavbarOut" : "shadow-sm animate-fadeNavbarIn"
        }`}
        style={{ backgroundColor: menuOpen ? "transparent" : "rgba(255, 255, 255, 0.85)" }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img
              src="/img/escudo-club.png"
              alt="Escudo Club Deportivo"
              className="w-15 h-15 object-contain"
            />
            <div>
              <h1 className="font-bold text-white">Club Deportivo Racing Giacari</h1>
              <p className="font-bold text-white"></p>
            </div>
          </NavLink>

          {/* Botón Hamburguesa */}
          <button
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`block h-0.5 w-full bg-white transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-white transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-white transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </nav>

      {/* Menu Fullscreen Desplegable */}
      {menuVisible && (
        <>
          {/* Menu Slide-in from Right */}
          <div className="fixed inset-0 z-30 top-0 overflow-hidden flex">
            <div className={`w-full h-screen overflow-hidden flex flex-col transition-all duration-300 ${
              menuOpen ? "animate-slideInRight" : "animate-slideOutRight"
            }`}
            style={{ backgroundColor: "rgba(72, 127, 247, 0.85)" }}>

              {/* Contenido Principal - Sin header porque usa el navbar */}
              <div className="flex flex-1 overflow-hidden relative pt-32">
                {/* Columna Izquierda - Categorías Principales */}
                <div className="w-full sm:w-1/3 md:w-1/4 overflow-y-auto">
                  {mainNavItems.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryClick(category.id)}
                      className={`w-full text-left px-4 sm:px-6 py-4 font-bold transition-colors text-sm sm:text-base ${
                        selectedCategory === category.id
                          ? "bg-blue-800 text-white"
                          : "text-white hover:bg-blue-700"
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                  <div className="px-4 sm:px-6 py-4 flex items-center justify-center space-x-2 cursor-pointer hover:bg-blue-700 transition-colors">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white font-bold text-sm sm:text-base">BUSCAR</span>
                  </div>
                </div>

                {/* Columnas de Contenido - Visibles en Desktop y Tablet */}
                <div className="hidden sm:flex flex-1">
                  {/* Columna Central - Subcategorías */}
                  <div className="w-1/2 md:w-1/3 overflow-y-auto">
                    {menuCategories[selectedCategory] && (
                      <>
                        <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-6">
                          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                            {menuCategories[selectedCategory].label}
                          </h2>
                        </div>
                        <div className="p-4 sm:p-6 md:p-8">
                          <ul className="space-y-3">
                            {menuCategories[selectedCategory].items.map((item) => (
                              <li key={item.label}>
                                <button
                                  onClick={() => handleNavigateWithHash(item.path)}
                                  className="text-white font-bold hover:text-gray-200 transition-colors text-sm sm:text-base w-full text-left"
                                >
                                  {item.label}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Columna Derecha - Opciones Adicionales */}
                  <div className="w-1/2 md:w-1/3 overflow-y-auto">
                    <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-6">
                      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">MÁS</h2>
                    </div>
                    <div className="p-4 sm:p-6 md:p-8">
                      <ul className="space-y-3">
                        {additionalOptions.map((item) => (
                          <li key={item.label}>
                            <NavLink
                              to={item.path}
                              onClick={() => setMenuOpen(false)}
                              className="text-white font-bold hover:text-gray-200 transition-colors text-sm sm:text-base"
                            >
                              {item.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Vista Móvil - Subcategorías y Opciones Adicionales */}
                <div className="sm:hidden flex-1 overflow-y-auto">
                  {menuCategories[selectedCategory] && (
                    <>
                      <div className="px-4 py-4">
                        <h2 className="text-base font-bold text-white">
                          {menuCategories[selectedCategory].label}
                        </h2>
                      </div>
                      <div className="p-4">
                        <ul className="space-y-2">
                          {menuCategories[selectedCategory].items.map((item) => (
                            <li key={item.label} className="pb-1">
                              <button
                                onClick={() => handleNavigateWithHash(item.path)}
                                className="text-white font-bold py-2 block hover:text-gray-200 transition-colors text-sm w-full text-left"
                              >
                                {item.label}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}

                  {/* Opciones Adicionales - Vista Móvil */}
                  <div className="px-4 py-4 border-t border-white border-opacity-30">
                    <h2 className="text-base font-bold text-white">MÁS</h2>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-2">
                      {additionalOptions.map((item) => (
                        <li key={item.label} className="pb-1">
                          <NavLink
                            to={item.path}
                            onClick={() => setMenuOpen(false)}
                            className="text-white font-bold py-2 block hover:text-gray-200 transition-colors text-sm"
                          >
                            {item.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Botón Cerrar - Una sola X */}
                <button
                  onClick={() => setMenuOpen(false)}
                  className="absolute top-6 right-6 z-50 text-gray-900 hover:text-gray-700 transition-colors bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center hidden"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideOutRight {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }
        @keyframes fadeNavbarOut {
          from {
            background-color: rgba(37, 99, 235, 0.85);
          }
          to {
            background-color: rgba(37, 99, 235, 0);
          }
        }
        @keyframes fadeNavbarIn {
          from {
            background-color: rgba(37, 99, 235, 0);
          }
          to {
            background-color: rgba(37, 99, 235, 0.85);
          }
        }
        .animate-slideInRight {
          animation: slideInRight 0.4s ease-out forwards;
        }
        .animate-slideOutRight {
          animation: slideOutRight 0.6s ease-out forwards;
          pointer-events: none;
        }
        .animate-fadeNavbarOut {
          animation: fadeNavbarOut 0.4s ease-out forwards;
        }
        .animate-fadeNavbarIn {
          animation: fadeNavbarIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}
