import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import OptimizedImage from '../common/OptimizedImage';

const FeaturedProjects: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 101,
      title: 'Town of Oberlin – Sanitary Sewer System Improvements',
      description:
        'Citywide sanitary sewer assessment and rehabilitation to reduce inflow and infiltration (I&I).',
      category: 'Wastewater/Sewer',
      image: '/project_background/Oberlin.jpg',
      completionDate: '2024-12-14',
      clientName: 'Town of Oberlin',
      location: 'Oberlin, LA',
      details: {
        value: '$2.4M',
      },
    },
    {
      id: 102,
      title: 'Iberville Parish Council – Sewer System Improvements',
      description:
        'Investigation and rehabilitation to reduce I&I within the South Plaquemine Sewer Collection System.',
      category: 'Wastewater/Sewer',
      image: '/Utilites/Wastewater Collection and Sewer/down-net_http20250910-102-huufa1.jpg',
      completionDate: '2024-10-30',
      clientName: 'Iberville Parish Council',
      location: 'Plaquemine, LA',
      details: {
        value: '$2.0M',
      },
    },
    {
      id: 103,
      title: 'Baker Water and Gas Distribution System Improvements',
      description:
        'Water and gas distribution improvements including high-pressure gas pipeline work with enhanced safety protocols.',
      category: 'Water / Gas Distribution',
      image: '/Utilites/Gas System Installation/gas.png',
      completionDate: '2024-08-15',
      clientName: 'City of Baker',
      location: 'Baker, LA',
      details: {
        value: '$1.9M',
      },
    },
  ];

  const nextProject = () => setCurrentProject((p) => (p + 1) % projects.length);
  const prevProject = () => setCurrentProject((p) => (p - 1 + projects.length) % projects.length);

  const p = projects[currentProject];

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading (optional) */}
        <div className="mb-8">
          <h2 className="sr-only">Featured Projects</h2>
        </div>

        {/* HERO CARD */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          {/* Background image */}
          <div className="h-[520px] md:h-[560px] lg:h-[600px] w-full relative overflow-hidden">
            <OptimizedImage
              src={p.image}
              alt={p.title}
              className="w-full h-full object-cover grayscale-[35%]"
              loading="eager"
              priority
            />
          </div>

          {/* Bottom→Top dark gradient overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-gray-900/70 to-transparent" />

          {/* Content overlay */}
          <div className="absolute inset-0 flex">
            <div className="flex items-end w-full">
              <div className="w-full px-6 sm:px-10 lg:px-12 pb-10">
                {/* Category (small pill) */}
                {p.category && (
                  <div className="mb-4">
                    <span className="inline-block bg-white/10 text-white backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium tracking-wide">
                      {p.category}
                    </span>
                  </div>
                )}

                {/* Big title */}
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-200 mb-4">
                  {p.title}
                </h3>
                {/* Description */}
                <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4 max-w-3xl">
                  {p.description}
                </p>
                {/* Client (subhead) */}
                {p.clientName && (
                  <div className="text-lg md:text-xl text-gray-300 mb-2">
                    {p.clientName}
                  </div>
                )}

                {/* Contract value (brand orange) */}
                <div className="text-lg md:text-xl font-semibold">
                  <span className="text-gray-300">&nbsp;</span>
                  <span className="text-secondary-500">{p.details.value}</span>
                </div>

                {/* Meta row (location • completion) */}
                <div className="mt-3 text-sm md:text-base text-gray-400">
                  {p.location}
                  <span className="mx-2">•</span>
                  Completed {new Date(p.completionDate).toLocaleDateString()}
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <Link
                    to={`/projects/${p.id}`}
                    className="group inline-flex items-center text-gray-200 hover:text-white font-semibold"
                  >
                    <span className="underline decoration-white/20 underline-offset-4 group-hover:decoration-white transition">
                      About the Project
                    </span>
                    <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Prev / Next buttons */}
          <button
            onClick={prevProject}
            aria-label="Previous project"
            className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 p-3 rounded-full shadow-lg hover:shadow-xl transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextProject}
            aria-label="Next project"
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 p-3 rounded-full shadow-lg hover:shadow-xl transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentProject(i)}
              aria-label={`Go to project ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === currentProject
                  ? 'bg-secondary-500 w-10'
                  : 'bg-gray-300 dark:bg-gray-700 w-3 hover:bg-gray-400 dark:hover:bg-gray-600'
              }`}
            />
          ))}
        </div>

        {/* Optional bottom CTA */}
        <div className="text-center mt-10">
          <Link
            to="/projects"
            className="inline-flex items-center bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
