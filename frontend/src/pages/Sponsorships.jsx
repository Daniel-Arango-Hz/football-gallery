import React, { useState } from "react";
import { MapPin, Users, BarChart3, Mail, Phone, MapPinIcon } from "lucide-react";
import Socials from "../components/Socials";

const sponsorships = [
  {
    id: 1,
    name: "Empresa A",
    logo: "🏢",
    category: "Principal",
    description: "Patrocinador principal del club",
  },
  {
    id: 2,
    name: "Empresa B",
    logo: "⚽",
    category: "Equipo",
    description: "Proveedor oficial de equipamiento",
  },
];

const benefits = [
  {
    title: "Alcance de Audiencia",
    description: "Exponte a más de 10,000 aficionados mensuales",
    icon: <Users className="w-8 h-8 text-blue-700" />,
  },
  {
    title: "Visibilidad en Medios",
    description: "Logo en uniforme, estadio y redes sociales",
    icon: <BarChart3 className="w-8 h-8 text-blue-700" />,
  },
  {
    title: "Responsabilidad Social",
    description: "Asociate con un proyecto de formación de talento joven",
    icon: <MapPin className="w-8 h-8 text-blue-700" />,
  },
];

export default function Sponsorships() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", company: "", phone: "", message: "" });
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Patrocinios y Alianzas</h1>
          <p className="text-xl text-gray-200">Únete a nuestro proyecto de excelencia deportiva</p>
        </div>
      </section>

      {/* Patrocinadores Actuales */}
      <section id="beneficios" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Nuestros Patrocinadores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorships.map((sponsor) => (
              <div key={sponsor.id} className="bg-gray-100 rounded-xl p-8 text-center shadow-md hover:shadow-lg transition">
                <div className="text-6xl mb-4">{sponsor.logo}</div>
                <h3 className="text-xl font-bold text-gray-900">{sponsor.name}</h3>
                <p className="text-blue-700 font-semibold text-sm mt-2">{sponsor.category}</p>
                <p className="text-gray-600 mt-3 text-sm">{sponsor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section id="afiliacion" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">¿Por Qué Patrocinarnos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section id="membresia" className="py-16 px-4 bg-blue-900 text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-2 text-center">¿Interesado en Patrocinarnos?</h2>
          <p className="text-center text-gray-300 mb-12">Cuéntanos sobre tu empresa y cómo podemos colaborar juntos</p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Nombre Completo *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Empresa *</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Nombre de tu empresa"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Teléfono</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Mensaje *</label>
                <textarea
                  name="message"
                  placeholder="Cuéntanos sobre tu empresa, sector y cómo te gustaría colaborar con nuestro club..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition resize-none"
                />
              </div>

              <div className="flex items-center gap-3 pt-4">
                <input
                  type="checkbox"
                  id="privacy"
                  className="w-4 h-4 rounded"
                  required
                />
                <label htmlFor="privacy" className="text-sm">
                  Acepto que me contacten sobre oportunidades de patrocinio
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-blue-900 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Mail size={20} />
                Enviar Solicitud
              </button>

              {submitted && (
                <div className="bg-green-500/20 border border-green-400 text-green-100 px-4 py-3 rounded-lg text-center font-semibold">
                  ✓ ¡Solicitud enviada! Nos contactaremos pronto.
                </div>
              )}
            </form>
          </div>

          {/* Información de Contacto Adicional */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <div className="flex items-start gap-3">
                <Mail className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-gray-300">patrocinios@cdguacari.com</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <div className="flex items-start gap-3">
                <Phone className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Teléfono</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Socials />
    </div>
  );
}
