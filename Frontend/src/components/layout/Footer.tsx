import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';

// Custom X (formerly Twitter) icon component
const XIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Mobile Compact Layout */}
        <div className="block sm:hidden">
          {/* Logo - Minimal */}
          <div className="text-center mb-3">
            <Link to="/" className="inline-block">
              <img
                src="/Logos/BADGE LOGO PNG .png"
                alt="Southern Underground Construction Company Logo"
                className="w-16 h-16 object-contain bg-white mx-auto"
              />
            </Link>
          </div>

          {/* Quick Links - Horizontal Layout */}
          <div className="mb-3">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs">
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              <Link to="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link>
              <Link to="/safety" className="text-gray-300 hover:text-white transition-colors">Safety</Link>
              <Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link>
            </div>
          </div>

          {/* Contact Info - Horizontal Layout */}
          <div className="flex justify-center items-center gap-4 mb-3 text-xs">
            <div className="flex items-center space-x-1">
              <Phone className="w-3 h-3 text-gray-400 flex-shrink-0" />
              <a href="tel:+12255921336" className="text-gray-300 hover:text-white transition-colors">
                (225) 592-1336
              </a>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-3 h-3 text-gray-400 flex-shrink-0" />
              <a href="mailto:info@suofla.com" className="text-gray-300 hover:text-white transition-colors">
                info@suofla.com
              </a>
            </div>
          </div>

          {/* Social Media - Compact */}
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.linkedin.com/company/southern-underground-ofla"
              className="text-gray-400 hover:text-white transition-colors p-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/southern_underground_ofla/"
              className="text-gray-400 hover:text-white transition-colors p-1"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors p-1"
              aria-label="X (formerly Twitter)"
            >
              <XIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com/southernundergroundofla/"
              className="text-gray-400 hover:text-white transition-colors p-1"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Desktop Layout - Hidden on Mobile */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Company Logo - Desktop */}
          <div className="lg:col-span-1">
        <Link to="/" className="flex items-center justify-start">
          <div className="w-32 h-32 lg:w-40 lg:h-40 bg-white flex items-center justify-center">
            <img
              src="/Logos/BADGE LOGO PNG .png"
              alt="Southern Underground Construction Company Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </Link>
      </div>

          {/* Quick Links - Desktop */}
          <div className="text-left">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors text-sm inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors text-sm inline-block"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors text-sm inline-block"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/safety"
                  className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors text-sm inline-block"
                >
                  Safety
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors text-sm inline-block"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - Desktop */}
          <div className="text-left">
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-3">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gray-400 dark:text-gray-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 dark:text-gray-400 text-sm leading-relaxed">
                    4922 Rankin Street<br />
                    Zachary, Louisiana 70791
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-400 dark:text-gray-500 flex-shrink-0" />
                <a
                  href="tel:+12255921336"
                  className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors text-sm"
                >
                  +1 (225) 592-1336
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-400 dark:text-gray-500 flex-shrink-0" />
                <a
                  href="mailto:info@suofla.com"
                  className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors text-sm"
                >
                  info@suofla.com
                </a>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://www.linkedin.com/company/southern-underground-ofla"
                  className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors p-1"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/southern_underground_ofla/"
                  className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors p-1"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors p-1"
                  aria-label="X (formerly Twitter)"
                >
                  <XIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/southernundergroundofla/"
                  className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors p-1"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;