import React, { useState } from "react";
import { Heart, Download, Mail } from "lucide-react";
import Socials from "../components/Socials";

const playersData = [
  {
    id: 1,
    name: "Juan Pérez",
    position: "Delantero",
    number: 9,
    age: 19,
    height: "1.85m",
    foot: "Diestro",
    image: "/img/a422a643-1573-441d-8e71-843c5fc3a5e0.jpeg",
    stats: {
      goals: 12,
      assists: 4,
      matches: 18,
    },
    bio: "Joven promesa del fútbol latinoamericano con gran potencial ofensivo.",
    highlights: "/videos/video.mp4",
  },
  {
    id: 2,
    name: "Carlos López",
    position: "Mediocampista",
    number: 8,
    age: 20,
    height: "1.78m",
    foot: "Zurdo",
    image: "/img/fad43edc-631c-4c79-a093-9b01ea1b8912.jpeg",
    stats: {
      goals: 3,
      assists: 8,
      matches: 20,
    },
    bio: "Organizador del juego con visión de pase excepcional.",
    highlights: "/videos/video.mp4",
  },
  {
    id: 3,
    name: "Marco Guzmán",
    position: "Defensa",
    number: 4,
    age: 21,
    height: "1.88m",
    foot: "Diestro",
    image: "/img/68d623b4-2a84-4991-a59a-76d8ff807ca4.jpeg",
    stats: {
      goals: 1,
      assists: 0,
      matches: 22,
    },
    bio: "Defensa central con liderazgo y experiencia en torneos internacionales.",
    highlights: "/videos/video.mp4",
  },
];

const successCases = [
  {
    id: 1,
    playerName: "Andrés Rodríguez",
    currentClub: "Real Madrid",
    yearsAgo: 3,
    description: "Formado en nuestras categorías menores, ahora juega en la liga española.",
    image: "/img/83efed00-a858-46e3-9fc8-9d53af8cb76f.jpeg",
  },
  {
    id: 2,
    playerName: "Felipe Moreno",
    currentClub: "Manchester United",
    yearsAgo: 2,
    description: "Nuestro legado internacional con proyección global.",
    image: "/img/5b0368eb-231c-49b5-822e-23fbbd18f9d0.jpeg",
  },
];

