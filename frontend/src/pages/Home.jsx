import React from "react";
import { NavLink } from "react-router-dom";
import { Trophy, Users, Zap, Target } from "lucide-react";
import Hero from "../components/Hero";
import Socials from "../components/Socials";

export default function Home() {
  const destacados = [
    {
      id: 1,
      src: "/img/FB_IMG_1768325253557.jpg",
      titulo: "Bicampeones Copa Territorio paraíso Sub17 2025",
      tag: "Partidos",
      link: "/galería"
    },
    {
      id: 2,
      src: "/img/FB_IMG_1768325706131.jpg",
      titulo: "Entrenamiento Matutino",
      tag: "Entrenamientos",
      link: "/galería"
    },
    {
      id: 3,
      src: "/img/football-training-session-players.jpg",
      titulo: "Preparación Física del Equipo",
      tag: "Entrenamientos",
      link: "/galería"
    },
  ];

  const ultimasNoticias = [
    {
      id: 1,
      titulo: "Gran Victoria en el Torneo Regional",
      desc: "Nuestro equipo se llevó la victoria en una emocionante final contra el rival local",
      fecha: "Hace 2 días",
      categoria: "Resultados"
    },
    {
      id: 2,
      titulo: "Convocatoria para Selección Nacional",
      desc: "Cuatro jugadores formados en nuestro club fueron convocados a la selección",
      fecha: "Hace 5 días",
      categoria: "Destacado"
    },
    {
      id: 3,
      titulo: "Nuevo Centro de Entrenamiento",
      desc: "Inauguramos nuestras nuevas instalaciones de entrenamiento de última generación",
      fecha: "Hace 1 semana",
      categoria: "Infraestructura"
    },
  ];

  const valores = [
    {
      icon: <Trophy className="w-10 h-10 text-yellow-400" />,
      titulo: "Excelencia",
      desc: "Buscamos la máxima calidad en cada aspecto deportivo"
    },
    {
      icon: <Users className="w-10 h-10 text-yellow-400" />,
      titulo: "Comunidad",
      desc: "Somos una familia unida por la pasión del deporte"
    },
    {
      icon: <Zap className="w-10 h-10 text-yellow-400" />,
      titulo: "Innovación",
      desc: "Adoptamos metodologías modernas de entrenamiento"
    },
    {
      icon: <Target className="w-10 h-10 text-yellow-400" />,
      titulo: "Integridad",
      desc: "Valores éticos en cada decisión que tomamos"
    },
  ];

  return (
    <>
      <Hero />
      
      {/* Estadísticas del Club */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestra Historia en Números</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center bg-blue-900/50 rounded-lg p-8 hover:bg-blue-900 transition">
              <h3 className="text-5xl font-bold text-yellow-400">24+</h3>
              <p className="text-gray-300 mt-3">Años de Excelencia</p>
            </div>
            <div className="text-center bg-blue-900/50 rounded-lg p-8 hover:bg-blue-900 transition">
              <h3 className="text-5xl font-bold text-yellow-400">200+</h3>
              <p className="text-gray-300 mt-3">Jugadores Formados</p>
            </div>
            <div className="text-center bg-blue-900/50 rounded-lg p-8 hover:bg-blue-900 transition">
              <h3 className="text-5xl font-bold text-yellow-400">15</h3>
              <p className="text-gray-300 mt-3">Títulos Ganados</p>
            </div>
            <div className="text-center bg-blue-900/50 rounded-lg p-8 hover:bg-blue-900 transition">
              <h3 className="text-5xl font-bold text-yellow-400">10K+</h3>
              <p className="text-gray-300 mt-3">Aficionados Pasionales</p>
            </div>
          </div>
        </div>
      </section>

      {/* Momentos Destacados con Imágenes */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Momentos Destacados</h2>
            <p className="text-gray-600">Vive la emoción de nuestros mejores momentos</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destacados.map((item) => (
              <NavLink
                key={item.id}
                to={item.link}
                className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105"
              >
                <div className="relative overflow-hidden bg-gray-200 h-64">
                  <img
                    src={item.src}
                    alt={item.titulo}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                    <span className="inline-block w-fit bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full mb-2">
                      {item.tag}
                    </span>
                    <h3 className="text-white font-bold text-lg">{item.titulo}</h3>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
          <div className="text-center mt-10">
            <NavLink
              to="/galería"
              className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition"
            >
              Ver Galería Completa →
            </NavLink>
          </div>
        </div>
      </section>

      {/* Valores del Club */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Nuestros Valores</h2>
            <p className="text-gray-600">Lo que nos define como institución</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition text-center hover:bg-blue-50"
              >
                <div className="flex justify-center mb-4">{valor.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{valor.titulo}</h3>
                <p className="text-gray-600 text-sm">{valor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Últimas Noticias */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Últimas Noticias</h2>
            <p className="text-gray-600">Mantente actualizado con toda la información del club</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ultimasNoticias.map((noticia) => (
              <article
                key={noticia.id}
                className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition border-l-4 border-blue-700"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold bg-blue-700 text-white px-3 py-1 rounded-full">
                      {noticia.categoria}
                    </span>
                    <p className="text-gray-500 text-xs">{noticia.fecha}</p>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{noticia.titulo}</h3>
                  <p className="text-gray-600 mb-4">{noticia.desc}</p>
                  <NavLink
                    to="/noticias"
                    className="text-blue-700 font-semibold hover:text-blue-900 transition inline-flex items-center gap-2"
                  >
                    Leer más <span>→</span>
                  </NavLink>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <NavLink
              to="/noticias"
              className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition"
            >
              Ver Todas las Noticias →
            </NavLink>
          </div>
        </div>
      </section>

      {/* Sección de Acciones Rápidas */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Explora Más</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <NavLink
              to="/jugadores"
              className="group bg-white/10 hover:bg-white/20 backdrop-blur rounded-lg p-8 text-center transition transform hover:scale-105"
            >
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-2xl font-bold mb-2">Nuestro Equipo</h3>
              <p className="text-gray-200 mb-4">Conoce a los jugadores que representan al club</p>
              <span className="text-yellow-400 font-bold">Ver →</span>
            </NavLink>

            <NavLink
              to="/patrocinios"
              className="group bg-white/10 hover:bg-white/20 backdrop-blur rounded-lg p-8 text-center transition transform hover:scale-105"
            >
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-2">Socios</h3>
              <p className="text-gray-200 mb-4">Únete a nuestro programa de membresía</p>
              <span className="text-yellow-400 font-bold">Explorar →</span>
            </NavLink>

            <NavLink
              to="/historia"
              className="group bg-white/10 hover:bg-white/20 backdrop-blur rounded-lg p-8 text-center transition transform hover:scale-105"
            >
              <div className="text-5xl mb-4">📖</div>
              <h3 className="text-2xl font-bold mb-2">Nuestra Historia</h3>
              <p className="text-gray-200 mb-4">Descubre nuestra trayectoria y logros</p>
              <span className="text-yellow-400 font-bold">Leer →</span>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Llamada a la Acción Final */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-2xl p-12 shadow-xl">
          <h2 className="text-4xl font-bold mb-4">¿Quieres Ser Parte de Nosotros?</h2>
          <p className="text-xl mb-8 text-gray-200">Únete a nuestra comunidad y vive la pasión del deporte junto a nosotros</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition shadow-lg">
              Contactanos
            </button>
            <NavLink
              to="/patrocinios"
              className="bg-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transition border-2 border-white"
            >
              Hazte Socio
            </NavLink>
          </div>
        </div>
      </section>

      <Socials />
    </>
  );
}
