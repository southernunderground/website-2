import React from 'react';
import { Facebook, Twitter, Mail, Phone } from 'lucide-react';
// import { TwitterX } from 'lucide-react';
const SocialHeader: React.FC = () => {
  return (
    <div className="bg-gray-800 dark:bg-gray-900 text-white py-2 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center text-sm">
          {/* Contact Info */}
          <div className="flex items-center space-x-6">
            <a 
              href="tel:+12255550123" 
              className="flex items-center space-x-2 hover:text-secondary-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">(225) 555-0123</span>
            </a>
            <a 
              href="mailto:info@suofla.com" 
              className="flex items-center space-x-2 hover:text-secondary-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">info@suofla.com</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <span className="hidden md:inline text-gray-300">Follow Us:</span>
            <a
              href="https://www.facebook.com/southernundergroundofla/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
  href="https://twitter.com/southernunderground"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-300 hover:text-blue-400 transition-colors"
  aria-label="X (Twitter)"
>
  <svg
    className="w-4 h-4"
    viewBox="0 0 32 32"
    fill="currentColor"
    // xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M24.85 3H30l-10.42 11.9L32 29h-8.08l-6.35-7.75L9.23 29H4l11.13-12.72L0 3h8.23l5.76 7.08L24.85 3ZM23.46 27h2.23l-7.19-8.78 1.59-1.82 7.45 9.21ZM6.31 5l14.27 17.62-1.58 1.83L4.8 5h1.5Z" />
  </svg>
</a>

            <a
              href="mailto:info@suofla.com"
              className="text-gray-300 hover:text-secondary-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialHeader;