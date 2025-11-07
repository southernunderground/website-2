import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams();

  return (
    <div className="pt-16 min-h-screen bg-white dark:bg-gray-900">
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Service Details
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            {serviceId ? `Details for service: ${serviceId}` : 'No service selected.'}
          </p>
          <Link
            to="/services"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-semibold transition-colors"
          >
            Back to Services
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;



