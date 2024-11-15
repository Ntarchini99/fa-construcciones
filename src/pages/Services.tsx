import { Droplet, Wrench, Sun, Home } from 'lucide-react'; // Reemplazado Pool por Droplet

const services = [
  {
    icon: Droplet, // Ícono Droplet
    title: 'Construcción de Piscinas',
    description:
      'Diseñamos y construimos piscinas personalizadas que se adaptan perfectamente a tu espacio y estilo de vida. Utilizamos materiales de primera calidad y las últimas tecnologías en construcción de piscinas.',
    features: [
      'Diseño personalizado',
      'Materiales de alta calidad',
      'Sistemas de filtración avanzados',
      'Iluminación LED',
      'Acabados premium',
    ],
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80',
  },
  {
    icon: Wrench,
    title: 'Mantenimiento y Reparación',
    description:
      'Ofrecemos servicios completos de mantenimiento y reparación para mantener tu piscina en perfectas condiciones durante todo el año.',
    features: [
      'Limpieza regular',
      'Balance químico del agua',
      'Reparación de equipos',
      'Mantenimiento preventivo',
      'Servicios de emergencia',
    ],
    image: 'https://images.unsplash.com/photo-1562778612-e1e0cda9915c?auto=format&fit=crop&q=80',
  },
  {
    icon: Sun,
    title: 'Pérgolas',
    description:
      'Diseñamos y construimos pérgolas elegantes que proporcionan el equilibrio perfecto entre sol y sombra para tu espacio exterior.',
    features: [
      'Diseños modernos',
      'Materiales duraderos',
      'Opciones personalizables',
      'Instalación profesional',
      'Garantía de calidad',
    ],
    image: 'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&q=80',
  },
  {
    icon: Home,
    title: 'Renovaciones',
    description:
      'Transformamos espacios existentes con renovaciones de alta calidad que aumentan el valor y la funcionalidad de tu propiedad.',
    features: [
      'Planificación detallada',
      'Materiales de calidad',
      'Equipo especializado',
      'Cumplimiento de plazos',
      'Garantía de trabajo',
    ],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80',
  },
];

export default function Services() {
  return (
    <div className="pt-20">
      {services.map((service, index) => (
        <section
          key={index}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 0 ? '' : 'lg:flex-row-reverse'
            }`}>
              <div className="space-y-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                <p className="text-lg text-gray-600">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <svg
                        className="h-5 w-5 text-blue-600"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
