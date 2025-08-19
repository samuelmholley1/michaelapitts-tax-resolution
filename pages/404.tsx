import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const NotFoundPage: React.FC = () => {
  return (
    <Layout 
      title="Page Not Found | It's The Pitts Tax Resolution"
      description="The page you're looking for doesn't exist. Return to our homepage or contact us for help."
    >
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Sorry, the page you're looking for doesn't exist. It might have been moved, 
              deleted, or you entered the wrong URL.
            </p>
          </div>
          
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link
              href="/"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              Go Home
            </Link>
            <Link
              href="/contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors inline-block"
            >
              Contact Us
            </Link>
          </div>
          
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Looking for help with tax problems?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-blue-600 hover:text-blue-800 transition-colors">
                About Michaela
              </Link>
              <Link href="/services" className="text-blue-600 hover:text-blue-800 transition-colors">
                Our Services
              </Link>
              <Link href="/contact" className="text-blue-600 hover:text-blue-800 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFoundPage;
