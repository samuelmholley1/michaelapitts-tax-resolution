import React, { useState } from 'react';
import Layout from '../components/Layout';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('sending');

    try {
      // TODO: Implement actual form submission logic
      // This is a placeholder for the form submission
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch {
      setSubmitStatus('error');
    }
  };

  return (
    <Layout 
      title="Contact | Pitts Tax Resolution Services"
      description="Contact Michaela Pitts for professional tax resolution services. Free consultation available. Serving Mendocino County and Sonoma County with remote services."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pitts-green to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-6 text-pitts-gold">
              Let&apos;s Resolve This Together
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Ready to resolve your tax problems? Get in touch for your free consultation today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 bg-gradient-to-b from-pitts-beige to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-headline font-bold text-pitts-green mb-8">
                Get Your Free Consultation
              </h2>
              
              <form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                action="https://formspree.io/f/YOUR_FORM_ID" 
                method="POST"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Type of Tax Issue *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select an option</option>
                    <option value="tax-debt">IRS Tax Debt</option>
                    <option value="unfiled-returns">Unfiled Tax Returns</option>
                    <option value="audit">IRS Audit</option>
                    <option value="levy-lien">Tax Levy or Lien</option>
                    <option value="planning">Tax Planning</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please describe your tax situation and how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitStatus === 'sending'}
                  className="w-full bg-pitts-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 disabled:bg-green-400 transition-colors"
                >
                  {submitStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                    Thank you! Your message has been sent. We&apos;ll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    Sorry, there was an error sending your message. Please try again or call us directly.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-headline font-bold text-pitts-green mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-8">
                {/* Direct Contact */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-headline font-semibold text-pitts-green mb-4">
                    Get in Touch Directly
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-pitts-gold mr-3 text-xl">📧</span>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-pitts-green">pitts.mikey8@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-pitts-gold mr-3 text-xl">📞</span>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-pitts-green">(707) 555-1234</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-headline font-semibold text-pitts-green mb-3">
                    Service Areas
                  </h3>
                  <p className="text-gray-600 mb-4">
                    <strong>Local Service:</strong> Mendocino County & Sonoma County
                  </p>
                  <ul className="text-gray-600 space-y-1 ml-4">
                    <li>• Ukiah and surrounding areas</li>
                    <li>• Willits and surrounding areas</li>
                    <li>• Fort Bragg and coastal communities</li>
                    <li>• Mendocino and Anderson Valley</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    <strong>Remote Service:</strong> Available throughout California and beyond for clients who prefer virtual consultations.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-headline font-semibold text-pitts-green mb-3">
                    Why Choose Local?
                  </h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Over 18 years of tax resolution experience</li>
                    <li>• Licensed Enrolled Agent since 2006</li>
                    <li>• Free initial consultation</li>
                    <li>• Personal service - you work directly with Michaela</li>
                    <li>• Local knowledge with professional expertise</li>
                    <li>• Honest, ethical approach to tax resolution</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="py-16 bg-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-headline font-bold text-pitts-green mb-4">
              Schedule Your Free Consultation
            </h2>
            <p className="text-lg text-gray-600">
              Ready to get started? Use the calendar below to book your consultation at a time that works for you.
            </p>
          </div>
          
          {/* Calendly Embed Placeholder */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="bg-pitts-beige h-96 rounded-lg flex items-center justify-center border-2 border-dashed border-pitts-green">
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
                <p className="text-gray-500 text-xs mt-1">
                  Integration with your Calendly account
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-16 bg-pitts-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-bold text-pitts-green mb-4">
              Multiple Ways to Connect
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="bg-pitts-green p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-headline font-semibold mb-2 text-pitts-green">Email</h3>
              <p className="text-gray-600 mb-2">Send us an email anytime</p>
              <p className="text-pitts-green font-medium">pitts.mikey8@gmail.com</p>
            </div>
            
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="bg-pitts-gold p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-pitts-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-headline font-semibold mb-2 text-pitts-green">Phone</h3>
              <p className="text-gray-600 mb-2">Call during business hours</p>
              <p className="text-pitts-green font-medium">(707) 555-1234</p>
            </div>
            
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="bg-pitts-green p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-headline font-semibold mb-2 text-pitts-green">Service Area</h3>
              <p className="text-gray-600 mb-2">Local & Remote Services</p>
              <p className="text-pitts-green font-medium">Mendocino & Sonoma Counties</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
