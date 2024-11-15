import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Construimos Tu Piscina Soñada
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
            Especialistas en diseño y construcción de piscinas personalizadas, pérgolas y renovaciones
            en Pilar y alrededores.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/contacto"
              className="bg-blue-600 text-white px-8 py-3 rounded-md flex items-center space-x-2 hover:bg-blue-700 transition-colors duration-200"
            >
              <span>Solicitar Presupuesto</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/portafolio"
              className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200"
            >
              Ver Proyectos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}