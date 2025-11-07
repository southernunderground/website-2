import React from 'react';
import { Link } from 'react-router-dom';
import {
  Drill,
  Zap,
  Hammer,
  Building,
  Droplets,
  Layers,
  Wrench,
  MoveRight,
  ArrowRight
} from 'lucide-react';

const ServicesOverview: React.FC = () => {
  // Match these IDs with your detail routes: /services/:id
  const services = [
    {
      id: 'directional-drilling',
      name: 'Directional Drilling',
      icon: Drill,
      description:
        'Trenchless HDD for conduits and pipelines with minimal surface disruption.',
      features: [
        'Road/rail/waterway crossings',
        'Bore path engineering',
        'Multi-duct installations'
      ]
    },
    {
      id: 'utility-installation',
      name: 'Utility Installation',
      icon: Layers,
      description:
        'End-to-end water, gas, and sewer installations with testing and restoration.',
      features: [
        'Water & service connections',
        'Gas mains & regulators',
        'Sewer mains, manholes, lift stations'
      ]
    },
    {
      id: 'underground-electrical',
      name: 'Underground Electrical Conduit',
      icon: Zap,
      description:
        'Primary/secondary conduits, duct banks, vaults, and trenchless crossings.',
      features: [
        'Duct banks & risers',
        'Handholes, pull boxes, vaults',
        'Mandrel & pull-string testing'
      ]
    },
    {
      id: 'deep-foundation',
      name: 'Deep Foundation',
      icon: Hammer,
      description:
        'Drilled shafts, piles, and specialty supports for heavy structures.',
      features: [
        'Drilled shafts & rock sockets',
        'Helical & micro-piles, underpinning',
        'Static/dynamic load testing (CSL/TIP)'
      ]
    },
    {
      id: 'civil-construction',
      name: 'Civil Construction',
      icon: Building,
      description:
        'Full-scope sitework, roadway, structural concrete, and public infrastructure.',
      features: [
        'Site prep & earthwork',
        'Roadway & pavement',
        'Drainage & erosion control'
      ]
    },
    {
      id: 'drainage',
      name: 'Drainage',
      icon: Droplets,
      description:
        'Storm drains, culverts, inlets, open-channel works, and restoration.',
      features: [
        'Culverts & storm mains',
        'Catch basins & junction boxes',
        'Cleaning, inspection, CCTV'
      ]
    },
    {
      id: 'pipe-fabrication',
      name: 'Pipe Fabrication',
      icon: Wrench,
      description:
        'Custom cutting, welding, coating, and spool assemblies with QC/NDT.',
      features: [
        'Cutting & beveling',
        'MIG/TIG/SMAW + NDT',
        'Coatings & insulation'
      ]
    },
    {
      id: 'Underground Tunneling',
      name: 'Underground Tunneling',
      icon: MoveRight,
      description:
        'Steel casing jacked under roads/rails with carrier pipe pullback.',
      features: [
        'Bore pits & shoring',
        'Alignment & grade control',
        'Carrier pipe installation'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-primary-600 dark:text-primary-400">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Trenchless drilling, utilities, deep foundations, civil works, and more—delivered with precision and safety.
          </p>
        </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 place-items-center">
  {services.map((service, index) => (
    <Link
      key={service.id}
      to={`/services/${service.id}`}
      className="w-full"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      
                      <div
              className="bg-white dark:bg-gray-900 border-b-4 border-primary-600 shadow-md 
                        hover:shadow-xl transition-all duration-300 p-6 text-center"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white uppercase tracking-wide">
                {service.name}
              </h3>
      </div>
    </Link>
  ))}
</div>


        {/* CTA */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View All Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
