import React from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">F.A CONSTRUCCIONES</h3>
            <p className="text-gray-400 mb-4">
              Especialistas en construcción de piscinas personalizadas, pérgolas y renovaciones
              generales en Pilar y alrededores.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-blue-400 transition-colors">
                <Facebook />
              </a>
              <a href="https://instagram.com" className="hover:text-pink-400 transition-colors">
                <Instagram />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-gray-400 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/portafolio" className="text-gray-400 hover:text-white transition-colors">
                  Portafolio
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="text-blue-400" />
                <span className="text-gray-400">Pilar, Buenos Aires, Argentina</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-blue-400" />
                <a href="tel:+541234567890" className="text-gray-400 hover:text-white">
                  +54 123 456 7890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-400" />
                <a href="mailto:info@faconstrucciones.com" className="text-gray-400 hover:text-white">
                  info@faconstrucciones.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} F.A CONSTRUCCIONES. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}