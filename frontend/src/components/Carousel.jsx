import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ImageLoader from "./ImageLoader";

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});
  const imgRef = useRef(null);

  // Verificar si la imagen actual está cargada
  useEffect(() => {
    const checkImageLoaded = () => {
      const img = imgRef.current;
      if (img && img.complete) {
        setLoadedImages(prev => ({...prev, [images[currentIndex]?.id]: true}));
      } else if (!img || !img.src) {
        // Si no hay imagen, mostrarla de todas formas
        setLoadedImages(prev => ({...prev, [images[currentIndex]?.id]: true}));
      }
    };

    checkImageLoaded();
    const timer = setTimeout(checkImageLoaded, 50);
    return () => clearTimeout(timer);
  }, [currentIndex, images]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
      {images.map((image, index) => (
        <div
          key={image.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative w-full h-full">
            {index === currentIndex && !loadedImages[image.id] && (
              <div className="absolute inset-0 z-10 pointer-events-none">
                <ImageLoader />
              </div>
            )}
            <img
              ref={index === currentIndex ? imgRef : null}
              src={image.src}
              alt={image.title}
              className="carousel-img w-full h-full object-cover"
              data-image-id={image.id}
              onLoad={(e) => {
                setLoadedImages(prev => ({...prev, [image.id]: true}));
              }}
              onError={() => {
                setLoadedImages(prev => ({...prev, [image.id]: true}));
              }}
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-8">
              <h2 className="text-3xl font-bold text-white mb-2">{image.title}</h2>
              <p className="text-white text-lg">{image.description}</p>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full z-10"
        aria-label="Anterior"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full z-10"
        aria-label="Siguiente"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition ${
              index === currentIndex ? "bg-white w-6" : "bg-white/50"
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
