import React from "react";

export default function ImageLoader() {
  return (
    <div className="flex items-center justify-center w-full h-full bg-gray-200 bg-opacity-50">
      <div className="flex flex-col items-center gap-2">
        {/* Spinner animado */}
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-blue-600"></div>
        <p className="text-xs text-gray-700 font-medium">Cargando...</p>
      </div>
    </div>
  );
}
