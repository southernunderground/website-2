import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Drill,
  Hammer,
  Building,
  Layers,
  Wrench,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Animated Counter Component
const AnimatedCounter: React.FC<{ 
  end: number; 
  suffix?: string; 
  duration?: number;
  decimals?: number;
}> = ({ end, suffix = '', duration = 2000, decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = easeOutCubic * end;
      
      setCount(decimals > 0 ? Number(currentCount.toFixed(decimals)) : Math.floor(currentCount));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration, decimals]);

  return (
    <div ref={elementRef} className="text-3xl font-bold text-secondary-400">
      {count}{suffix}
    </div>
  );
};

// Animated Stats Component
const AnimatedStats: React.FC = () => {
  const stats = [
    { value: 35, suffix: '+', label: 'Years Experience', duration: 2000 },
    { value: 800, suffix: '+', label: 'Projects Completed', duration: 2500 },
    { value: 99.9, suffix: '%', label: 'Safety Record', duration: 2200, decimals: 1 },
    { value: 98, suffix: '%', label: 'Client Retention Rate', duration: 2300 },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <AnimatedCounter 
            end={stat.value} 
            suffix={stat.suffix}
            duration={stat.duration}
            decimals={stat.decimals || 0}
          />
          <div className="text-gray-300 text-sm">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

// Interactive component for Why Southern Underground section
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

const WhySouthernUnderground: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"safety" | "experience" | "expertise">("safety");

  const CONTENT: Record<
    "safety" | "experience" | "expertise",
    { title: string; body: string; cta: string; to: string }
  > = {
    safety: {
      title: "Safety",
      body:
        "Southern Underground is dedicated to the health and safety of our clients, employees, and surrounding communities. Our best-in-class program spans pre-task planning, JHAs, daily toolbox talks, and ongoing training and compliance.",
      cta: "About Safety",
      to: "/safety",
    },
    experience: {
      title: "Experience",
      body:
        "Decades delivering complex civil, utility, and deep foundation work. From HDD crossings and duct banks to drilled shafts and municipal infrastructure, our field-tested teams bring predictable, on-schedule outcomes.",
      cta: "See Project Experience",
      to: "/projects",
    },
    expertise: {
      title: "Versatility",
      body:
        "Full-spectrum underground solutions: directional drilling, utility installation, electrical duct banks, drainage, civil construction, and pipe fabrication—integrated planning, proven methods, and the right equipment for every scope.",
      cta: "Explore Services",
      to: "/services",
    },
  };

  const tabs: Array<"safety" | "experience" | "expertise"> = ["safety", "experience", "expertise"];
  const active = CONTENT[activeTab];

  return (
    <div className="relative min-h-[50vh] overflow-hidden">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-white mt-6 md:mt-12">
        Why Southern Underground?
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[50vh] py-12">
        {/* Left: Big text tabs (no cards) */}
        <nav className="lg:col-span-5">
          <ul className="space-y-6">
            {tabs.map((key) => {
              const isActive = key === activeTab;
              return (
                <li key={key} className="flex items-center">
                  <span
                    className={`mr-4 hidden md:inline-block transition-all ${isActive ? "text-secondary-500" : "text-transparent"
                      }`}
                    aria-hidden
                  >
                    ▶
                  </span>

                  <button
                    onClick={() => setActiveTab(key)}
                    className={`text-left font-extrabold tracking-tight leading-none uppercase transition-colors
                      ${isActive ? "text-secondary-500" : "text-white/90 hover:text-white"}
                      text-4xl md:text-5xl`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {CONTENT[key].title}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="lg:col-span-1 hidden lg:flex justify-center items-stretch">
          <div className="w-px bg-white/50 h-64" />
        </div>

        {/* Right: Description + CTA */}
        <div className="lg:col-span-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -18 }}
              transition={{ duration: 0.25 }}
              className="max-w-2xl"
            >
              <p className="text-lg md:text-xl text-gray-200/95 leading-relaxed">
                {active.body}
              </p>

              {/* underline CTA (no button box) */}
              <div className="mt-8">
                <Link
                  to={active.to}
                  className="group inline-flex items-center font-semibold text-secondary-500"
                >
                  <span className="underline underline-offset-4 decoration-secondary-500/30 group-hover:decoration-secondary-500 transition">
                    {active.cta}
                  </span>
                  <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};



// New Hero Section Component
const NewHero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] overflow-hidden pt-12 pb-9">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/road-construction.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay: stronger at bottom for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      
      {/* Additional overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8 animate-slide-in-left">
            <div className="space-y-3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-500 leading-tight drop-shadow-2xl whitespace-nowrap">
                Strong Foundations Start Here
              </h1>
              <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed max-w-2xl drop-shadow-lg">
                A trusted leader in underground utility construction and structural foundation solutions. Specializing in municipal infrastructure projects, directional drilling, piling, and deep foundations—delivering safe, efficient, and reliable results below the surface.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <Link
                to="/about"
                className="inline-flex items-center justify-center bg-secondary-500 text-white px-6 py-3 sm:px-4 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-secondary-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
              >
                Know More About Us
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="space-y-2 animate-slide-in-right">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-black/15 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3 drop-shadow-lg">Licensed & Insured</h3>
              <p className="text-gray-200 drop-shadow-md">
                Safety and compliance are our top priorities. We are fully licensed and insured, ensuring that all our projects meet rigorous standards and regulations. Trust in a company committed to professionalism, accountability, and quality workmanship.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">Quality Guaranteed</h3>
              <p className="text-gray-200">
                We stand behind the quality of our work and take pride in delivering dependable, high-quality work on every project. Our team is committed to precision, safety, and lasting results—guaranteed.
              </p>
            </div>
            <AnimatedStats />
          </div>
        </div>
      </div>
    </section>


  );
};

// Contact Section Component
const ContactSection: React.FC = () => {
  return (
    <section className="py-8 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Contact us for your project
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-2 rounded-lg font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Hero Section Component
const ServicesHero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const tabsWrapRef = React.useRef<HTMLDivElement | null>(null);

  const scrollTabsToActive = React.useCallback((index: number) => {
    const rail = tabsWrapRef.current;
    if (!rail) return;
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    if (!isMobile) return;
    const perView = 2;
    const itemWidth = rail.clientWidth / perView;
    rail.scrollTo({ left: Math.max(0, index * itemWidth), behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollTabsToActive(currentSlide);
  }, [currentSlide, scrollTabsToActive]);

  // UPDATED: CTA links now point to /services#<service-id>
  const services = [
    {
      id: 'drilling',
      name: 'DRILLING SERVICES',
      subtitle: 'SERVICES',
      icon: Drill,
      description:
        'Minimize disruption, maximize precision—HDD, jack & bore, and tunneling.',
      backgroundImage: '/Directional%20Drilling/down-net_http20250912-84-a01vr6.jpg',
      ctaText: 'More About Drilling Services',
      ctaLink: '/services#directional-drilling', // ← updated
    },
    {
      id: 'deep-foundations',
      name: 'DEEP FOUNDATIONS',
      subtitle: 'SERVICES',
      icon: Hammer,
      description:
        'Drilled shafts, piles, and specialty supports for long-term stability.',
      backgroundImage: '/Deep%20Foundation/IMG_0415.jpg',
      ctaText: 'More About Deep Foundations',
      ctaLink: '/services#deep-foundation', // ← updated
    },
    {
      id: 'civil-construction',
      name: 'CIVIL CONSTRUCTION',
      subtitle: 'SERVICES',
      icon: Building,
      description:
        'From site prep to final grade—roads, concrete, drainage, and public works.',
      backgroundImage: '/Civil%20Construction/down-net_http20250911-109-uhtwxe.jpg',
      ctaText: 'More About Civil Construction',
      ctaLink: '/services#civil-construction', // ← updated
    },
    {
      id: 'utility-services',
      name: 'UTILITY SERVICES',
      subtitle: 'SERVICES',
      icon: Layers,
      description:
        'Water, sewer, gas, and electrical conduit systems installed and commissioned.',
      backgroundImage: '/Utilites/Water%20System%20Installation/down-net_http20250911-125-y4rprp.jpg',
      ctaText: 'More About Utility Services',
      ctaLink: '/services#utility-installation', // ← updated
    },
    {
      id: 'drainage',
      name: 'DRAINAGE SERVICES',
      subtitle: 'SERVICES',
      icon: Wrench,
      description:
        'Comprehensive drainage solutions for municipal and commercial projects.',
      backgroundImage: '/Drainage/down-net_http20250911-137-o2qt0c.jpg',
      ctaText: 'More About Drainage',
      ctaLink: '/services#drainage', // ← updated
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [services.length]);

  const currentService = services[currentSlide];

  return (
    <div>
      {/* Services Hero Section */}
      <section className="relative min-h-[70vh] overflow-hidden">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{ backgroundImage: `url('${currentService.backgroundImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[70vh] py-12">
              {/* Left Content */}
              <div className="lg:col-span-8 space-y-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="space-y-6"
                  >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-none">
                      {currentService.name}
                    </h1>

                    <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 leading-relaxed max-w-4xl font-light">
                      {currentService.description}
                    </p>

                    <div className="pt-4">
                      <Link
                        to={currentService.ctaLink}
                        className="inline-flex items-center bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      >
                        {currentService.ctaText}
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Service Tabs (mobile & desktop) */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Mobile rail */}
            <div
              ref={tabsWrapRef}
              className="md:hidden flex gap-0 overflow-x-auto snap-x snap-mandatory no-scrollbar py-3"
            >
              {services.map((service, index) => {
                const active = index === currentSlide;
                return (
                  <button
                    key={service.id}
                    onClick={() => setCurrentSlide(index)}
                    className="shrink-0 basis-1/2 snap-start pr-6 text-left"
                  >
                    <span
                      className={`relative text-lg font-semibold whitespace-nowrap ${active ? 'text-primary-400' : 'text-gray-200'
                        }`}
                    >
                      {service.name}
                      <span
                        className={`absolute left-0 -bottom-1 h-0.5 bg-primary-400 transition-all duration-300 ${active ? 'w-full' : 'w-0'
                          }`}
                      />
                    </span>
                  </button>
                );
              })}
              {/* More Services tab */}
              <Link
                key="more-services"
                to="/services"
                className="shrink-0 basis-1/2 snap-start pr-6 text-left group"
              >
                <span className="relative text-lg font-semibold whitespace-nowrap text-gray-200">
                  MORE SERVICES
                  <span className="absolute left-0 -bottom-1 h-0.5 bg-primary-400 transition-all duration-300 w-0 group-hover:w-full" />
                </span>
              </Link>
            </div>

            {/* Desktop rail */}
            <div className="hidden md:flex flex-wrap justify-left gap-8 py-4">
              {services.map((service, index) => {
                const active = index === currentSlide;
                return (
                  <button
                    key={service.id}
                    onClick={() => setCurrentSlide(index)}
                    className="relative text-lg font-semibold whitespace-nowrap group"
                  >
                    <span className={active ? 'text-primary-400' : 'text-gray-200'}>
                      {service.name}
                    </span>
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 bg-primary-400 transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      style={{ right: 0 }}
                    />
                  </button>
                );
              })}
              {/* More Services tab */}
              <Link
                key="more-services"
                to="/services"
                className="relative text-lg font-semibold whitespace-nowrap group"
              >
                <span className="text-gray-200">
                  MORE SERVICES
                </span>
                <span
                  className="absolute left-0 -bottom-1 h-0.5 bg-primary-400 transition-all duration-300 w-0 group-hover:w-full"
                  style={{ right: 0 }}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Accelerate Your Career, Join a Winning Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Southern Underground invests in our people and our processes to enhance opportunities for growth.
            We're in this together. Come and join us!
          </p>
          <Link
            to="/careers"
            className="inline-flex items-center bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.02]"
          >
            See Careers
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Why Southern Underground Section */}
      <section className="relative py-16 overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 filter grayscale"
          style={{ backgroundImage: `url('/Civil%20Construction/down-net_http20250911-122-4kanyl.jpg')` }}
        />

        {/* Gradient Overlay: bottom (dark) → top (lighter dark) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/90 to-gray-800/70" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
          <WhySouthernUnderground />
        </div>
      </section>

      {/* Career Section */}

    </div>
  );
};

// Main Hero Component that combines both sections
const Hero: React.FC = () => {
  return (
    <div>
      {/* New Hero Section */}
      <NewHero />

      {/* Contact Section */}
      <ContactSection />

      {/* Services Hero Section */}
      <ServicesHero />
    </div>
  );
};

export default Hero;

