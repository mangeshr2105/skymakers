"use client";

import { useEffect, useRef } from "react";
import Head from "next/head";

const reels = [
  "https://www.instagram.com/reel/DBMPtwGhPxx/?utm_source=ig_embed&amp;utm_campaign=loading",
  "https://www.instagram.com/reel/DBjvN5khEpp/?utm_source=ig_embed&amp;utm_campaign=loading",
  "https://www.instagram.com/reel/DBT8tfRB3uw/?utm_source=ig_embed&amp;utm_campaign=loading",
  "https://www.instagram.com/reel/DBy6kkRB06I/?utm_source=ig_embed&amp;utm_campaign=loading",
  "https://www.instagram.com/reel/DBJiMW9yw8_/?utm_source=ig_embed&amp;utm_campaign=loading"
];

export default function InstagramReels() {
  const reelsContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (reelsContainerRef.current) {
      reelsContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (reelsContainerRef.current) {
      reelsContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    // Dynamically load Instagram embed script after mount
    const script = document.createElement("script");
    script.setAttribute("src", "//www.instagram.com/embed.js");
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Re-render Instagram embeds after component updates
    if (typeof window !== "undefined") {
      const win = window as unknown as { instgrm?: { Embeds?: { process: () => void } } };
      if (win.instgrm?.Embeds?.process) {
        win.instgrm.Embeds.process();
      }
    }
  });

  return (
    <section id="instagram-reels" className="py-16 bg-light-1">
      <Head>
        <style jsx global>{`
          /* Hide scrollbar but keep functionality */
          .overflow-x-auto::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </Head>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold font-serif mb-8 text-forest">
          Follow Us on Instagram
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Check out our latest updates and behind-the-scenes content
        </p>
        
        <div className="relative px-4 md:px-8">
          <div className="relative">
            <div 
              ref={reelsContainerRef}
              className="flex gap-8 lg:gap-16 pb-4 overflow-x-auto scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {reels.map((url) => (
                <div key={url} className="flex-shrink-0 min-w-[240px] max-w-[340px] w-[280px] px-1">
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={url}
                    data-instgrm-version="14"
                    style={{
                      background: "#FFF",
                      border: 0,
                      borderRadius: 12,
                      boxShadow: "0 4px 20px 0 rgba(0,0,0,0.1)",
                      margin: 1,
                      maxWidth: 340,
                      minWidth: 220,
                      width: 280,
                      padding: 0,
                    }}
                  >
                    <a 
                      href={url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ display: "block", width: "100%", height: "100%" }}
                      aria-label="View Instagram Reel"
                    ></a>
                  </blockquote>
                </div>
              ))}
            </div>
            
            {/* Navigation Buttons */}
            <button 
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Previous reel"
            >
              <svg className="w-6 h-6 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Next reel"
            >
              <svg className="w-6 h-6 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="mt-12">
          <a
            href="https://www.instagram.com/skymakersrealestate/" // Replace with your Instagram username
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-forest hover:bg-gold hover:text-dark transition-colors"
          >
            Follow Us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
