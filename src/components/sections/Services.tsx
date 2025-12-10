import React, { useState } from 'react';
import { Home, TrendingUp, Key } from 'lucide-react';
import { useEffect } from 'react';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';

interface ServiceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  expandedContent?: React.ReactNode;
  buttonText?: string;
}

// Small SVG bullet icon used in service lists
const BulletItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start gap-3">
    <svg
      className="mt-1 h-4 w-4 text-forest flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M10 1.667c4.602 0 8.333 3.731 8.333 8.333 0 4.602-3.731 8.333-8.333 8.333-4.602 0-8.333-3.731-8.333-8.333 0-4.602 3.731-8.333 8.333-8.333Zm3.74 6.297a.833.833 0 0 0-1.18-1.18L9.167 10.177 7.44 8.45a.833.833 0 1 0-1.18 1.178l2.333 2.333a.833.833 0 0 0 1.178 0l3.969-3.997Z" />
    </svg>
    <span className="text-gray-700">{children}</span>
  </li>
);

const services: ServiceCard[] = [
  {
    title: 'Buying',
    description: 'Find your dream property with our expert buying assistance and exclusive listings.',
    icon: <Home className="w-8 h-8 text-forest" />,
    color: 'bg-forest/10',
    expandedContent: (
      <div className="mt-4 text-left">
        <p className="text-gray-600 mb-4">
          We know that buying a home is one of the biggest and most emotional decisions of your life – we&apos;ll make it as seamless as possible.
        </p>
       
        <div className="space-y-2 mb-4">
          <p className="font-medium text-forest">We are able to:</p>
          <ul className="space-y-2">
            <BulletItem>Provide accurate information</BulletItem>
            <BulletItem>Make connections</BulletItem>
            <BulletItem>Strongly negotiate</BulletItem>
            <BulletItem>Share local expertise</BulletItem>
            <BulletItem>Strategize on pricing</BulletItem>
          </ul>
        </div>
      </div>
    ),
    buttonText: 'Start Your Journey',
  },
  {
    title: 'Selling',
    description: 'Maximize your property value with our professional selling services and market expertise.',
    icon: <TrendingUp className="w-8 h-8 text-gold" />,
    color: 'bg-gold/10',
    expandedContent: (
      <div className="mt-4 text-left">
        <p className="text-gray-600 mb-4">
          There&apos;s a lot of information out there which can seem overwhelming — before you commit, get a feel for the process. Selling your home doesn&apos;t have to disrupt your life.
        </p>
       
        <div className="space-y-2 mb-4">
          <ul className="space-y-2">
            <BulletItem>Make connections</BulletItem>
            <BulletItem>Strongly negotiate</BulletItem>
            <BulletItem>Be readily available</BulletItem>
            <BulletItem>Offer market insights</BulletItem>
            <BulletItem>Prepare your property</BulletItem>
            <BulletItem>Strategize on pricing</BulletItem>
          </ul>
        </div>
      </div>
    ),
    buttonText: 'Sell My Property',
  },
  {
    title: 'Renting',
    description: 'Discover the perfect rental property with our extensive portfolio and personalized service.',
    icon: <Key className="w-8 h-8 text-forest" />,
    color: 'bg-forest/10',
    expandedContent: (
      <div className="mt-4 text-left">
        <p className="text-gray-600 mb-4">
          Finding the right rental property can be challenging, whether you&apos;re new to the area or looking to upgrade. We make the process simple and stress-free with our comprehensive rental services.
        </p>
       
        <div className="space-y-2 mb-4">
          <p className="font-medium text-forest">Our rental services include:</p>
          <ul className="space-y-2">
            <BulletItem>Personalized property search</BulletItem>
            <BulletItem>Neighborhood insights</BulletItem>
            <BulletItem>Lease negotiation</BulletItem>
            <BulletItem>Rental application assistance</BulletItem>
            <BulletItem>Move-in coordination</BulletItem>
            <BulletItem>Ongoing tenant support</BulletItem>
          </ul>
        </div>
      </div>
    ),
    buttonText: 'Find My Rental',
  },
];

export default function Services() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(true); // Start with mobile first
  
  useEffect(() => {
    // This code runs only on the client side
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };
  return (
    <Reveal as="section" className="py-16 bg-gray-50" variant="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="fade-up" delay={80}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-forest">Our Services</h2>
            <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Comprehensive real estate solutions tailored to your needs, whether you&apos;re buying, selling, or renting.
            </p>
          </div>
        </Reveal>

        <Reveal variant="fade-up">
          <div className="mt-12 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 md:mx-0 md:px-0">
            {services.map((service, index) => (
              <Reveal key={index} variant="zoom-in" delay={index * 80}>
                <div 
                  className={`group bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:shadow-md hover:-translate-y-1 flex-shrink-0 w-[300px] sm:w-[340px] md:w-auto snap-start ${
                    expandedCard === index ? 'shadow-md -translate-y-1 ring-1 ring-forest/20' : ''
                  }`}
                >
                  <div 
                    className="p-6 md:p-8 h-full flex flex-col transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                    onMouseEnter={!isMobile ? () => setExpandedCard(index) : undefined}
                    onMouseLeave={!isMobile ? () => setExpandedCard(null) : undefined}
                    onClick={() => isMobile && toggleCard(index)}
                  >
                    <div className="flex-grow cursor-pointer">
                      <div className={`w-14 h-14 md:w-16 md:h-16 ${service.color} rounded-full flex items-center justify-center mb-5 md:mb-6`}>
                        {service.icon}
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{service.title}</h3>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">{service.description}</p>
                    </div>
                    
                    <div 
                      className={`mt-4 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] overflow-hidden ${
                        expandedCard === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      {service.expandedContent}
                    </div>
                    
                    {service.buttonText && (
                      <div 
                        className="mt-6 text-center"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button 
                          className="px-5 py-2 md:px-6 md:py-2 bg-forest text-white rounded-lg hover:bg-gold hover:text-dark transition-colors duration-300"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.location.href = '/contact';
                          }}
                        >
                          {service.buttonText}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal variant="fade-up" delay={120}>
          <div className="text-center mt-12">
            <Link 
              href="/services"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-forest hover:bg-gold hover:text-dark transition-colors duration-300"
            >
              View All Services
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </Reveal>
      </div>
    </Reveal>
  );
}
