import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import ProjectsSlider from '../components/home/ProjectsSlider';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <ProjectsSlider />
    </div>
  );
}