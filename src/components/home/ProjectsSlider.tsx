import React, { useState, useEffect } from 'react';

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80',
    title: 'Piscina Moderna',
    description: 'Diseño contemporáneo con acabados de primera calidad',
  },
  {
    image: 'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&q=80',
    title: 'Pérgola Elegante',
    description: 'Espacio exterior sofisticado para todo el año',
  },
  {
    image: 'https://images.unsplash.com/photo-1562778612-e1e0cda9915c?auto=format&fit=crop&q=80',
    title: 'Piscina Familiar',
    description: 'Diseño perfecto para toda la familia',
  },
];

export default function ProjectsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[600px] overflow-hidden">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
          <div className="relative h-full flex items-center justify-center text-white text-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
              <p className="text-xl">{project.description}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}