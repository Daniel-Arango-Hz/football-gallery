import React from "react";
import { Trophy, Users, Target, Award } from "lucide-react";
import Socials from "../components/Socials";

const timeline = [
  {
    year: 2000,
    title: "Fundación del Club",
    description: "Club Deportivo Guacari es fundado con la misión de formar talentos jóvenes del fútbol.",
    icon: "🎯",
  },
  {
    year: 2005,
    title: "Primer Torneo Local",
    description: "Ganamos nuestro primer torneo local, marcando el comienzo de nuestra historia ganadora.",
    icon: "🏆",
  },
  {
    year: 2012,
    title: "Expansión Regional",
    description: "Ampliamos nuestras instalaciones y comenzamos a participar en torneos nacionales.",
    icon: "📈",
  },
  {
    year: 2018,
    title: "Primer Éxito Internacional",
    description: "Nuestros jugadores comienzan a ser fichados por clubes profesionales del exterior.",
    icon: "🌍",
  },
  {
    year: 2024,
    title: "Presencia Global",
    description: "Con más de 200 jugadores formados, nos posicionamos como cantera de referencia regional.",
    icon: "⭐",
  },
];

const values = [
  {
    title: "Excelencia",
    description: "Buscamos la máxima calidad en la formación y el rendimiento deportivo.",
    icon: <Trophy className="w-12 h-12 text-blue-700" />,
  },
  {
    title: "Integridad",
    description: "Valores éticos y profesionales en cada aspecto de nuestro trabajo.",
    icon: <Award className="w-12 h-12 text-blue-700" />,
  },
  {
    title: "Comunidad",
    description: "Comprometidos con el desarrollo de la comunidad local.",
    icon: <Users className="w-12 h-12 text-blue-700" />,
  },
  {
    title: "Innovación",
    description: "Metodologías modernas de entrenamiento y desarrollo de talento.",
    icon: <Target className="w-12 h-12 text-blue-700" />,
  },
];

const palmares = [
  { year: 2024, title: "Campeonato Liga Nacional" },
  { year: 2023, title: "Copa Regional" },
  { year: 2022, title: "Torneo Internacional U-19" },
  { year: 2021, title: "Subcampeón Liga Nacional" },
  { year: 2020, title: "Copa Departamental" },
];

export default function History() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Nuestra Historia</h1>
          <p className="text-xl text-gray-200">Más de 24 años formando campeones</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Cronología</h2>
          <div className="space-y-8">
            {timeline.map((event, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 flex items-start pt-1">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-700 text-white text-2xl">
                    {event.icon}
                  </div>
                </div>
                <div className="flex-grow border-l-2 border-blue-700 pl-6 pb-8">
                  <h3 className="text-2xl font-bold text-gray-900">{event.year}</h3>
                  <p className="text-xl font-semibold text-blue-700 mt-1">{event.title}</p>
                  <p className="text-gray-600 mt-2">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Palmarés */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Palmarés</h2>
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8">
            <div className="space-y-4">
              {palmares.map((trophy, index) => (
                <div key={index} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
                  <div>
                    <p className="text-gray-600 text-sm font-semibold">{trophy.year}</p>
                    <p className="text-lg font-bold text-gray-900">{trophy.title}</p>
                  </div>
                  <Trophy className="w-8 h-8 text-yellow-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instalaciones */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Nuestras Instalaciones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="bg-gray-300 h-64 flex items-center justify-center">
                <span className="text-gray-500">Campo Principal</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Campo de Entrenamiento</h3>
                <p className="text-gray-600">Cancha de pasto natural de última generación con iluminación LED.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="bg-gray-300 h-64 flex items-center justify-center">
                <span className="text-gray-500">Gimnasio</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Centro de Acondicionamiento</h3>
                <p className="text-gray-600">Equipamiento moderno para preparación física y recuperación.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Socials />
    </div>
  );
}
