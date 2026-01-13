// src/pages/Gallery.jsx
import React, { useState, useMemo, useRef, useEffect } from "react";
import { Heart, Share2, Download } from "lucide-react";
import Carousel from "../components/Carousel";
import Featured from "../components/Featured";
import Socials from "../components/Socials";
import GalleryFilter from "../components/GalleryFilter";

export default function Gallery() {
  const defaultPoster = "/img/default-poster.jpg";

  const categories = [
    { id: "todos", name: "Todos", count: 156 },
    { id: "partidos", name: "Partidos", count: 45 },
    { id: "entrenamientos", name: "Entrenamientos", count: 32 },
    { id: "aficion", name: "Afición", count: 28 },
    { id: "eventos", name: "Eventos Especiales", count: 25 },
    { id: "trofeos", name: "Trofeos", count: 26 },
  ];

  const filters = [
    { id: "todos", name: "Todos" },
    { id: "2024", name: "Temporada 2024" },
    { id: "2023", name: "Temporada 2023" },
    { id: "liga", name: "Liga Nacional" },
    { id: "copa", name: "Copa del Rey" },
  ];

  // Estructura normalizada: todos los items tienen las mismas propiedades
  const galleryItems = [
    {
      id: 1,
      type: "image",
      src: "/img/a422a643-1573-441d-8e71-843c5fc3a5e0.jpeg",
      title: "Gol de la Victoria - Final Liga 2024",
      description: "Juan Pérez anota el gol decisivo en el minuto 89",
      category: "partidos",
      filter: "2024",
      likes: 234,
      date: "2024-05-15",
      poster: defaultPoster,
    },
    {
      id: 5,
      type: "image",
      src: "/img/5b0368eb-231c-49b5-822e-23fbbd18f9d0.jpeg",
      title: "Gol de la Victoria - Final Liga 2024",
      description: "Juan Pérez anota el gol decisivo en el minuto 89",
      category: "partidos",
      filter: "2024",
      likes: 234,
      date: "2024-05-15",
      poster: defaultPoster,
    },
    {
      id: 2,
      type: "image",
      src: "/img/fad43edc-631c-4c79-a093-9b01ea1b8912.jpeg",
      title: "Entrenamiento Matutino",
      description: "Preparación para el próximo partido",
      category: "entrenamientos",
      filter: "2024",
      likes: 89,
      date: "2024-05-10",
      poster: defaultPoster,
    },
    {
      id: 6,
      type: "image",
      src: "/img/68d623b4-2a84-4991-a59a-76d8ff807ca4.jpeg",
      title: "Entrenamiento Matutino",
      description: "Preparación para el próximo partido",
      category: "entrenamientos",
      filter: "2024",
      likes: 89,
      date: "2024-05-10",
      poster: defaultPoster,
    },
    {
      id: 3,
      type: "video",
      src: "/videos/video.mp4",
      title: "La Hinchada en Acción",
      description: "Ambiente espectacular en el estadio",
      category: "aficion",
      filter: "2024",
      likes: 456,
      poster: "/img/football-training-session-players.jpg",
      date: "2024-05-12",
    },
    {
      id: 4,
      type: "image",
      src: "/img/83efed00-a858-46e3-9fc8-9d53af8cb76f.jpeg",
      title: "Levantando la Copa",
      description: "Momento histórico del campeonato",
      category: "trofeos",
      filter: "2024",
      likes: 789,
      date: "2024-05-20",
      poster: defaultPoster,
    },
    {
      id: 7,
      type: "image",
      src: "/img/3b107ac5-8dc4-43d3-8301-f3d21ef89306.jpeg",
      title: "Evento Especial",
      description: "Momento histórico del campeonato",
      category: "eventos",
      filter: "2024",
      likes: 789,
      date: "2024-05-20",
      poster: defaultPoster,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [selectedFilter, setSelectedFilter] = useState("todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const modalVideoRef = useRef(null);

  const filteredItems = useMemo(() => {
    return galleryItems.filter((item) => {
      const byCategory = selectedCategory === "todos" || item.category === selectedCategory;
      const byFilter = selectedFilter === "todos" || item.filter === selectedFilter;
      const bySearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase());
      return byCategory && byFilter && bySearch;
    });
  }, [selectedCategory, selectedFilter, searchTerm]);

  const closeModal = () => {
    if (modalVideoRef.current) {
      try {
        modalVideoRef.current.pause();
        modalVideoRef.current.currentTime = 0;
      } catch (e) {}
    }
    setSelectedItem(null);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Carousel images={galleryItems.filter((item) => item.type === "image").slice(0, 5)} />
      </div>
      <Featured />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <GalleryFilter
              categories={categories}
              filters={filters}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />

            <main className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">
                  {selectedCategory === "todos"
                    ? "Toda la Galería"
                    : categories.find((c) => c.id === selectedCategory)?.name}
                </h3>
                <p className="text-gray-500 text-sm">{filteredItems.length} elementos</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl overflow-hidden shadow-sm group cursor-pointer relative"
                    onClick={() => setSelectedItem(item)}
                  >
                    <div className="relative">
                      {item.type === "video" ? (
                        <video
                          src={item.src}
                          className="w-full h-40 object-cover group-hover:scale-105 transition-transform rounded-md"
                          muted
                          playsInline
                          preload="metadata"
                        />
                      ) : (
                        <img
                          src={item.src}
                          alt={item.title}
                          className="w-full h-40 object-cover group-hover:scale-105 transition-transform rounded-md"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = defaultPoster;
                          }}
                        />
                      )}

                      {item.type === "video" && (
                        <span className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold drop-shadow-lg">
                          ▶
                        </span>
                      )}

                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4 text-white">
                        <h4 className="font-bold text-sm">{item.title}</h4>
                        <p className="text-xs mb-2">{item.description}</p>
                        <div className="flex gap-3 text-white">
                          <button className="hover:text-red-500" aria-label="Me gusta">
                            <Heart size={18} />
                          </button>
                          <button className="hover:text-blue-400" aria-label="Compartir">
                            <Share2 size={18} />
                          </button>
                          <a
                            href={item.src}
                            download
                            className="hover:text-green-400"
                            aria-label="Descargar"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Download size={18} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>
      </section>

      <Socials />

      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-xl shadow-lg max-w-3xl w-full md:w-auto p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-red-600 z-50"
              onClick={closeModal}
            >
              ✕
            </button>

            {selectedItem.type === "image" ? (
              <img
                src={selectedItem.src}
                alt={selectedItem.title}
                className="max-h-[80vh] max-w-full object-contain rounded-lg"
              />
            ) : (
              <video
                ref={modalVideoRef}
                src={selectedItem.src}
                controls
                autoPlay
                poster={selectedItem.poster || defaultPoster}
                className="max-h-[80vh] max-w-full rounded-lg"
              />
            )}

            <div className="p-4 text-center">
              <h3 className="text-lg font-bold">{selectedItem.title}</h3>
              <p className="text-gray-600 text-sm">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
