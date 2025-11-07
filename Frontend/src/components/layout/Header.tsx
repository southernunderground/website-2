import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
// ↓ removed enhancedServices, keep projects
import { projects } from '../../data/mockData';
import DarkModeToggle from '../common/DarkModeToggle';
import { useLanguage } from '../../contexts/LanguageContext';

interface Service {
  id: string;
  name: string;
  icon: string;
  detailedDescription: string;
  features: string[];
  process: string[];
  image: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // ↓ removed Services dropdown state
  // const [showDropdown, setShowDropdown] = useState(false);
  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);
  const { lang, toggleLang } = useLanguage();
  const location = useLocation();
  // ↓ removed Services dropdown ref
  // const dropdownRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsMenuOpen(false), [location]);

  // Click outside only for Projects dropdown now
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (projectsRef.current && !projectsRef.current.contains(event.target as Node)) {
        setShowProjectsDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' }, // simple link now
    { name: 'Projects', path: '/projects' },
    { name: 'Safety', path: '/safety' },
    { name: 'Careers', path: '/careers' },
    // { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  // show language toggle only on Careers routes
  const isCareers = location.pathname.toLowerCase().startsWith('/careers');

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900 shadow-lg'
          : 'bg-gray-900/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <Link to="/" className="flex items-end space-x-3 -ml-8">
            <img
              src='/Logos/LOGO WHITE PNG .png'
              alt="Southern Underground Construction Company Logo"
              className="h-36 w-112 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 relative">
            {navLinks.map((link) =>
              link.name === 'Projects' ? (
                // Keep Projects dropdown
                <div
                  key="projects"
                  className="relative"
                  ref={projectsRef}
                  onMouseEnter={() => setShowProjectsDropdown(true)}
                  onMouseLeave={() => setShowProjectsDropdown(false)}
                >
                  <Link
                    to="/projects"
                    className={`font-medium flex items-center space-x-1 transition-colors duration-200 hover:text-primary-400 ${
                      location.pathname === '/projects'
                        ? 'text-primary-400 border-b-2 border-primary-400'
                        : 'text-white'
                    }`}
                  >
                    <span>Projects</span>
                    <ChevronDown
                      className={`w-4 h-4 mt-0.5 transform transition-transform duration-200 ${
                        showProjectsDropdown ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </Link>
                  <div
                    className={`absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 transform transition-all duration-300 ease-in-out ${
                      showProjectsDropdown
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2'
                    }`}
                  >
                    {projects.map((project) => (
                      <Link
                        key={project.id}
                        to={`/projects/${project.id}`}
                        className="block px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400 text-sm border-b dark:border-gray-700 last:border-b-0"
                      >
                        {project.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                // All other links (including Services) are simple links
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-medium transition-colors duration-200 hover:text-primary-400 ${
                    location.pathname === link.path
                      ? 'text-primary-400 border-b-2 border-primary-400'
                      : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}

            {/* Dark Mode Toggle and Language Toggle */}
            {isCareers && (
              <div className="flex items-center space-x-2">
                <button
                  onClick={toggleLang}
                  className="px-3 py-1 bg-primary-600 text-white rounded hover:bg-primary-700 transition-colors"
                >
                  {lang === 'en' ? 'ES' : 'EN'}
                </button>
                <div id="google_translate_element" className="translate-widget" />
              </div>
            )}
          </nav>

          {/* Mobile Hamburger & Toggles */}
          <div className="flex items-center space-x-2 lg:hidden">
            {/* <DarkModeToggle /> */}
            {isCareers && (
              <>
                <button
                  onClick={toggleLang}
                  className="px-3 py-1 bg-primary-600 text-white rounded hover:bg-primary-700 transition-colors"
                >
                  {lang === 'en' ? 'ES' : 'EN'}
                </button>
                <div id="google_translate_element" className="translate-widget" />
              </>
            )}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-out */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block font-medium py-2 transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;