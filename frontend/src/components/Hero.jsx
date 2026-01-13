import React from "react";

export default function Hero({ title = "Club Deportivo Guacari", subtitle = "Orgullosamente Representando Nuestro Futuro", showButton = true }) {
  return (
    <section className="relative h-96 md:h-[500px] bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 600%22><defs><pattern id=%22grid%22 width=%2240%22 height=%2240%22 patternUnits=%22userSpaceOnUse%22><path d=%22M 40 0 L 0 0 0 40%22 fill=%22none%22 stroke=%22white%22 stroke-width=%220.5%22/></pattern></defs><rect width=%221200%22 height=%22600%22 fill=%22url(%23grid)%22/></svg>')]"></div>
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">{title}</h1>
        <p className="text-xl md:text-2xl font-light mb-6">{subtitle}</p>
        {showButton && (
          <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-300 transition">
            Únete a Nuestro Equipo
          </button>
        )}
      </div>
    </section>
  );
}



