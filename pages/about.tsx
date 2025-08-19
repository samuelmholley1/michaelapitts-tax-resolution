import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const AboutPage: React.FC = () => {
  return (
    <Layout 
      title="About Michaela Pitts | Pitts Tax Resolution Services"
      description="Meet Michaela Pitts, Licensed Enrolled Agent since 2006 with 18 years of experience in tax resolution. Personal, ethical service for Mendocino County."
    >
      {/* Hero Section */}
      <section className="bg-hero-pattern text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-6">
              Meet Michaela Pitts
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Licensed Enrolled Agent since 2006 with 18 years of experience helping clients resolve their tax problems
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-section-pattern">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo placeholder */}
            <div className="order-2 lg:order-1">
              <div className="bg-pitts-beige h-96 rounded-lg flex items-center justify-center shadow-lg border-4 border-white">
                <div className="text-center">
                  <div className="text-pitts-green mb-4">
                    <svg className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className="text-pitts-green font-medium">Professional Photo of Michaela Pitts</span>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-headline font-bold text-pitts-green mb-6">
                Your Neighbor, Your Advocate
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-700">
                  Michaela Pitts is an Enrolled Agent with 18 years of experience resolving IRS and state tax issues. 
                  Since 2006, she has saved her clients over $250,000 in taxes and penalties.
                </p>
                
                <p className="text-lg leading-relaxed text-gray-700">
                  What sets Michaela apart isn&apos;t just her expertise—it&apos;s her approach. She&apos;s helpful, understanding, 
                  experienced, ethical, honest, caring, and brings a sense of humor that makes even the most stressful 
                  tax situations manageable.
                </p>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-pitts-gold">
                  <p className="text-xl font-headline italic text-pitts-green mb-3">
                    &ldquo;Big corporations treat you like a number. Michaela treats you like a neighbor.&rdquo;
                  </p>
                  <p className="text-gray-600">
                    When you work with Pitts Tax Resolution Services, you&apos;re not just another case file. 
                    You&apos;re a person with real problems that deserve real solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Values */}
      <section className="py-16 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-bold text-pitts-green mb-4">
              Experience You Can Trust
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center border-t-4 border-pitts-green">
              <div className="text-4xl font-bold text-pitts-green mb-3">2006</div>
              <h3 className="text-xl font-headline font-semibold mb-2">Licensed Since</h3>
              <p className="text-gray-600">
                Enrolled Agent licensed by the IRS to represent taxpayers
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center border-t-4 border-pitts-gold">
              <div className="text-4xl font-bold text-pitts-green mb-3">18</div>
              <h3 className="text-xl font-headline font-semibold mb-2">Years Experience</h3>
              <p className="text-gray-600">
                Nearly two decades helping clients resolve complex tax issues
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center border-t-4 border-pitts-green">
              <div className="text-4xl font-bold text-pitts-green mb-3">$250K+</div>
              <h3 className="text-xl font-headline font-semibold mb-2">Client Savings</h3>
              <p className="text-gray-600">
                Total saved in taxes and penalties for clients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Approach */}
      <section className="py-16 bg-pitts-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-bold text-pitts-green mb-4">
              The Pitts Difference
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What makes working with Michaela different from the big tax resolution companies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-headline font-semibold mb-4 text-pitts-green flex items-center">
                <span className="mr-2">🤝</span> Personal & Caring
              </h3>
              <p className="text-gray-600 leading-relaxed">
                You'll work directly with Michaela, not a call center. She takes the time to understand 
                your unique situation and treats you with the respect and care you deserve.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-headline font-semibold mb-4 text-pitts-green flex items-center">
                <span className="mr-2">💯</span> Honest & Ethical
              </h3>
              <p className="text-gray-600 leading-relaxed">
                No false promises or unrealistic expectations. Michaela will give you the truth about 
                your situation and work toward realistic, achievable solutions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-headline font-semibold mb-4 text-pitts-green flex items-center">
                <span className="mr-2">🎯</span> Experienced & Knowledgeable
              </h3>
              <p className="text-gray-600 leading-relaxed">
                With 18 years of experience and ongoing education requirements as an Enrolled Agent, 
                Michaela stays current on tax law changes and resolution strategies.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-headline font-semibold mb-4 text-pitts-green flex items-center">
                <span className="mr-2">😊</span> Understanding & Supportive
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tax problems are stressful enough. Michaela brings a sense of humor and understanding 
                that helps make the process as comfortable as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Connection */}
      <section className="py-16 bg-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-headline font-bold text-pitts-green mb-6">
            Proudly Serving Mendocino County
          </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                As a local resident and business owner, Michaela understands the unique challenges facing 
                individuals and small businesses in our community. She&apos;s committed to providing the same 
                level of service she&apos;d want for her own family and neighbors.
              </p>          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg font-medium text-pitts-green mb-2">
              Service Areas Include:
            </p>
            <p className="text-gray-600">
              Mendocino County • Sonoma County • Remote consultations available
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-pitts-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-headline font-bold mb-4">
            Ready to Work with Someone Who Cares?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the difference of working with a local professional who treats you like family, 
            not just another case number.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link
              href="/#contact"
              className="bg-pitts-gold text-pitts-green px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors inline-block"
            >
              Schedule Free Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-pitts-green transition-colors inline-block"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
