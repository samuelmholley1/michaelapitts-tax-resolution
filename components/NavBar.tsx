import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActivePage = (href: string) => {
    return router.pathname === href;
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <img 
                src="/logo.png" 
                alt="Pitts Tax Resolution Services Logo" 
                className="h-10 w-auto mr-3"
              />
              <span className="text-xl font-headline font-bold text-pitts-green">
                Pitts Tax Resolution Services
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActivePage(item.href)
                    ? 'text-pitts-green bg-pitts-beige'
                    : 'text-gray-700 hover:text-pitts-green hover:bg-pitts-beige'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-pitts-green text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-800 transition-colors"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-pitts-green focus:outline-none focus:text-pitts-green"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActivePage(item.href)
                      ? 'text-pitts-green bg-pitts-beige'
                      : 'text-gray-700 hover:text-pitts-green hover:bg-pitts-beige'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block bg-pitts-green text-white px-3 py-2 rounded-md text-base font-medium hover:bg-green-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Free Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
