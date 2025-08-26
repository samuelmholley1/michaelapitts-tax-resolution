import React from 'react';
import Layout from '../components/Layout';
import CalendlyEmbed from '../components/CalendlyEmbed';

const SchedulePage: React.FC = () => {
  return (
    <Layout 
      title="Schedule Consultation | Pitts Tax Resolution Services"
      description="Schedule your free 30-minute tax consultation with Michaela Pitts, Licensed Enrolled Agent. Convenient online booking for tax resolution services."
    >
      {/* Use the professional CalendlyEmbed component */}
      <CalendlyEmbed
        calendlyUrl="https://calendly.com/pittstaxresolution/30min"
        brandColors={{
          primary: "#1a472a",
          secondary: "#d4af37"
        }}
        logoUrl="/logo.png"
        businessName="Pitts Tax Resolution Services"
        credibilityText="18 years experience • $250K+ saved for clients • Licensed Enrolled Agent since 2006"
        headerTitle="Schedule Your Free Tax Consultation"
        headerSubtext="Book a 30-minute consultation with Michaela Pitts to discuss your tax situation and explore solutions."
        className=""
      />
    </Layout>
  );
};

export default SchedulePage;
