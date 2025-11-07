import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, Search, Tag } from 'lucide-react';
import { blogPosts } from '../data/mockData';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  const allTags = ['All', ...Array.from(new Set(blogPosts.flatMap(post => post.tags)))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 pt-16">
      {/* Hero Section */}
      <section className="relative py-20 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/fleur-dQf7RZhMOJU-unsplash.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Industry <span className="text-secondary-400">Insights</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stay informed with the latest construction industry news, project updates, and expert insights from our team
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800 border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            {/* Tag Filter */}
            <div className="flex items-center space-x-4">
              <Tag className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <div className="flex flex-wrap gap-2">
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedTag === tag
                        ? 'bg-primary-600 text-white'
                        : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 dark:text-gray-400">No articles found matching your criteria.</p>
            </div>
          ) : (
            <>
              {/* Featured Post */}
              {filteredPosts[0] && (
                <div className="mb-16">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">Featured Article</h2>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <div className="relative">
                        <img
                          src={filteredPosts[0].featuredImage}
                          alt={filteredPosts[0].title}
                          className="w-full h-64 lg:h-full object-cover"
                        />
                        <div className="absolute top-6 left-6">
                          <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Featured
                          </span>
                        </div>
                      </div>

                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="space-y-6">
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(filteredPosts[0].publishDate).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <User className="w-4 h-4" />
                              <span>{filteredPosts[0].author}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4" />
                              <span>{filteredPosts[0].readTime} min read</span>
                            </div>
                          </div>

                          <div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                              {filteredPosts[0].title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                              {filteredPosts[0].excerpt}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {filteredPosts[0].tags.map(tag => (
                              <span key={tag} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm">
                                {tag}
                              </span>
                            ))}
                          </div>

                          <Link
                            to={`/blog/${filteredPosts[0].id}`}
                            className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                          >
                            Read Full Article
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Other Posts */}
              {filteredPosts.length > 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">Latest Articles</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.slice(1).map((post, index) => (
                      <article
                        key={post.id}
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 group"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="relative">
                          <img
                            src={post.featuredImage}
                            alt={post.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        <div className="p-6 space-y-4">
                          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{post.readTime} min</span>
                            </div>
                          </div>

                          <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                              {post.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                              {post.excerpt}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 2).map(tag => (
                              <span key={tag} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-2 py-1 rounded text-xs">
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                              <User className="w-4 h-4" />
                              <span>{post.author}</span>
                            </div>
                            <Link
                              to={`/blog/${post.id}`}
                              className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                            >
                              Read More →
                            </Link>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary-600 dark:bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-primary-100 dark:text-primary-200 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter for the latest industry insights, project updates, and construction news delivered to your inbox.
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 dark:text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary-500"
            />
            <button className="bg-secondary-500 dark:bg-secondary-600 text-white px-6 py-3 rounded-r-lg font-semibold hover:bg-secondary-600 dark:hover:bg-secondary-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
