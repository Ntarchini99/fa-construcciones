import React, { useState } from 'react';

const categories = ['Todos', 'Piscinas', 'Pérgolas', 'Renovaciones'];

const projects = [
  {
    title: 'Piscina Moderna',
    category: 'Piscinas',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80',
    description: 'Diseño contemporáneo con acabados de primera calidad',
  },
  {
    title: 'Pérgola Elegante',
    category: 'Pérgolas',
    image: 'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&q=80',
    description: 'Espacio exterior sofisticado para todo el año',
  },
  {
    title: 'Piscina Familiar',
    category: 'Piscinas',
    image: 'https://images.unsplash.com/photo-1562778612-e1e0cda9915c?auto=format&fit=crop&q=80',
    description: 'Diseño perfecto para toda la familia',
  },
  {
    title: 'Renovación Completa',
    category: 'Renovaciones',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80',
    description: 'Transformación total del espacio exterior',
  },
  // Add more projects as needed
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'Todos' || project.category === activeCategory
  );

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Proyectos</h1>
          <p className="text-lg text-gray-600">
            Explora nuestra galería de proyectos completados
          </p>
        </div>

        <div className="flex justify-center space-x-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              } transition-colors duration-200`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">{project.category}</span>
                <h3 className="text-xl font-semibold text-gray-900 mt-2">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}