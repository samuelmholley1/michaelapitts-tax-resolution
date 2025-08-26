'use client'

import { useEffect } from 'react'

interface BrandColors {
  primary: string
  secondary: string
}

interface CalendlyEmbedProps {
  calendlyUrl: string
  brandColors: BrandColors
  logoUrl?: string
  businessName: string
  credibilityText?: string
  headerTitle?: string
  headerSubtext?: string
  className?: string
}

export default function CalendlyEmbed({
  calendlyUrl,
  brandColors,
  logoUrl,
  businessName,
  credibilityText,
  headerTitle = "Book Your Free Consultation",
  headerSubtext = "Choose a time that works for you below.",
  className = ""
}: CalendlyEmbedProps) {
  
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = false // Load synchronously to ensure Calendly object exists
    document.head.appendChild(script)

    // Initialize Calendly after script loads
    script.onload = () => {
      const skeleton = document.getElementById('skeleton-loader')
      const embedDiv = document.getElementById('calendly-embed')
      
      if (skeleton && embedDiv) {
        // Poll for iframe to load and then hide skeleton
        const poll = () => {
          const iframe = embedDiv.querySelector('iframe')
          if (!iframe) {
            requestAnimationFrame(poll)
            return
          }
          iframe.addEventListener('load', () => {
            skeleton.remove()
          })
        }
        poll()
      }
    }

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <div className={`min-h-screen bg-white ${className}`}>
      {/* Main Content */}
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Logo Section */}
          {logoUrl && (
            <div className="text-center mb-8">
              <img 
                src={logoUrl}
                alt={`${businessName} Logo`}
                className="h-44 mx-auto"
              />
            </div>
          )}

          {/* Header */}
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-4" style={{ color: brandColors.primary }}>
              {headerTitle}
            </h1>
            <p className="text-lg mb-4" style={{ color: `${brandColors.primary}88` }}>
              {headerSubtext}
            </p>
            
            {/* Credibility Note */}
            {credibilityText && (
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <p className="text-sm text-gray-700">
                  <strong>{businessName}</strong> • {credibilityText}
                </p>
              </div>
            )}
          </div>

          {/* Calendly Container */}
          <div className="calendly-placeholder relative w-full max-w-md mx-auto p-3 bg-white rounded-xl shadow-lg min-h-[400px]">
            {/* Skeleton Loader */}
            <div id="skeleton-loader" className="absolute inset-0 z-10 flex flex-col gap-2 p-6">
              {/* Header */}
              <div className="skeleton-header mb-4">
                <div className="skeleton-shape h-6 w-2/3 mb-2 rounded" style={{ 
                  background: `linear-gradient(45deg, ${brandColors.secondary}1A 0%, ${brandColors.secondary}40 50%, ${brandColors.secondary}1A 100%)`
                }}></div>
                <div className="skeleton-shape h-7 w-1/3 rounded" style={{ 
                  background: `linear-gradient(45deg, ${brandColors.primary}40 0%, ${brandColors.primary}60 50%, ${brandColors.primary}40 100%)`
                }}></div>
              </div>
              
              {/* Month Navigation */}
              <div className="skeleton-month-nav flex justify-between items-center mb-5 px-2">
                <div className="skeleton-nav-arrow w-4 h-4 rounded-full opacity-20" style={{ 
                  background: `linear-gradient(45deg, ${brandColors.secondary} 0%, ${brandColors.secondary}CC 100%)`
                }}></div>
                <div className="skeleton-shape h-5 w-1/4 opacity-20 rounded" style={{ 
                  background: `linear-gradient(45deg, ${brandColors.primary} 0%, #4A5568 100%)`
                }}></div>
                <div className="skeleton-nav-arrow w-4 h-4 rounded-full opacity-20" style={{ 
                  background: `linear-gradient(45deg, ${brandColors.secondary} 0%, ${brandColors.secondary}CC 100%)`
                }}></div>
              </div>
              
              {/* Weekdays */}
              <div className="skeleton-weekdays grid grid-cols-7 gap-1 mb-2 px-1">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div key={i} className="skeleton-weekday h-2 w-3/4 mx-auto opacity-25 rounded" style={{ 
                    background: `linear-gradient(45deg, #4A5568 0%, ${brandColors.primary} 100%)`
                  }}></div>
                ))}
              </div>
              
              {/* Calendar Grid */}
              <div className="skeleton-calendar-grid grid grid-cols-7 gap-1 flex-grow px-1">
                {Array.from({ length: 42 }).map((_, i) => (
                  <div 
                    key={i} 
                    className={`skeleton-date-box h-4 rounded border relative overflow-hidden ${
                      i % 7 === 2 || i % 7 === 5 
                        ? `border-opacity-15` 
                        : 'bg-gradient-to-br from-gray-50 to-gray-200 border-opacity-8'
                    }`}
                    style={{
                      backgroundColor: i % 7 === 2 || i % 7 === 5 ? `${brandColors.secondary}08` : undefined,
                      borderColor: i % 7 === 2 || i % 7 === 5 ? `${brandColors.secondary}26` : `${brandColors.primary}14`
                    }}
                  >
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-opacity-10 to-transparent animate-pulse"
                      style={{ 
                        animation: `shimmer 3s infinite ease-in-out ${i * 0.1}s`,
                        left: '-100%',
                        animationName: 'shimmer',
                        background: `linear-gradient(45deg, transparent 30%, ${brandColors.secondary}1A 50%, transparent 70%)`
                      }}
                    ></div>
                  </div>
                ))}
              </div>
              
              {/* Footer */}
              <div className="skeleton-footer mt-7 px-2">
                <div className="skeleton-shape h-3 w-full opacity-20 rounded" style={{ 
                  background: `linear-gradient(45deg, #4A5568 0%, ${brandColors.primary} 100%)`
                }}></div>
              </div>
            </div>

            {/* Calendly Widget */}
            <div 
              id="calendly-embed"
              className="calendly-inline-widget"
              data-url={calendlyUrl}
              data-resize="true"
              style={{ minWidth: '320px' }}
            ></div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8" style={{ backgroundColor: brandColors.primary }}>
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-white">© 2025 {businessName}. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        .skeleton-shape {
          position: relative;
          overflow: hidden;
        }
        
        .skeleton-shape::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            45deg,
            transparent 30%,
            ${brandColors.secondary}1A 50%,
            transparent 70%
          );
          animation: skeleton-shimmer 3s infinite ease-in-out;
        }
        
        @keyframes skeleton-shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        .calendly-placeholder {
          display: flex;
          flex-direction: column;
          gap: 8px;
          min-height: 400px;
        }
        
        #calendly-embed {
          min-width: 220px;
          width: 100%;
        }
      ` }} />
    </div>
  )
}
