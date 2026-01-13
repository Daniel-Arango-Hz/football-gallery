import React from "react";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Estadísticas del Club */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-yellow-400">50+</h3>
            <p className="text-gray-300 mt-2">Años de Historia</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-yellow-400">200+</h3>
            <p className="text-gray-300 mt-2">Jugadores Formados</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-yellow-400">15</h3>
            <p className="text-gray-300 mt-2">Títulos Ganados</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-yellow-400">10K+</h3>
            <p className="text-gray-300 mt-2">Aficionados</p>
          </div>
        </div>
      </section>

      {/* Sección del Equipo */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Nuestro Equipo</h2>
          <p className="text-center text-gray-600 mb-12">Conoce a los jugadores que representan nuestro club con excelencia</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((player) => (
              <div key={player} className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="bg-gray-300 h-64 flex items-center justify-center">
                  <span className="text-gray-500">Foto Jugador {player}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">Jugador {player}</h3>
                  <p className="text-blue-700 font-semibold">Posición: Delantero</p>
                  <p className="text-gray-600 mt-2">Número: {player}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Noticias */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Últimas Noticias</h2>
          <p className="text-center text-gray-600 mb-12">Mantente actualizado con las novedades del club</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((news) => (
              <article key={news} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                <div className="bg-gradient-to-r from-blue-500 to-blue-700 h-40"></div>
                <div className="p-6">
                  <p className="text-blue-700 text-sm font-semibold">Hace {news} días</p>
                  <h3 className="text-xl font-bold text-gray-900 mt-2">Título de la Noticia {news}</h3>
                  <p className="text-gray-600 mt-3">Resumen breve de la noticia más importante del club...</p>
                  <a href="#" className="text-blue-700 font-semibold mt-4 inline-block hover:underline">Leer más →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Únete a Nuestro Club</h2>
          <p className="text-xl mb-8 text-gray-200">¿Quieres ser parte de nuestra historia? Contáctanos hoy</p>
          <button className="bg-yellow-400 text-blue-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition">
            Contacta Con Nosotros
          </button>
        </div>
      </section>
    </>
  );
}
