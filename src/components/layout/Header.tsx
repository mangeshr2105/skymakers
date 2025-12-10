"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Properties", href: "/properties" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/60 backdrop-blur-md shadow-sm" 
          : "bg-black/40 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-2 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center -space-x-6">
              <div className={`h-12 w-20 flex items-center transition-all duration-300 ${scrolled ? 'invert-0' : 'invert'}`}>
                <Image 
                  src="/images/firstpage/skymakersicon.svg" 
                  alt="Skymakers Logo" 
                  width={80}
                  height={48}
                  className="w-full h-auto object-contain"
                />
              </div>
              <span className={`text-2xl font-bold ${scrolled ? 'text-gray-800' : 'text-white'} transition-colors duration-300`}>
                SKYMAKERS
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-base font-medium ${scrolled ? 'text-gray-700 hover:text-gold' : 'text-white hover:text-gold/80'} transition-colors`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className={`w-full flex items-center justify-center px-4 py-2 border ${scrolled ? 'border-transparent' : 'border-white'} rounded-md text-white bg-forest hover:bg-gold hover:text-dark transition-colors`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors ${
                scrolled ? 'text-gray-800 hover:text-gold' : 'text-white hover:text-gold/90'
              }`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg p-4 mt-2">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gold hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block w-full text-center px-4 py-2 mt-2 rounded-md text-base font-medium text-white bg-forest hover:bg-gold hover:text-dark"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
