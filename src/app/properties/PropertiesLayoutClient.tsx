'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';

// Dynamically import components with no SSR
const Header = dynamic(() => import('@/components/layout/Header'), { ssr: false });
const Footer = dynamic(() => import('@/components/layout/Footer'), { ssr: false });

export default function PropertiesLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
    // Reset scroll position on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!isMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
