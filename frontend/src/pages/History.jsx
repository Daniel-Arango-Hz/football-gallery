import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Trophy, Users, Target, Award } from "lucide-react";
import Socials from "../components/Socials";

const timeline = [
  {
    year: 2000,
    title: "Fundación del Club",
    description: "Club Deportivo Racing Guacari es fundado con la misión de formar talentos jóvenes del fútbol.",
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

const menuOptions = [
  { id: "escudo", label: "El Escudo" },
  { id: "cronologia", label: "Cronología" },
  { id: "valores", label: "Nuestros Valores" },
  { id: "palmares", label: "Palmarés" },
];

export default function History() {
  const [selected, setSelected] = useState("escudo");
  const location = useLocation();

  useEffect(() => {
    // Si viene del navbar con una sección específica
    if (location.state?.section) {
      setSelected(location.state.section);
    }
  }, [location]);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Nuestra Historia</h1>
          <p className="text-xl text-gray-200">Más de 24 años formando campeones</p>
        </div>
      </section>

      {/* Contenido Principal con Menú Lateral */}
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto">
        {/* Menú Lateral Izquierdo */}
        <aside className="w-full md:w-1/4 bg-gray-50 p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Secciones</h3>
          <nav className="space-y-3">
            {menuOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => {
                  setSelected(option.id);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg font-bold transition-colors ${
                  selected === option.id
                    ? "bg-blue-500 text-white"
                    : "text-gray-900 bg-white hover:bg-blue-200"
                }`}
              >
                {option.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Contenido Principal */}
        <main className="w-full md:w-3/4 p-6 md:p-8">
          {/* El Escudo */}
          {selected === "escudo" && (
            <section id="escudo" className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">El Escudo</h2>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3 flex justify-center">
                  <div className="bg-gray-100 rounded-xl p-8 flex items-center justify-center h-64 w-64">
                    <img
                      src="/img/escudo-club.png"
                      alt="Escudo del Club"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-lg text-gray-700 mb-4">
                    El escudo del Club Deportivo Racing Guacari representa nuestra identidad y valores desde el año 2000. Sus colores azul y blanco simbolizan la lealtad, la pureza y la excelencia que caracteriza a nuestra institución.
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    Cada elemento del escudo tiene un significado profundo: el círculo representa la unidad de nuestra comunidad, las barras azules simbolizan la fortaleza y determinación, mientras que el blanco representa la transparencia y los altos valores morales por los que nos regimos.
                  </p>
                  <p className="text-lg text-gray-700">
                    A través de más de dos décadas, nuestro escudo ha estado presente en cada logro, cada triunfo y cada desafío que hemos enfrentado. Es el símbolo del compromiso de todos nuestros miembros con la excelencia deportiva y formativa.
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* Cronología */}
          {selected === "cronologia" && (
            <section id="cronologia" className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Cronología</h2>
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
            </section>
          )}

          {/* Valores */}
          {selected === "valores" && (
            <section id="valores" className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Nuestros Valores</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-md text-center">
                    <div className="flex justify-center mb-4">{value.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Palmarés */}
          {selected === "palmares" && (
            <section id="palmares" className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Palmarés</h2>
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
            </section>
          )}
        </main>
      </div>

      <Socials />
    </div>
  );
}
