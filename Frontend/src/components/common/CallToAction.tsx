import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 dark:from-primary-800 dark:via-primary-900 dark:to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/20 dark:bg-gray-300/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/20 dark:bg-gray-300/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Ready to Start Your Next Project?
          </h2>
          
          <p className="text-xl md:text-2xl text-primary-100 dark:text-gray-300 leading-relaxed">
            Get a free consultation from Louisiana's leading construction experts. 
            We're here to bring your vision to life with precision and professionalism.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link
              to="/contact"
              className="inline-flex items-center bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
            >
              Get Free consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a
              href="tel:+12255550123"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-700 dark:hover:text-primary-800 transition-all duration-300 group"
            >
              <Phone className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Call Now: (225) 555-0123
            </a>
          </div>

          <div className="pt-8 border-t border-primary-500 dark:border-gray-700">
            <p className="text-primary-200 dark:text-gray-400 text-lg">
              <span className="font-semibold">24/7 Emergency Service Available</span> • Licensed & Insured • Free Estimates
            </p>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default CallToAction;