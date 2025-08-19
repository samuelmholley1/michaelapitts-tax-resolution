import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-pitts-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-headline font-bold mb-4">Pitts Tax Resolution Services</h3>
            <p className="text-green-100 mb-2 italic">
              "Tax problems are the Pitts. We can help."
            </p>
            <p className="text-green-200 text-sm">
              Personal, ethical tax resolution for Mendocino County.
            </p>
            <p className="text-green-200 text-sm mt-2">
              Licensed Enrolled Agent since 2006
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-green-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-green-200 hover:text-white transition-colors">
                  About Michaela
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-green-200 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-green-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-headline font-bold mb-4">Contact Information</h3>
            <div className="space-y-2 text-green-200">
              <p>📧 pitts.mikey8@gmail.com</p>
              <p>📞 (707) 555-1234</p>
              <p className="pt-2">Serving Mendocino County & Sonoma County</p>
              <p>Remote consultations available</p>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p className="text-green-200 text-sm">
            © 2025 Pitts Tax Resolution Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
