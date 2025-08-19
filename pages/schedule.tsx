import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';

const SchedulePage: React.FC = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Layout 
      title="Schedule Consultation | Pitts Tax Resolution Services"
      description="Schedule your free 30-minute tax consultation with Michaela Pitts, Licensed Enrolled Agent. Convenient online booking for tax resolution services."
    >
      <Head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </Head>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pitts-green to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-6 text-pitts-gold">
              Schedule Your Free Consultation
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Book a 30-minute consultation with Michaela Pitts to discuss your tax situation and explore solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="py-16 bg-gradient-to-b from-pitts-beige to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-headline font-bold text-pitts-green mb-4">
              Choose Your Preferred Time
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Select a convenient time for your free consultation. We'll discuss your tax situation confidentially 
              and explore the best options for resolving your tax issues.
            </p>
          </div>

          {/* Calendly Widget Container */}
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-8">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/pittstaxresolution/30min" 
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>

          {/* Additional Information */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-pitts-green mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-headline font-semibold mb-3 text-pitts-green">
                What to Expect
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Free 30-minute consultation</li>
                <li>• Confidential discussion of your tax situation</li>
                <li>• Overview of available solutions</li>
                <li>• No obligation or pressure</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-pitts-green mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-headline font-semibold mb-3 text-pitts-green">
                Come Prepared
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Recent tax notices from IRS/state</li>
                <li>• Summary of your tax debt situation</li>
                <li>• Questions about your specific case</li>
                <li>• Basic financial information (if comfortable sharing)</li>
              </ul>
            </div>
          </div>

          {/* Contact Alternative */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Having trouble with the scheduler? Contact us directly:
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a 
                href="tel:+1-707-555-0123" 
                className="bg-pitts-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
              >
                Call (707) 555-0123
              </a>
              <a 
                href="mailto:michaela@pittstaxresolution.com" 
                className="bg-pitts-gold text-pitts-green px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-pitts-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-headline font-bold mb-4">
            Why Choose Pitts Tax Resolution?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div>
              <div className="text-pitts-gold text-3xl font-bold mb-2">18</div>
              <p className="text-green-100">Years of Experience</p>
            </div>
            <div>
              <div className="text-pitts-gold text-3xl font-bold mb-2">$250K+</div>
              <p className="text-green-100">Saved for Clients</p>
            </div>
            <div>
              <div className="text-pitts-gold text-3xl font-bold mb-2">100%</div>
              <p className="text-green-100">Confidential & Ethical</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SchedulePage;
