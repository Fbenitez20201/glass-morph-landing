
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import BusinessFeatures from '@/components/BusinessFeatures';
import SimpleSteps from '@/components/SimpleSteps';
import Security from '@/components/Security';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import SeamlessIntegrations from '@/components/ui/SeamlessIntegrations';
import WhatsappButton from '@/components/WhatsappButton';

const Index = () => {
  // Add a class to the body on mount to set the background color
  useEffect(() => {
    document.body.style.background = '#000000';
    
    // Clean up when component unmounts
    return () => {
      document.body.style.background = '';
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black ">
      <div className='overflow-hidden'>
        <Navbar />
        <div className='flex-grow pt-20'>
          <Hero />
        </div>
      </div>
      <main className="flex-grow">
        <Partners />
        <BusinessFeatures />
        <SimpleSteps />
        <SeamlessIntegrations/>
        <Security />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      
      <Footer />
      <WhatsappButton/>
    </div>
  );
};

export default Index;
