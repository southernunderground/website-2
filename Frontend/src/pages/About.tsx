import React from 'react';
import { Calendar, Users, Award, Shield, Target, Heart, Lightbulb, CheckCircle } from 'lucide-react';
import * as Icons from 'lucide-react';
import { teamMembers, companyStats } from '../data/mockData';
import { Helmet } from 'react-helmet-async';

const About: React.FC = () => {
    const [hoveredService, setHoveredService] = React.useState<string | null>(null);

  const values = [
    {
      icon: Award,
      title: "Safety",
      description:
        "We prioritize the safety of our team, partners, and the public in every phase of our work. Our commitment to strict safety standards ensures every project is completed without compromise.",
    },
    {
      icon: Shield,
      title: "Integrity & Accountability",
      description:
        "We conduct business with honesty, transparency, and professionalism. We stand by our work and take ownership of our responsibilities—every step of the way.",
    },
    {
      icon: Lightbulb,
      title: "Innovation and Expertise",
      description:
        "We invest in specialized equipment and continued training to stay at the forefront of the industry. Our team brings the experience and technical skills needed for even the most challenging jobs.",
    },
    {
      icon: CheckCircle,
      title: "Quality Craftmanship",
      description:
        "We take pride in delivering dependable, high-performance results. From underground utilities to complex infrastructure, we focus on doing it right the first time.",
    },
    {
      icon: Target,
      title: "Reliability",
      description:
        "Our clients trust us to deliver on time, on budget, and with consistent communication. We respond quickly and effectively to meet the unique demands of each project.",
    },
  ];


  // map string names from mockData to actual icon components
  const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    Calendar,
    Users,
    Award,
    Shield,
    Target,
    Heart,
    Lightbulb,
    CheckCircle,
  };

  return (
   <div className="pt-16 bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
      <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
        <Helmet>
          <title>About | Southern Underground</title>
          <meta
            name="description"
            content="Learn about Southern Underground, our history and dedication to quality utility construction."
          />
        </Helmet>
      <section className="relative py-20 text-white overflow-hidden">
    {/* Background image + gradient overlay */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      // style={{ backgroundImage: "url('/images/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg')" }}
      style={{ backgroundImage: "url('/Civil Construction/down-net_http20250912-125-o2zd82.jpg')" }  }
    >
      {/* <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/80 to-secondary-900/90" /> */}
<div className="absolute inset-0 bg-gradient-to-br from-primary-800/85 via-primary-600/75 to-secondary-600/80 dark:from-gray-200/80 dark:via-gray-400/90 dark:to-gray-700/90" />
    </div>

    {/* Animated background accents */}
    {/* <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
    </div> */}

    {/* Content */}
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white ">
          Building the Invisible, all over the country
        </h1>
        <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
          Since 2015, Southern Underground has specialized in the critical infrastructure 
          that forms the backbone of our communities and industries — from underground utilities 
          to civil construction, delivered safely and on time.
        </p>
      </div>
    </div>
  </section>

        {/* Mission Statement */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">
              Our Mission
            </h2>
            {/* <blockquote className="text-2xl text-gray-700 dark:text-gray-300 italic leading-relaxed mb-8">
              "To provide exceptional construction and utility services that build stronger
              communities while maintaining the highest standards of safety, quality, and
              environmental responsibility."
            </blockquote> */}
            <blockquote className="text-xl text-gray-700 dark:text-gray-300 italic leading-relaxed mb-8">
              "At Southern Underground of Louisiana, LLC, our mission is to deliver dependable, high-quality underground utility and infrastructure solutions that strengthen Louisiana’s communities. We are committed to building with integrity—driven by safety, precision, and long-term performance. Through innovation, skilled craftsmanship, and a dedication to excellence, we aim to be the trusted partner for municipal, commercial, and industrial development across the region."
            </blockquote>
            {/* <p className="text-lg text-gray-600 dark:text-gray-300">
              Every project is an opportunity to improve the communities we serve and build infrastructure
              that stands the test of time. We're dedicated to realizing your vision with precision and care.
            </p> */}
          </div>
        </section>

        {/* Core Values */}
              {/* Core Values */}
        <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Every choice we make is guided by these principles
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <article
                  key={idx}
                  className="group relative h-full rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-800/60 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  {/* Accent bar on top */}
                  {/* <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 rounded-t-2xl opacity-80" /> */}

                  <div className="p-6 pt-8 flex flex-col h-full">
                    {/* Icon + Title */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-700/70 group-hover:bg-primary-600 transition-colors">
                        <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                        {value.title}
                      </h3>
                    </div>

                    {/* Description (always visible) */}
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed flex-1">
                      {value.description}
                    </p>

                    {/* Underline accent on hover */}
                    <span className="mt-5 block w-0 h-0.5 bg-primary-600 dark:bg-primary-400 transition-all duration-300 group-hover:w-full" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Our Expertise
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Comprehensive construction and utility services built on decades of Louisiana experience
              </p>
            </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-primary-600 dark:hover:border-primary-400 hover:shadow-lg transition-all duration-300  group">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 mb-3 transition-colors duration-300">
                  Underground Utilities
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                  Complete water, sewer, storm drainage, and gas line installation with advanced directional
                  drilling and trenchless technology.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2 flex-shrink-0"></div>
                    Water & sewer infrastructure
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2 flex-shrink-0"></div>
                    Storm drainage systems
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2 flex-shrink-0"></div>
                    Natural gas distribution
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2 flex-shrink-0"></div>
                    Telecommunications installation
                  </div>
                </div>
              </div>


              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-primary-600 dark:hover:border-primary-400 hover:shadow-lg transition-all duration-300  group">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 mb-3 transition-colors duration-300">
                  Site Development
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                  From initial site preparation to final grading, we handle all aspects of civil construction and earthwork.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2 flex-shrink-0"></div>
                    Site prep & excavation
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2 flex-shrink-0"></div>
                    Road construction & paving
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2 flex-shrink-0"></div>
                    Concrete foundations
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2 flex-shrink-0"></div>
                    Environmental remediation
                  </div>
                </div>
              </div>


              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-primary-600 dark:hover:border-primary-400 hover:shadow-lg transition-all duration-300  group">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 mb-3 transition-colors duration-300">
                  Specialized Services
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                  Emergency utility repairs, industrial maintenance, and tailored solutions for unique project challenges.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2 flex-shrink-0"></div>
                    Emergency repairs
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2 flex-shrink-0"></div>
                    Industrial plant utilities
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2 flex-shrink-0"></div>
                    Municipal upgrades
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2 flex-shrink-0"></div>
                    Flood mitigation
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section> */}
    
        {/* Team Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
                Meet Our Team
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
                >
                  {/* <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  /> */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                      {member.position}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-white dark:bg-gray-800 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                Our Associations
              </h2>

              {/* Responsive, centered, and capped size */}
              <img
                src="/images/certifications/credentials.png"
                alt="Contractor License"
                className="block mx-auto w-full h-auto object-contain max-w-[36rem] md:max-w-[44rem] lg:max-w-[52rem]"
              />
            </div>
          </div>
        </section>

      </div>
      </div>
  );
};

export default About;
