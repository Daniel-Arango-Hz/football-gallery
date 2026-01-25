import React, { useState, useEffect } from "react";
import { Calendar, Tag, ChevronLeft, ChevronRight } from "lucide-react";
import Socials from "../components/Socials";

const noticiasData = [
  {
    id: 1,
    titulo: "Victoria Histórica en la Final",
    fecha: "2024-05-20",
    categoria: "Partidos",
    imagen: "/img/a422a643-1573-441d-8e71-843c5fc3a5e0.jpeg",
    contenido: "El Club Deportivo Racing Guacariconquistó su primer título de la temporada con una victoria 3-1 en la final. Una actuación brillante del equipo aseguró el campeonato en una noche memorable para toda la afición.",
    excerpt: "Gol decisivo en el minuto 89 asegura el campeonato.",
    autor: "Redacción Deportiva",
  },
  {
    id: 2,
    titulo: "Nuevo Fichaje Confirmado",
    fecha: "2024-05-18",
    categoria: "Mercado",
    imagen: "/img/fad43edc-631c-4c79-a093-9b01ea1b8912.jpeg",
    contenido: "El equipo anuncia la llegada de tres nuevos jugadores para reforzar la defensa de cara a la próxima temporada. Los fichajes llegan tras una exhaustiva búsqueda internacional para mejorar el rendimiento defensivo.",
    excerpt: "Refuerzos estratégicos para el próximo campeonato.",
    autor: "Comunicación Oficial",
  },
  {
    id: 3,
    titulo: "Entrenamiento Especial",
    fecha: "2024-05-15",
    categoria: "Entrenamientos",
    imagen: "/img/68d623b4-2a84-4991-a59a-76d8ff807ca4.jpeg",
    contenido: "El cuerpo técnico prepara una sesión intensiva para mejorar el rendimiento defensivo del equipo. Los jugadores participan en ejercicios específicos diseñados por el cuerpo técnico para optimizar su desempeño.",
    excerpt: "Preparación especial para los próximos encuentros.",
    autor: "Equipo Técnico",
  },
];

export default function News() {
  const [selectedNews, setSelectedNews] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % noticiasData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + noticiasData.length) % noticiasData.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % noticiasData.length);
  };

  return (
    <div>
      {/* Carousel de Noticias */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
            {noticiasData.map((noticia, index) => (
              <div
                key={noticia.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={noticia.imagen}
                  alt={noticia.titulo}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
              
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">{noticia.titulo}</h2>
                  <p className="text-lg md:text-xl font-light">{noticia.excerpt}</p>
                </div>
              </div>
            ))}

            {/* Controles */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/75 text-gray-900 p-3 rounded-full z-10 transition"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/75 text-gray-900 p-3 rounded-full z-10 transition"
            >
              <ChevronRight size={24} />
            </button>

            {/* Indicadores */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {noticiasData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    index === currentSlide ? "bg-white w-6" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Centro de Noticias</h2>

          {/* Noticia Destacada */}
          <div
            className="mb-12 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer group"
            onClick={() => setSelectedNews(noticiasData[0])}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative overflow-hidden h-64 md:h-auto">
                <img
                  src={noticiasData[0].imagen}
                  alt={noticiasData[0].titulo}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-4 left-4 bg-blue-700 text-white text-xs px-4 py-2 rounded-full font-semibold">
                  {noticiasData[0].categoria}
                </span>
              </div>

              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar size={16} />
                  {new Date(noticiasData[0].fecha).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  {noticiasData[0].titulo}
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {noticiasData[0].excerpt}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Por {noticiasData[0].autor}</span>
                </div>
                <button className="mt-4 text-blue-700 font-semibold hover:text-blue-900 flex items-center gap-2">
                  Leer artículo completo →
                </button>
              </div>
            </div>
          </div>

          {/* Otras Noticias */}
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Últimas Noticias</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {noticiasData.slice(1).map((noticia) => (
              <article
                key={noticia.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer group"
                onClick={() => setSelectedNews(noticia)}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={noticia.imagen}
                    alt={noticia.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 right-3 bg-blue-700 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    {noticia.categoria}
                  </span>
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-2 text-gray-500 text-xs mb-2">
                    <Calendar size={14} />
                    {new Date(noticia.fecha).toLocaleDateString("es-ES")}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition">
                    {noticia.titulo}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {noticia.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{noticia.autor}</span>
                    <span className="text-blue-700 font-semibold text-sm">Leer más →</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de Noticia Completa */}
      {selectedNews && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedNews(null)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedNews.imagen}
                alt={selectedNews.titulo}
                className="w-full h-96 object-cover"
              />
              <button
                className="absolute top-4 right-4 bg-white text-gray-700 rounded-full p-2 shadow-lg hover:bg-gray-100"
                onClick={() => setSelectedNews(null)}
              >
                ✕
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-blue-700 text-white text-xs px-4 py-2 rounded-full font-semibold">
                  {selectedNews.categoria}
                </span>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Calendar size={16} />
                  {new Date(selectedNews.fecha).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {selectedNews.titulo}
              </h2>

              <div className="flex items-center gap-2 mb-6 pb-6 border-b border-gray-200">
                <span className="text-gray-600">Por</span>
                <span className="font-semibold text-gray-900">{selectedNews.autor}</span>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg">
                {selectedNews.contenido}
              </p>
            </div>
          </div>
        </div>
      )}

      <Socials />
    </div>
  );
}
