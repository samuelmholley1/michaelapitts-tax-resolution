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
      <section className="bg-gradient-to-br from-pitts-green to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-6 text-pitts-gold">
              Meet Michaela Pitts
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Licensed Enrolled Agent since 2006 with 18 years of experience helping clients resolve their tax problems
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-b from-pitts-beige to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Professional photo */}
            <div className="order-2 lg:order-1">
              <div className="relative h-96 rounded-lg shadow-lg border-4 border-pitts-gold overflow-hidden">
                <img 
                  src="/Mikey_coast_headshot.jpg" 
                  alt="Michaela Pitts - Licensed Enrolled Agent and Tax Resolution Specialist"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-pitts-green via-pitts-green/80 to-transparent p-4">
                  <h3 className="text-xl font-headline font-bold text-white mb-1">Michaela Pitts</h3>
                  <p className="text-pitts-gold font-medium">Licensed Enrolled Agent</p>
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

      {/* Personal Touch Section */}
      <section className="py-16 bg-gradient-to-b from-white to-pitts-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Content */}
            <div>
              <h2 className="text-3xl font-headline font-bold text-pitts-green mb-6">
                More Than Just Your Tax Professional
              </h2>
              
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  When you work with Pitts Tax Resolution, you're not just getting a licensed professional—you're 
                  getting someone who truly understands what it's like to face financial challenges and come through stronger.
                </p>
                
                <p className="text-lg leading-relaxed text-gray-700">
                  Michaela and her wife Kay have built their life here in Northern California, and they understand 
                  the importance of family, community, and having someone in your corner when times get tough.
                </p>
                
                <p className="text-lg leading-relaxed text-gray-700">
                  This personal approach means you'll always get honest advice, clear communication, and the kind 
                  of dedicated service that comes from someone who genuinely cares about your success.
                </p>
              </div>
            </div>
            
            {/* Photo */}
            <div>
              <div className="relative rounded-lg shadow-lg overflow-hidden border-4 border-pitts-gold">
                <img 
                  src="/Mikey_Kay_pinkflowers.jpg" 
                  alt="Michaela and Kay - Building community connections in Northern California"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-medium">Michaela & Kay</p>
                  <p className="text-pitts-gold text-sm">Building community connections in Northern California</p>
                </div>
              </div>
            </div>
            
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
