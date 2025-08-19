import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

const HomePage: React.FC = () => {
  return (
    <Layout 
      title="Home | Pitts Tax Resolution Services"
      description="Tax problems are the Pitts. We can help. Personal, ethical tax resolution for Mendocino County. Licensed Enrolled Agent with 18 years of experience."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pitts-green to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Logo and Company Name */}
            <div className="mb-8">
              <img 
                src="/logo.png" 
                alt="Pitts Tax Resolution Services Logo - Black hole with green and gold dollar sign labyrinth" 
                className="h-16 w-auto mx-auto mb-4"
                onError={(e) => {
                  // Fallback if logo doesn't exist yet
                  e.currentTarget.style.display = 'none';
                }}
              />
              <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4">
                Pitts Tax Resolution Services
              </h1>
              <p className="text-2xl md:text-3xl font-headline italic text-pitts-gold mb-6">
                &ldquo;Tax problems are the Pitts. We can help.&rdquo;
              </p>
            </div>
            
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Personal, ethical tax resolution for Mendocino County.
            </p>
            
            <Link
              href="#contact"
              className="bg-pitts-gold text-pitts-green px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors inline-block shadow-lg"
            >
              Book Your Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-b from-pitts-beige to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-headline font-bold text-pitts-green mb-6">
              Meet Michaela
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo placeholder */}
            <div className="order-2 lg:order-1">
              <div className="bg-pitts-beige h-80 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-pitts-green font-medium">Professional Photo of Michaela Pitts</span>
              </div>
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="prose-custom space-y-6">
                <p className="text-lg leading-relaxed">
                  Michaela Pitts is an Enrolled Agent with 18 years of experience resolving IRS and state tax issues. 
                  Since 2006, she has saved her clients over $250,000 in taxes and penalties.
                </p>
                
                <p className="text-lg leading-relaxed">
                  What sets Michaela apart is her approach: helpful, understanding, experienced, ethical, honest, 
                  caring, and with a sense of humor that makes even the most stressful tax situations manageable.
                </p>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-pitts-gold">
                  <p className="text-lg font-medium text-pitts-green italic">
                    &ldquo;Big corporations treat you like a number. Michaela treats you like a neighbor.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - How It Works */}
      <section id="services" className="py-16 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-headline font-bold text-pitts-green mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our simple three-step process to resolve your tax problems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center border-t-4 border-pitts-green">
              <div className="bg-pitts-green text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">
                <span>📞</span>
              </div>
              <h3 className="text-xl font-headline font-semibold mb-4 text-pitts-green">
                1. Consultation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Free initial call to understand your situation. We'll listen to your concerns 
                and explain your options in plain English.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center border-t-4 border-pitts-gold">
              <div className="bg-pitts-gold text-pitts-green rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">
                <span>🤝</span>
              </div>
              <h3 className="text-xl font-headline font-semibold mb-4 text-pitts-green">
                2. Negotiation & Research
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We communicate with the IRS on your behalf, research your case thoroughly, 
                and negotiate the best possible resolution.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center border-t-4 border-pitts-green">
              <div className="bg-pitts-green text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">
                <span>✅</span>
              </div>
              <h3 className="text-xl font-headline font-semibold mb-4 text-pitts-green">
                3. Resolution
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We resolve your tax debt and create strategies to avoid future problems, 
                giving you peace of mind and a fresh start.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-pitts-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-headline font-bold text-pitts-green mb-4">
              What Clients Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-pitts-gold text-2xl mb-4">"</div>
              <p className="text-gray-700 italic mb-4 leading-relaxed">
                Michaela made me feel at ease during a stressful time. She explained everything 
                clearly and handled all the paperwork with the IRS. I couldn't have asked for 
                better service.
              </p>
              <p className="text-pitts-green font-semibold">— Local Client</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-pitts-gold text-2xl mb-4">"</div>
              <p className="text-gray-700 italic mb-4 leading-relaxed">
                She saved me thousands and treated me with respect throughout the entire process. 
                Michaela really cares about her clients and it shows in her work.
              </p>
              <p className="text-pitts-green font-semibold">— Small Business Owner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Calendly Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-headline font-bold text-pitts-green mb-4">
              Let's Resolve This Together
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Schedule your free consultation and take the first step toward resolving your tax problems
            </p>
          </div>
          
          {/* Calendly Embed Placeholder */}
          <div className="bg-pitts-beige rounded-lg shadow-lg p-8 mb-12">
            <div className="bg-white h-96 rounded-lg flex items-center justify-center border-2 border-dashed border-pitts-green">
              <div className="text-center">
                <div className="text-pitts-green mb-4">
                  <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-pitts-green text-lg font-medium">
                  Calendly Scheduling Widget
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Free consultation booking will be embedded here
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-pitts-green text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="text-lg font-headline font-semibold mb-2 text-pitts-green">Email</h3>
              <p className="text-gray-600">pitts.mikey8@gmail.com</p>
            </div>
            
            <div>
              <div className="bg-pitts-gold text-pitts-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-lg font-headline font-semibold mb-2 text-pitts-green">Phone</h3>
              <p className="text-gray-600">(707) 555-1234</p>
            </div>
            
            <div>
              <div className="bg-pitts-green text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-lg font-headline font-semibold mb-2 text-pitts-green">Service Area</h3>
              <p className="text-gray-600">Mendocino & Sonoma Counties</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Contact Form */}
      <section className="py-16 bg-section-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-headline font-bold text-pitts-green mb-6 text-center">
              Or Send Us a Message
            </h3>
            
            <form className="space-y-6" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pitts-green focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pitts-green focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell Us About Your Tax Situation *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pitts-green focus:border-transparent"
                  placeholder="Describe your tax issues and how we can help..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-pitts-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
