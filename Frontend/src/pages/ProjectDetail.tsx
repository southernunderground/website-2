import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  MapPin,
  User,
  DollarSign,
  Clock,
  CheckCircle,
} from 'lucide-react';
import { projects } from '../data/mockData';

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find(p => p.id === parseInt(projectId || '0'));

  if (!project) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Project Not Found
          </h1>
          <Link
            to="/projects"
            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const relatedProjects = projects
    .filter(p => p.id !== project.id && p.category === project.category)
    .slice(0, 3);

  return (
    <div className="pt-16 bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 dark:bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link
              to="/"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            >
              Home
            </Link>
            <span className="text-gray-400 dark:text-gray-500">/</span>
            <Link
              to="/projects"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            >
              Projects
            </Link>
            <span className="text-gray-400 dark:text-gray-500">/</span>
            <span className="text-gray-900 dark:text-gray-100">{project.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/projects"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-8 font-medium transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Projects
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-primary-600 dark:bg-primary-700 text-white px-4 py-2 rounded-full font-medium">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  {project.title}
                </h1>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: MapPin,
                    label: 'Location',
                    value: project.location,
                  },
                  // {
                  //   icon: Calendar,
                  //   label: 'Completed',
                  //   value: new Date(project.completionDate).toLocaleDateString(),
                  // },
                  {
                    icon: User,
                    label: 'Client',
                    value: project.clientName,
                  },
                  project.details?.value && {
                    icon: DollarSign,
                    label: 'Project Value',
                    value: project.details.value,
                  },
                ].filter(Boolean).map((item: any, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg transition-colors"
                    >
                      <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      <div>
                        <div className="font-medium text-gray-900 dark:text-gray-100">
                          {item.label}
                        </div>
                        <div className="text-gray-600 dark:text-gray-300">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Highlights */}
              {/* {project.details && (
                <div className="bg-primary-50 dark:bg-primary-900 rounded-xl p-6 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    Project Highlights
                  </h3>
                  <div className="space-y-3">
                    {project.details.duration && (
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                        <span className="text-gray-700 dark:text-gray-300">
                          Duration: {project.details.duration}
                        </span>
                      </div>
                    )}
                    {project.details.scope && (
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {project.details.scope}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )} */}
              {/* Highlights */}
              {project.details && (
                <div className="bg-primary-50 dark:bg-primary-900 rounded-xl p-6 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    Project Highlights
                  </h3>
                  <div className="space-y-3">
                    {/* {project.details.duration && (
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                        <span className="text-gray-700 dark:text-gray-300">
                          Duration: {project.details.duration}
                        </span>
                      </div>
                    )} */}

                    {/* NEW: scope can be string or array */}
                    {project.details.scope && (
                      <div className="mt-2">
                        <div className="flex items-start space-x-3 mb-2">
                          <CheckCircle className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5" />
                          <span className="text-gray-900 dark:text-gray-100 font-semibold">
                            Scope
                          </span>
                        </div>
                        {Array.isArray(project.details.scope) ? (
                          <ul className="list-disc pl-7 text-gray-700 dark:text-gray-300 space-y-1">
                            {project.details.scope.map((s: string, i: number) => (
                              <li key={i}>{s}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-gray-700 dark:text-gray-300 pl-8">
                            {project.details.scope}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Testimonial 
      {project.details && (
        <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                  Project Challenges
                </h2>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg transition-colors">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    Challenge
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.details.challenges}
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    Our Solution
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {project.details.solution}
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                  Client Feedback
                </h2>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg transition-colors">
                  <blockquote className="text-lg text-gray-700 dark:text-gray-300 italic leading-relaxed mb-6">
                    "{project.testimonial}"
                  </blockquote>
                  <div className="border-t border-gray-200 dark:border-gray-600 pt-6">
                    <div className="font-semibold text-gray-900 dark:text-gray-100">
                      {project.clientName}
                    </div>
                    <div className="text-primary-600 dark:text-primary-400">
                      {project.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      */}
      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  <p className="pl-4">

                  Related Projects
                  </p>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                  More examples of our {project.category.toLowerCase()} work
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map(rp => (
                <div
                  key={rp.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={rp.image}
                    alt={rp.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 line-clamp-2">
                      {rp.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                      {rp.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {rp.location}
                      </span>
                      <Link
                        to={`/projects/${rp.id}`}
                        className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                      >
                        View Details →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-primary-600 dark:bg-primary-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            Interested in a Similar Project?
          </h2>
          <p className="text-xl text-primary-100 dark:text-primary-200 mb-8 max-w-3xl mx-auto">
            Contact us to discuss how we can bring the same level of expertise and quality to your construction project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-secondary-500 dark:bg-secondary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary-600 dark:hover:bg-secondary-700 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center border-2 border-white dark:border-gray-400 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white dark:hover:bg-gray-700 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
