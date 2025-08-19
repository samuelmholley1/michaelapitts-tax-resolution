import React from 'react';
import Link from 'next/link';

interface CTABannerProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  bgColor?: 'blue' | 'gray' | 'white';
}

const CTABanner: React.FC<CTABannerProps> = ({
  title,
  description,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  bgColor = 'blue'
}) => {
  const getBgClass = () => {
    switch (bgColor) {
      case 'gray':
        return 'bg-gray-900 text-white';
      case 'white':
        return 'bg-white text-gray-900';
      default:
        return 'bg-blue-900 text-white';
    }
  };

  const getPrimaryButtonClass = () => {
    switch (bgColor) {
      case 'white':
        return 'bg-blue-600 text-white hover:bg-blue-700';
      default:
        return 'bg-white text-blue-900 hover:bg-gray-100';
    }
  };

  const getSecondaryButtonClass = () => {
    switch (bgColor) {
      case 'white':
        return 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white';
      default:
        return 'border-2 border-white text-white hover:bg-white hover:text-blue-900';
    }
  };

  return (
    <section className={`py-16 ${getBgClass()}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Link
            href={primaryButtonHref}
            className={`px-8 py-3 rounded-lg text-lg font-semibold transition-colors inline-block ${getPrimaryButtonClass()}`}
          >
            {primaryButtonText}
          </Link>
          {secondaryButtonText && secondaryButtonHref && (
            <Link
              href={secondaryButtonHref}
              className={`px-8 py-3 rounded-lg text-lg font-semibold transition-colors inline-block ${getSecondaryButtonClass()}`}
            >
              {secondaryButtonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
