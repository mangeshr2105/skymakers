'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';

const binghattiPinnacle = {
  id: "binghatti-pinnacle",
  name: "Binghatti Pinnacle",
  description: "Binghatti Pinnacle at Al Jaddaf offers panoramic Dubai skyline and unobstructed Burj Khalifa views, with interiors and amenities designed for luxury-centric living.",
  configuration: "1, 2 and 3 BHK Apartments",
  price: "Starting from AED 1,350,000",
  image: "/images/properties/binghatti-pinnacle.webp",
  location: "Al Jaddaf, Dubai"
};

export default function FeaturedProperty() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Reveal as="section" className="py-16 bg-white" variant="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-xl">
          <div className="md:flex">
            <div className="md:flex-shrink-0 md:w-1/2 relative h-80 md:h-auto">
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
              )}
              <Image
                src={binghattiPinnacle.image}
                alt={binghattiPinnacle.name}
                fill
                className={`object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                onLoadingComplete={() => setImageLoaded(true)}
              />
            </div>
            <div className="p-8 md:p-12">
              <div className="uppercase tracking-wide text-sm text-forest font-semibold">
                Featured Property
              </div>
              <h2 className="mt-2 text-3xl font-bold text-gray-900 font-serif">
                {binghattiPinnacle.name}
              </h2>
              <p className="mt-4 text-gray-600">
                {binghattiPinnacle.description}
              </p>
              <div className="mt-6">
                <div className="flex items-center">
                  <div>
                    <p className="text-2xl font-bold text-forest">
                      {binghattiPinnacle.price}
                    </p>
                    <p className="text-gray-500 mt-1">
                      {binghattiPinnacle.configuration} • {binghattiPinnacle.location}
                    </p>
                  </div>
                </div>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-forest hover:bg-gold hover:text-dark transition-colors"
                    prefetch={false}
                  >
                    View Property Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/properties"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-forest hover:bg-gold hover:text-dark transition-colors"
            prefetch={false}
          >
            View All Properties
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
