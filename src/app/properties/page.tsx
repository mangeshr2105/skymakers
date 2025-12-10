import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Reveal variant="fade-up">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl font-serif mb-6">
              Our Properties
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              We&apos;re working on bringing you an amazing selection of properties. 
              Check back soon for our complete portfolio of luxury homes and developments.
            </p>
            <div className="mt-10">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-forest hover:bg-gold hover:text-dark transition-colors"
                prefetch={false}
              >
                Return to Home
              </Link>
            </div>
          </div>
        </Reveal>
      </main>
    </div>
  );
}