export default function Players() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [scoutEmail, setScoutEmail] = useState("");
  const [scoutMessage, setScoutMessage] = useState("");
  const [contactSent, setContactSent] = useState(false);

  const handleScoutSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    setContactSent(true);
    setTimeout(() => setContactSent(false), 3000);
    setScoutEmail("");
    setScoutMessage("");
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Nuestros Jugadores</h1>
          <p className="text-xl text-gray-200">Talento joven en desarrollo para alcanzar el profesionalismo</p>
        </div>
      </section>

      {/* Nuestro Equipo Actual */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Plantilla Actual</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {playersData.map((player) => (
              <div
                key={player.id}
                className="bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer group"
                onClick={() => setSelectedPlayer(player)}
              >
                <div className="relative overflow-hidden h-64 bg-gray-300">
                  <img
                    src={player.image}
                    alt={player.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "/img/default-poster.jpg";
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-blue-700 text-white px-3 py-1 rounded-full font-bold text-lg">
                    #{player.number}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900">{player.name}</h3>
                  <p className="text-blue-700 font-semibold text-lg">{player.position}</p>
                  <div className="mt-4 space-y-1 text-sm text-gray-600">
                    <p>Edad: {player.age} años</p>
                    <p>Estatura: {player.height}</p>
                    <p>Pierna: {player.foot}</p>
                  </div>
                  <button className="mt-4 w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition">
                    Ver Perfil Completo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de Éxito */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Nuestros Éxitos</h2>
          <p className="text-gray-600 mb-12">Jugadores formados en CDG que han alcanzado el profesionalismo</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successCases.map((case_) => (
              <div key={case_.id} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={case_.image}
                    alt={case_.playerName}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/img/default-poster.jpg";
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900">{case_.playerName}</h3>
                  <p className="text-blue-700 font-semibold text-lg">{case_.currentClub}</p>
                  <p className="text-gray-600 mt-2 text-sm">Hace {case_.yearsAgo} año(s)</p>
                  <p className="text-gray-700 mt-4">{case_.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto para Ojeadores */}
      <section className="py-16 px-4 bg-blue-900 text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-2 text-center">¿Eres Ojedor?</h2>
          <p className="text-center text-gray-300 mb-12">Solicita informes detallados sobre nuestros jugadores</p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20">
            <form onSubmit={handleScoutSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Nombre Completo *</label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    value={scoutEmail}
                    onChange={(e) => setScoutEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    value={scoutEmail}
                    onChange={(e) => setScoutEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Club/Empresa</label>
                  <input
                    type="text"
                    placeholder="Nombre del club"
                    className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Teléfono</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Mensaje *</label>
                <textarea
                  placeholder="Cuéntanos sobre tu interés en nuestros jugadores y qué tipo de perfiles buscas..."
                  value={scoutMessage}
                  onChange={(e) => setScoutMessage(e.target.value)}
                  required
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition resize-none"
                />
              </div>

              <div className="flex items-center gap-3 pt-4">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 rounded"
                  required
                />
                <label htmlFor="terms" className="text-sm">
                  Acepto que me contacten sobre oportunidades de colaboración
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-blue-900 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Mail size={20} />
                Enviar Solicitud
              </button>
              
              {contactSent && (
                <div className="bg-green-500/20 border border-green-400 text-green-100 px-4 py-3 rounded-lg text-center font-semibold">
                  ✓ ¡Solicitud enviada exitosamente! Nos contactaremos pronto.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Modal Perfil Jugador */}
      {selectedPlayer && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPlayer(null)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={selectedPlayer.image}
                alt={selectedPlayer.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/img/default-poster.jpg";
                }}
              />
              <button
                className="absolute top-4 right-4 bg-white text-gray-700 rounded-full p-2 shadow-lg hover:bg-gray-100"
                onClick={() => setSelectedPlayer(null)}
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-4 bg-blue-700 text-white px-4 py-2 rounded-full font-bold text-2xl">
                #{selectedPlayer.number}
              </div>
            </div>

            <div className="p-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">{selectedPlayer.name}</h2>
              <p className="text-blue-700 font-semibold text-2xl mb-6">{selectedPlayer.position}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 pb-8 border-b">
                <div>
                  <p className="text-gray-600 text-sm">Edad</p>
                  <p className="font-bold text-lg">{selectedPlayer.age}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Estatura</p>
                  <p className="font-bold text-lg">{selectedPlayer.height}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Pierna</p>
                  <p className="font-bold text-lg">{selectedPlayer.foot}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Dorsal</p>
                  <p className="font-bold text-lg">#{selectedPlayer.number}</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900">Estadísticas</h3>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-blue-100 p-4 rounded-lg text-center">
                  <p className="text-gray-600 text-sm">Goles</p>
                  <p className="font-bold text-2xl text-blue-700">{selectedPlayer.stats.goals}</p>
                </div>
                <div className="bg-blue-100 p-4 rounded-lg text-center">
                  <p className="text-gray-600 text-sm">Asistencias</p>
                  <p className="font-bold text-2xl text-blue-700">{selectedPlayer.stats.assists}</p>
                </div>
                <div className="bg-blue-100 p-4 rounded-lg text-center">
                  <p className="text-gray-600 text-sm">Partidos</p>
                  <p className="font-bold text-2xl text-blue-700">{selectedPlayer.stats.matches}</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">{selectedPlayer.bio}</p>

              <div className="flex gap-3">
                <a
                  href={selectedPlayer.highlights}
                  download
                  className="flex-1 bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition flex items-center justify-center gap-2 font-semibold"
                >
                  <Download size={20} />
                  Descargar Highlights
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <Socials />
    </div>
  );
}
