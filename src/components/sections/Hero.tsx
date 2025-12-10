"use client";

import { useEffect, useRef, useState } from "react";
import Image from 'next/image';

export default function Hero() {
  const [fadeProgress, setFadeProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Handle video autoplay
  useEffect(() => {
    setIsMounted(true);
    
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        video.muted = true; // Required for autoplay in most browsers
        video.playsInline = true; // Prevent fullscreen on iOS
        await video.play();
        // Hide fallback image when video starts playing
        const fallback = document.getElementById('hero-fallback-img');
        if (fallback) fallback.style.display = 'none';
      } catch {
        console.error('Video autoplay failed');
        // Show fallback image if video fails to play
        const fallback = document.getElementById('hero-fallback-img');
        if (fallback) fallback.style.display = 'block';
      }
    };

    // Try to play when component mounts
    if (isMounted) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          // Auto-play was prevented
          console.log('Auto-play prevented, showing fallback');
          const fallback = document.getElementById('hero-fallback-img');
          if (fallback) fallback.style.display = 'block';
        });
      }
    }

    // Also try to play when user interacts with the page
    const handleInteraction = () => {
      playVideo();
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };

    document.addEventListener('click', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    };
  }, [isMounted]);

  useEffect(() => {
    if (!isMounted) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Start fading when user starts scrolling, complete fade at 80% of viewport height
      const fadeStart = 0;
      const fadeEnd = windowHeight * 0.8;
      
      // Calculate fade progress (0 = no fade, 1 = completely black)
      let progress = 0;
      if (scrollY > fadeStart) {
        progress = Math.min((scrollY - fadeStart) / (fadeEnd - fadeStart), 1);
      }
      
      setFadeProgress(progress);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add passive: true for better scroll performance
    window.addEventListener('scroll', requestTick, { passive: true });
    window.addEventListener('resize', requestTick, { passive: true });
    
    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', requestTick);
      window.removeEventListener('resize', requestTick);
    };
  }, [isMounted]);

  if (!isMounted) {
    return (
      <div className="w-full h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <section 
      className="relative w-full h-screen flex items-center justify-center text-center z-0 overflow-hidden"
      data-no-animate
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none'
      }}
    >
      {/* Background Video with Fallback Image */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <div className="w-full h-full relative">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          {/* Fallback Image */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <Image 
              id="hero-fallback-img" 
              src="/videos/hero-bg-fallback.png" 
              alt="Hero Fallback" 
              fill
              priority
              className="object-cover brightness-[0.35]"
            />
          </div>
          
          {/* Background Video */}
          <div className="relative w-full h-full overflow-hidden">
            <video
              ref={videoRef}
              id="hero-video"
              autoPlay
              muted
              loop
              playsInline
              disablePictureInPicture
              disableRemotePlayback
              className="w-full h-full object-cover brightness-[0.6]"
              style={{ 
                filter: `brightness(${0.6 * (1 - (fadeProgress * 0.3))})`,
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 2
              }}
              onPlay={() => {
                // Hide fallback image when video starts playing
                const fallback = document.getElementById('hero-fallback-img');
                if (fallback) fallback.style.display = 'none';
              }}
              onLoadedMetadata={() => {
                const video = videoRef.current;
                if (video) {
                  // Show video and hide fallback
                  video.style.display = 'block';
                  const fallback = document.getElementById('hero-fallback-img');
                  if (fallback) fallback.style.display = 'none';
                  
                  // Try to play
                  const playPromise = video.play();
                  if (playPromise !== undefined) {
                    playPromise.catch(() => {
                      console.log('Autoplay prevented, waiting for user interaction');
                      // Show fallback if autoplay is blocked
                      if (fallback) fallback.style.display = 'block';
                      
                      // Set up interaction handler
                      const playOnInteraction = () => {
                        video.play()
                          .then(() => {
                            if (fallback) fallback.style.display = 'none';
                          })
                          .catch(console.error);
                        document.removeEventListener('click', playOnInteraction);
                        document.removeEventListener('touchstart', playOnInteraction);
                      };
                      
                      document.addEventListener('click', playOnInteraction);
                      document.addEventListener('touchstart', playOnInteraction);
                    });
                  }
                }
              }}
              onError={(e) => {
                console.error('Video error:', e);
                const video = e.target as HTMLVideoElement;
                const fallback = document.getElementById('hero-fallback-img');
                if (video) video.style.display = 'none';
                if (fallback) fallback.style.display = 'block';
              }}
              preload="auto"
              webkit-playsinline="true"
              x5-playsinline="true"
              x5-video-player-type="h5"
              x5-video-player-fullscreen="true"
              x5-video-orientation="portrait"
            >
              <source src="/videos/hero-bg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Main Content - Centered */}
      <div 
        className="relative z-40 px-4 w-full max-w-7xl mx-auto flex flex-col items-center justify-center"
        style={{ pointerEvents: 'auto' }}
      >
        {/* Logo above the heading (profile pop-in) */}
        <div className="mb-4 md:mb-0 md:-mt-10 animate-fade-in">
          <Image 
            src="/images/firstpage/skymakersicon.svg" 
            alt="SkyMakers Logo" 
            width={360}
            height={360}
            className="w-48 h-48 sm:w-60 sm:h-60 md:w-84 md:h-84 lg:w-96 lg:h-96 object-contain filter invert drop-shadow-lg -mb-4 md:-mb-8"
          />
        </div>
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold mb-6 text-white font-serif -mt-4 md:-mt-20 animate-fade-in-delay" 
          style={{
            textShadow: "0 4px 20px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.6)",
            letterSpacing: "0.02em"
          }}
        >
          SKYMAKERS
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl tracking-widest text-white font-light animate-fade-in-delay-2" 
          style={{
            textShadow: "0 2px 12px rgba(0,0,0,0.8)",
            letterSpacing: "0.15em"
          }}
        >
          YOUR GATEWAY TO DUBAI&apos;S REAL ESTATE
        </p>
      </div>

      {/* Black overlay for fade effect (should be last) */}
      <div 
        id="hero-fade-overlay" 
        className="fixed inset-0 bg-black z-20" 
        style={{ 
          transition: "opacity 0.3s ease-out",
          opacity: Math.min(fadeProgress * 2, 0.8), // Cap opacity at 0.8 for better visibility
          pointerEvents: 'none'
        }}
      />
    </section>
  );
}
