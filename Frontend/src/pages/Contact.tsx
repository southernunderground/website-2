import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { API_URL } from '../config/api';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    projectType: '',
    timeline: '',
    budget: '',
    message: '',
    newsletter: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formMsg, setFormMsg] = useState('');

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Location',
      details: ['4922 Rankin Street', 'Zachary, Louisiana 70791'],
      link: 'https://maps.google.com/?q=4922+Rankin+Street+Zachary+LA+70791',
    },
    {
      icon: Phone,
      title: 'Phone Number',
      details: ['+1 (225) 592-1336'],
      link: 'tel:+12255921336',
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['info@suofla.com'],
      link: 'mailto:info@suofla.com',
    },
    // {
    //   icon: Clock,
    //   title: 'Business Hours',
    //   details: ['Monday - Friday: 7:00 AM - 6:00 PM', 'Saturday: 8:00 AM - 4:00 PM'],
    //   link: null,
    // },
  ];

  const services = [
    'Directional drilling',
    'Utility Installation',
    'Pile Installation',
    'Civil Construction',
    'Water & Sewer Treatment',
    'Emergency Services',
    'Other',
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormMsg('');
    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setFormMsg(data.msg || 'Submitted!');
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormMsg('');
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            service: '',
            projectType: '',
            timeline: '',
            budget: '',
            message: '',
            newsletter: false,
          });
        }, 3000);
      } else {
        setFormMsg(data.msg || 'Submission failed.');
      }
    } catch {
      setFormMsg('Server error. Please try again.');
    }
  };

  if (isSubmitted) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-md mx-auto text-center p-8 bg-white dark:bg-gray-700 rounded-2xl shadow-xl">
          <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-accent-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Thank You!
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Your message has been sent successfully. We'll get back to you within 24
            hours.
          </p>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Redirecting back to form...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/ant-rozetsky-SLIFI67jv5k-unsplash.jpg)' }}
        >
          {/* <div className="absolute inset-0 bg-black/60" /> */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-800/85 via-primary-600/75 to-secondary-600/80 dark:from-gray-200/80 dark:via-gray-400/90 dark:to-gray-700/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white ">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
            Ready to start your construction project? Contact us for a free consultation and detailed
            quote tailored to your specific needs.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-white dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mx-auto">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <div
                  key={idx}
                  className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors group"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-primary-600 dark:text-white group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, i2) => (
                      <p
                        key={i2}
                        className="text-gray-600 dark:text-gray-300"
                      >
                        {info.link && i2 === 0 ? (
                          <a
                            href={info.link}
                            className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                          >
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50 dark:bg-gray-700 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                Request a Quote
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {formMsg && (
                  <div
                    className={`mt-4 text-center ${
                      formMsg.includes('Submitted')
                        ? 'text-green-600'
                        : 'text-red-500'
                    }`}
                  >
                    {formMsg}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {['name', 'email', 'phone', 'company'].map((field, i) => (
                    <div key={i}>
                      <label
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        htmlFor={field}
                      >
                        {field === 'name'
                          ? 'Full Name *'
                          : field === 'email'
                          ? 'Email Address *'
                          : field === 'phone'
                          ? 'Phone Number *'
                          : 'Company/Organization'}
                      </label>
                      <input
                        id={field}
                        name={field}
                        type={field === 'email' ? 'email' : 'text'}
                        value={(formData as any)[field]}
                        onChange={handleInputChange}
                        required={field !== 'company'}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Service Needed *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select project type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="municipal">Municipal</option>
                      <option value="industrial">Industrial</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Project Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (ASAP)</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="3-months">Within 3 months</option>
                      <option value="6-months">Within 6 months</option>
                      <option value="planning">Planning phase</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Estimated Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-50k">Under $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-250k">$100,000 - $250,000</option>
                      <option value="250k-500k">$250,000 - $500,000</option>
                      <option value="over-500k">Over $500,000</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Please describe your project requirements, location, and any specific details..."
                  />
                </div>

                {/* <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-primary-600 border-gray-300 dark:border-gray-600 rounded focus:ring-primary-500"
                  />
                  <label className="text-sm text-gray-700 dark:text-gray-300">
                    Subscribe to our newsletter for industry updates and company news
                  </label>
                </div> */}

                <button
                  type="submit"
                  className="w-full bg-primary-600 dark:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  Visit Our Office
                </h3>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                  <div className="h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <iframe
                      title="Southern Underground Office"
                      width="100%"
                      height="100%"
                      style={{
                        border: 0,
                        borderRadius: '12px',
                        minHeight: '256px',
                      }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps?q=4922+Rankin+Street,+Zachary,+LA+70791&output=embed"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      Office Location
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Our main office is conveniently located in Zachary, Louisiana,
                      serving clients throughout the region.
                    </p>
                    <a
                      href="https://maps.google.com/?q=4922+Rankin+Street+Zachary+LA+70791"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
