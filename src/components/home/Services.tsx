import { Droplet, Wrench, Home, Sun, ArrowRight } from 'lucide-react'; // Cambiado Pool a Droplet
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Droplet, // Icono Droplet para piscinas
    title: 'Construcción de Piscinas',
    description:
      'Diseñamos y construimos piscinas personalizadas que se adaptan perfectamente a tu espacio y estilo de vida.',
  },
  {
    icon: Wrench,
    title: 'Mantenimiento',
    description:
      'Servicios completos de mantenimiento y reparación para mantener tu piscina en perfectas condiciones.',
  },
  {
    icon: Sun,
    title: 'Pérgolas',
    description:
      'Creamos espacios de sombra elegantes y funcionales para disfrutar de tu jardín todo el año.',
  },
  {
    icon: Home,
    title: 'Renovaciones',
    description:
      'Transformamos espacios existentes con renovaciones de alta calidad y acabados profesionales.',
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Nuestros Servicios</h2>
          <p className="mt-4 text-xl text-gray-600">
            Soluciones completas para tu hogar y espacio exterior
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                to="/servicios"
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
              >
                Saber más
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
