import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const ServicesPage: React.FC = () => {
  return (
    <Layout 
      title="Tax Resolution Services | Pitts Tax Resolution Services"
      description="Comprehensive tax resolution services including IRS debt relief, unfiled returns, tax planning, and IRS representation. Serving Mendocino County and Sonoma County."
    >
      {/* Hero Section */}
      <section className="bg-hero-pattern text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-6">
              Tax Resolution Services
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Comprehensive solutions to resolve your tax problems and get your life back on track
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* IRS Tax Debt Relief */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                IRS Tax Debt Relief
              </h2>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Installment Agreement negotiations
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Offer in Compromise submissions
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Penalty and interest abatement
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Currently Not Collectible status
                </li>
              </ul>
            </div>

            {/* Unfiled Tax Returns */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Unfiled Tax Returns
              </h2>
              <p className="text-gray-600 mb-6">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Individual tax return preparation
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Business tax return filing
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Multi-year compliance catch-up
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Substitute for Return replacements
                </li>
              </ul>
            </div>

            {/* IRS Representation */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                IRS Representation
              </h2>
              <p className="text-gray-600 mb-6">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Audit representation and support
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Collection appeals process
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Levy and lien release
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Innocent spouse relief
                </li>
              </ul>
            </div>

            {/* Tax Planning */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Tax Planning & Compliance
              </h2>
              <p className="text-gray-600 mb-6">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Strategic tax planning
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Quarterly estimated payments
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Business entity structuring
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Compliance monitoring
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How We Work Together
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our proven process ensures the best possible outcome for your tax situation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Free Consultation</h3>
              <p className="text-gray-600">
                We review your tax situation, explain your options, and provide an honest 
                assessment of your case during a complimentary consultation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Custom Strategy</h3>
              <p className="text-gray-600">
                We develop a personalized plan tailored to your specific circumstances, 
                focusing on the most effective resolution methods for your case.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Implementation & Resolution</h3>
              <p className="text-gray-600">
                We handle all communications with the IRS, implement the agreed strategy, 
                and keep you informed throughout the entire resolution process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">
                Why should I use a tax resolution service?
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">
                How long does the tax resolution process take?
              </h3>
              <p className="text-gray-600">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">
                What makes an Enrolled Agent different?
              </h3>
              <p className="text-gray-600">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                veritatis et quasi architecto.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">
                Do you offer remote services?
              </h3>
              <p className="text-gray-600">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Resolve Your Tax Problems?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't let tax issues overwhelm you. Get professional help and peace of mind today.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Get Your Free Consultation
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
