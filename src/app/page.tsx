'use client';

import { useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Reveal from '@/components/ui/Reveal';

// Dynamically import heavy components
const Hero = dynamic(() => import('@/components/sections/Hero'), { 
  loading: () => <div className="h-screen bg-gray-100" /> 
});
const About = dynamic(() => import('@/components/sections/About'));
const Services = dynamic(() => import('@/components/sections/Services'));
const DeveloperLogos = dynamic(() => import('@/components/sections/DeveloperLogos'));
const InstagramReels = dynamic(() => import('@/components/sections/InstagramReels'));
import FeaturedProperty from '@/components/sections/FeaturedProperty';
const NewsletterCard = dynamic(() => import('@/components/ui/NewsletterCard'));

export default function Home() {
  // Add smooth scrolling for anchor links
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Smooth scroll for anchor links
      document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e: MouseEvent) => {
          e.preventDefault();
          const targetId = anchor.getAttribute('href');
          if (!targetId || targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.pageYOffset - 80, // Account for header height
              behavior: 'smooth' as ScrollBehavior
            });
          }
        });
      });
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="relative flex-grow">
        <div className="fixed top-0 left-0 w-full h-screen z-0">
          <Suspense fallback={
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <div className="animate-pulse">Loading...</div>
            </div>
          }>
            <Hero />
          </Suspense>
        </div>
        <div className="relative z-10 bg-white min-h-screen" style={{ marginTop: '100vh' }}>
          <main className="flex-grow">
            <Suspense fallback={<div className="h-96" />}>
              <Reveal variant="fade-up">
                <About />
              </Reveal>
              <Services />
              <Reveal variant="fade-up">
                <DeveloperLogos />
              </Reveal>
              <Reveal variant="fade-up">
                <InstagramReels />
              </Reveal>
              
              {/* Newsletter Section */}
              <Reveal as="section" className="py-20 bg-gradient-to-b from-white to-gray-50" variant="fade-up">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Stay Updated</h2>
                    <p className="mt-4 text-xl text-gray-600">Subscribe to our newsletter for the latest updates and insights</p>
                  </div>
                  <NewsletterCard className="mt-8" />
                </div>
              </Reveal>
              
              <FeaturedProperty />
            </Suspense>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
