import React, { useState, useEffect } from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Robert Mitchell',
      position: 'City Engineer',
      company: 'City of Baton Rouge',
      content: 'Southern Underground consistently delivers exceptional results. Their attention to detail and commitment to safety makes them our preferred contractor for major utility projects.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5
    },
    {
      id: 2,
      name: 'Lisa Chen',
      position: 'Development Manager',
      company: 'Magnolia Developments',
      content: 'Working with Southern Underground was a pleasure. They completed our subdivision infrastructure ahead of schedule and maintained excellent communication throughout the project.',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5
    },
    {
      id: 3,
      name: 'James Parker',
      position: 'Operations Director',
      company: 'Gulf Coast Industries',
      content: 'The professionalism and expertise demonstrated by Southern Underground on our critical pipeline project was outstanding. They exceeded our expectations in every aspect.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our <span className="text-primary-600 dark:text-primary-400">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the clients who trust us with their most important projects
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 lg:p-12 min-h-[400px] flex items-center">
            <div className="w-full">
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <Quote className="w-16 h-16 text-primary-200 dark:text-primary-700" />
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-center mb-8">
                <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed italic">
                  "{testimonials[currentTestimonial].content}"
                </p>
              </blockquote>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-center">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div className="text-center sm:text-left">
                  <div className="font-semibold text-gray-900 dark:text-white text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {testimonials[currentTestimonial].position}
                  </div>
                  <div className="text-primary-600 dark:text-primary-400 font-medium">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-primary-600 dark:bg-primary-400 w-8'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div className="mt-16">
          <h3 className="text-center text-lg font-semibold text-gray-600 dark:text-gray-400 mb-8">
            Trusted by Leading Organizations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm flex items-center justify-center h-20">
              <span className="text-gray-600 dark:text-gray-300 font-semibold">City of Baton Rouge</span>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm flex items-center justify-center h-20">
              <span className="text-gray-600 dark:text-gray-300 font-semibold">Magnolia Dev.</span>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm flex items-center justify-center h-20">
              <span className="text-gray-600 dark:text-gray-300 font-semibold">Gulf Coast Ind.</span>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm flex items-center justify-center h-20">
              <span className="text-gray-600 dark:text-gray-300 font-semibold">Central Water</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;