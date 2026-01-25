import React, { useState } from "react";
import { X } from "lucide-react";
import ImageLoader from "./ImageLoader";

export default function Modal({ isOpen, onClose, content, type }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!isOpen || !content) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10">
          <h2 className="text-2xl font-bold text-gray-900">{content.titulo}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <X size={28} className="text-gray-700" />
          </button>
        </div>

        {/* Contenido del modal */}
        <div className="p-6">
          {type === "imagen" && (
            <div className="space-y-4">
              <div className="relative bg-gray-200 rounded-lg overflow-hidden h-96 flex items-center justify-center">
                {!imageLoaded && (
                  <div className="absolute inset-0 z-10 pointer-events-none">
                    <ImageLoader />
                  </div>
                )}
                <img
                  src={content.src}
                  alt={content.titulo}
                  className="w-full h-full object-cover"
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="inline-block bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                    {content.tag}
                  </span>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {content.descripcion || "Disfruta de este momento destacado de nuestro club."}
                </p>
              </div>
            </div>
          )}

          {type === "noticia" && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {content.categoria}
                </span>
                <span className="text-gray-500 text-sm">{content.fecha}</span>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                {content.desc}
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-700">
                <p className="text-gray-600 text-sm">
                  Para más detalles sobre noticias y actualizaciones, visita nuestra sección de noticias.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
