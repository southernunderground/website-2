import React, { useState } from 'react';
import {
  Shield,
  Award,
  Users,
  CheckCircle,
  AlertTriangle,
  HardHat,
  FileText,
  Clock,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
// keep your data import if needed elsewhere
// import { certifications } from '../data/mockData';

const Safety: React.FC = () => {
  const [showAllProtocols, setShowAllProtocols] = useState(false);
  const [showAllTraining, setShowAllTraining] = useState(false);

  const safetyStats = [
    { label: 'Safety Record', value: '99.9%', icon: Shield },
    { label: 'Work Hours Without Incident', value: '1M+', icon: Clock },
    { label: 'Certified Safety Personnel', value: '100%', icon: Users },
    { label: 'Safety Training Hours/Year', value: '3,000+', icon: HardHat },
  ];

  const safetyProtocols = [
    {
      title: 'Pre-Job Safety Planning',
      description: 'Comprehensive safety assessment and planning before every project begins.',
      icon: FileText,
    },
    {
      title: 'Daily Safety Briefings',
      description: 'Morning safety meetings to review hazards and procedures.',
      icon: Users,
    },
    {
      title: 'Personal Protective Equipment',
      description: 'Mandatory PPE requirements enforced on all job sites.',
      icon: HardHat,
    },
    {
      title: 'Hazard Identification',
      description: 'Continuous monitoring and identification of potential hazards.',
      icon: AlertTriangle,
    },
    {
      title: 'Emergency Response',
      description: 'Trained emergency response teams and procedures on every site.',
      icon: Shield,
    },
    {
      title: 'Safety Audits',
      description: 'Regular audits and inspections to maintain high standards.',
      icon: CheckCircle,
    },
  ];

  const trainingPrograms = [
    'OSHA 30-Hour Construction Safety',
    'Confined Space Entry',
    'Fall Protection',
    'Excavation and Trenching Safety',
    'Hazard Communication',
    'Emergency Response',
    'Equipment Operation Safety',
    'First Aid/CPR Certification',
  ];

  // Certifications (kept inline for simplicity; swap with your data if desired)
  const certs = [
    {
      img: '/images/safety/drug free.jpg',
      alt: 'Drug Free Workplace Certification',
      title: 'Drug Free Workplace',
      blurb: 'Certified Drug Free Workplace for enhanced safety and compliance.',
    },
    {
      img: '/images/certifications/alliance-logo.webp',
      alt: 'General Safety Certification',
      title: 'General Safety Certification',
      blurb: 'Recognized for maintaining industry-leading safety standards.',
    },
    {
      img: '/images/certifications/licensed-bonded-insured-vector-icon-business-86546455-removebg-preview.png',
      alt: 'Licensed, Bonded & Insured',
      title: 'Licensed, Bonded & Insured',
      blurb: 'Fully licensed, bonded, and insured for your protection and confidence.',
    },
    {
      img: '/images/certifications/OIP.png',
      alt: 'Industry Safety Compliance',
      title: 'Industry Safety Compliance',
      blurb: 'Compliant with OSHA and industry regulations to ensure safe operations.',
    },
  ];

  // Helpers for mobile collapses
  const visibleProtocols = showAllProtocols ? safetyProtocols : safetyProtocols.slice(0, 3);
  const visibleTraining = showAllTraining ? trainingPrograms : trainingPrograms.slice(0, 4);

  return (
    <div className="pt-16 bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
      {/* Hero (mobile-first height) */}
      {/* <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/umit-yildirim-9OB46apMbC4-unsplash.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-14 sm:py-20 text-center text-white">
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-3">
              Safety <span className="text-secondary-300">First</span>, Always
            </h1>
            <p className="text-base sm:text-xl text-primary-100 max-w-3xl mx-auto">
              Our unwavering commitment to safety ensures every team member returns home safely while
              delivering exceptional construction results.
            </p>
          </div>
        </div>
      </section> */}
      <section className="relative py-20 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/Jack&Bore-Tunneling/down-net_http20250912-116-kqu90f.jpg)' }}
        >
          {/* <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/80 to-secondary-900/90" /> */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-800/85 via-primary-600/75 to-secondary-600/80 dark:from-gray-200/80 dark:via-gray-400/90 dark:to-gray-700/90" />
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white ">
              Safety First, Always
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Our unwavering commitment to safety ensures every team member returns home safely while
              delivering exceptional construction results.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Stats (stack on mobile, grid on md+) */}
      <section className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Our Safety Record
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Numbers that reflect our dedication to the highest safety standards.
            </p>
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {safetyStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="text-center bg-gray-50 dark:bg-gray-700 rounded-xl p-6 sm:p-8 hover:bg-primary-50/80 dark:hover:bg-primary-900/40 transition-colors"
                >
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 dark:bg-primary-800 rounded-full grid place-items-center">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600 dark:text-white" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safety Philosophy (image stacks below on mobile) */}
      <section className="py-1 sm:py-16 bg-gray-100 dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6">
                Our Safety Philosophy
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  At Southern Underground of Louisiana, LLC, safety is not just a priority—it is the foundation of everything we do. We believe every employee, subcontractor, and visitor has the right to return home safely each day. Our commitment to safety is embedded in our company culture, guiding every decision, action, and procedure on every job site.
                </p>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Our ultimate goal is to cultivate a workplace where safety excellence supports quality, efficiency, and the well-being of our entire team—because at Southern Underground, safety is everyone’s responsibility.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                // src="/images/downtown-construction.png"
                src="/Jack&Bore-Tunneling/down-net_http20250912-130-mbgxq6.jpg"
                alt="Safety equipment and construction site"
                className="rounded-2xl shadow-xl w-full h-56 sm:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>
      {/* Adjusted Section: Safety Commitments */}
      <section className="py-8 sm:py-12 bg-gray-50 dark:bg-gray-700 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-4">
          <div className="text-center mb-6 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Our Safety Commitments
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Principles that guide our unwavering dedication to safety excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              "Promoting continuous training and education to ensure all personnel are equipped to recognize and mitigate hazards.",
              "Enforcing strict compliance with all local, state, and federal safety regulations and industry best practices.",
              "Encouraging open communication, where every team member feels empowered to speak up and contribute to a safer workplace.",
              "Implementing thorough planning, hazard assessments, and regular safety audits to prevent incidents before they occur.",
              "Fostering personal accountability and leadership in safety at all levels of the organization."
            ].map((commitment, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-accent-500 flex-shrink-0" />
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  {commitment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Protocols (cards; collapsible on mobile)
      <section className="py-12 sm:py-16 bg-white dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
              Safety Protocols
            </h2>
            <button
              className="sm:hidden text-primary-600 dark:text-primary-400 font-medium inline-flex items-center"
              onClick={() => setShowAllProtocols((v) => !v)}
              aria-expanded={showAllProtocols}
            >
              {showAllProtocols ? 'Show Less' : 'Show All'}
              {showAllProtocols ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {(showAllProtocols || typeof window === 'undefined'
              ? safetyProtocols
              : visibleProtocols
            ).map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="bg-gray-50 dark:bg-gray-700 p-5 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary-100 dark:bg-primary-800 grid place-items-center">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 dark:text-white" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {p.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mt-1">
                        {p.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="sm:hidden mt-4">
            <button
              className="w-full text-center text-primary-600 dark:text-primary-400 font-medium py-2 rounded-lg border border-primary-200 dark:border-primary-800"
              onClick={() => setShowAllProtocols((v) => !v)}
            >
              {showAllProtocols ? 'Show Fewer Protocols' : 'Show All Protocols'}
            </button>
          </div>
        </div>
      </section> */}

      {/* Safety Training Programs (chips; collapsible on mobile) */}
      <section className="py-12 sm:py-16 bg-gray-100 dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
              Safety Training Programs
            </h2>
            <button
              className="sm:hidden text-primary-600 dark:text-primary-400 font-medium inline-flex items-center"
              onClick={() => setShowAllTraining((v) => !v)}
              aria-expanded={showAllTraining}
            >
              {showAllTraining ? 'Show Less' : 'Show All'}
              {showAllTraining ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
            </button>
          </div>

          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-5 sm:mb-8 max-w-3xl">
            Our comprehensive training ensures every team member is equipped to maintain the highest safety standards.
          </p>

          {/* Mobile: 4 visible then expand; Desktop: grid of chips */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {(showAllTraining || typeof window === 'undefined'
              ? trainingPrograms
              : visibleTraining
            ).map((prog, i) => (
              <div
                key={i}
                className="flex items-center space-x-3 p-3 sm:p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm"
              >
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-accent-500 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base font-medium">{prog}</span>
              </div>
            ))}
          </div>

          <div className="sm:hidden mt-4">
            <button
              className="w-full text-center text-primary-600 dark:text-primary-400 font-medium py-2 rounded-lg border border-primary-200 dark:border-primary-800"
              onClick={() => setShowAllTraining((v) => !v)}
            >
              {showAllTraining ? 'Show Fewer Programs' : 'Show All Programs'}
            </button>
          </div>
        </div>
      </section>

      {/* Certifications (horizontal scroll on mobile, grid on md+) */}
      <section className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">Safety Certifications</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-sm sm:text-base mt-2">
              Our commitment to safety is validated by industry-leading certifications.
            </p>
          </div>

          {/* Mobile carousel-like strip */}
          <div className="md:hidden -mx-4 px-4 overflow-x-auto no-scrollbar">
            <div className="flex gap-4">
              {certs.map((c, i) => (
                <div
                  key={i}
                  className="min-w-[260px] bg-gray-50 dark:bg-gray-700 rounded-xl p-5 shadow-lg"
                >
                  <img
                    src={c.img}
                    alt={c.alt}
                    className="w-full h-24 object-contain mb-3 rounded-lg shadow"
                  />
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{c.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{c.blurb}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
            {certs.map((c, i) => (
              <div key={i} className="flex flex-col items-center bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-lg">
                <img
                  src={c.img}
                  alt={c.alt}
                  className="w-full h-24 object-contain mb-4 rounded-lg shadow"
                />
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-center">{c.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm text-center">{c.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Safety;
