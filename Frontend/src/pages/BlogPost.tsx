import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from 'lucide-react';
import { blogPosts } from '../data/mockData';

const BlogPost: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = blogPosts.find((p) => p.id === parseInt(postId || '0'));

  if (!post) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Article Not Found
          </h1>
          <Link
            to="/blog"
            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(
      (p) =>
        p.id !== post.id &&
        p.tags.some((tag) => post.tags.includes(tag))
    )
    .slice(0, 3);

  const shareUrl = window.location.href;
  const shareTitle = post.title;

  return (
    <div className="pt-16 min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
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
              to="/blog"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            >
              Blog
            </Link>
            <span className="text-gray-400 dark:text-gray-500">/</span>
            <span className="text-gray-900 dark:text-gray-100">
              {post.title}
            </span>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-8 font-medium transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </Link>

          <article className="space-y-8">
            {/* Meta */}
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime} min read</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                {post.title}
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
                {/* Your paragraphs & headings */}
                <p>
                  The construction industry is experiencing unprecedented
                  technological advancement, fundamentally changing how we
                  approach underground utility installation and infrastructure
                  development. At Southern Underground of Louisiana, we're at the
                  forefront of these innovations, implementing cutting-edge
                  solutions that enhance efficiency, safety, and environmental
                  responsibility.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-4">
                  Revolutionary Technologies Shaping Our Industry
                </h2>

                <p>
                  Modern directional drilling has evolved far beyond traditional
                  methods. Today's GPS-guided systems provide unprecedented
                  precision, allowing us to navigate complex underground
                  environments with millimeter accuracy. These advanced
                  guidance systems integrate real-time data processing, enabling
                  our operators to make informed decisions throughout the
                  drilling process.
                </p>

                <p>
                  The integration of IoT sensors and monitoring systems has
                  transformed how we approach project management. Real-time data
                  collection provides insights into soil conditions, equipment
                  performance, and environmental factors, allowing for
                  proactive adjustments that optimize both efficiency and
                  safety outcomes.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-4">
                  Environmental Impact and Sustainability
                </h2>

                <p>
                  Environmental stewardship remains a cornerstone of modern
                  construction practices. Advanced drilling techniques
                  significantly reduce surface disruption compared to
                  traditional excavation methods. This approach preserves
                  existing landscapes, minimizes traffic disruption, and reduces
                  the overall environmental footprint of utility installation
                  projects.
                </p>

                <p>
                  Our commitment to sustainability extends beyond project
                  execution to equipment selection and operational procedures.
                  Energy-efficient machinery, waste reduction protocols, and
                  environmentally conscious material choices demonstrate our
                  dedication to responsible construction practices.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-4">
                  Looking Ahead: The Future of Construction
                </h2>

                <p>
                  As we look toward the future, emerging technologies promise
                  even greater advancements in construction efficiency and
                  capability. Artificial intelligence and machine learning
                  applications are beginning to optimize project planning and
                  execution, while advanced materials science continues to
                  develop stronger, more durable infrastructure solutions.
                </p>

                <p>
                  The construction industry's digital transformation is
                  accelerating, with Building Information Modeling (BIM) and
                  digital twin technologies providing unprecedented project
                  visualization and management capabilities. These tools enable
                  better collaboration, reduce errors, and improve overall
                  project outcomes.
                </p>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Share2 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400 font-medium">
                    Share this article:
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      shareUrl
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                      shareUrl
                    )}&text=${encodeURIComponent(shareTitle)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-500 dark:text-blue-300 dark:hover:text-blue-200 transition-colors"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      shareUrl
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Author Bio */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                About the Author
              </h3>
              <div className="flex items-start space-x-4">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt={post.author}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {post.author}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {post.author} brings over 20 years of experience in
                    construction and utility installation to Southern Underground.
                    As a licensed Professional Engineer, he specializes in project
                    management, business development, and industry innovation.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Related Articles
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                More insights from our industry experts
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article
                  key={relatedPost.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={relatedPost.featuredImage}
                    alt={relatedPost.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(
                          relatedPost.publishDate
                        ).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                    <Link
                      to={`/blog/${relatedPost.id}`}
                      className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                    >
                      Read Article →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 dark:bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-primary-100 dark:text-primary-200 mb-8 max-w-3xl mx-auto">
            Contact us to discuss how we can bring innovative construction solutions to
            your next project.
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
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
