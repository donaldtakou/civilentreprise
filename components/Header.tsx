'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Sparkles } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bg-white shadow-lg sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-2xl' : ''}`}>
      {/* Top bar */}
      <div className="bg-gradient-to-r from-green-600 via-green-700 to-green-600 text-white py-3 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
        <div className="container mx-auto px-4 flex justify-between items-center text-sm relative z-10">
          <div className="flex items-center gap-6">
            <a href="tel:+237695927172" className="flex items-center gap-2 hover:text-green-200 transition-all duration-300 hover:scale-105">
              <Phone size={16} className="animate-pulse" />
              <span className="font-medium">+237 695 927 172</span>
            </a>
            <a href="mailto:contact@contactcivilentreprise.com" className="flex items-center gap-2 hover:text-green-200 transition-all duration-300 hover:scale-105">
              <Mail size={16} />
              <span className="font-medium">contact@civilentreprise.com</span>
            </a>
          </div>
          <div className="hidden md:block">
            <span className="font-semibold bg-orange-500/20 px-4 py-1 rounded-full border border-orange-400/30 flex items-center gap-2"><Sparkles size={16} /> Devis gratuit sous 48h</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-orange-500 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <img src="/logo/logo2.png" alt="CivilEntreprise" className="h-14 w-auto rounded-full ring-2 ring-green-600/20 group-hover:ring-4 group-hover:ring-orange-500/30 transition-all duration-300 relative z-10" />
            </div>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-orange-600 font-semibold transition-all duration-300 relative group">
              <span>Accueil</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-orange-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-orange-600 font-semibold transition-all duration-300 relative group">
              <span>Services</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-orange-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/projets" className="text-gray-700 hover:text-orange-600 font-semibold transition-all duration-300 relative group">
              <span>Projets</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-orange-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/a-propos" className="text-gray-700 hover:text-orange-600 font-semibold transition-all duration-300 relative group">
              <span>À propos</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-orange-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/contact" className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-semibold">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 hover:text-orange-600 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4 animate-slideDown">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-gray-700 hover:text-orange-600 font-semibold transition-all duration-300 hover:pl-2" onClick={() => setIsMenuOpen(false)}>
                Accueil
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-orange-600 font-semibold transition-all duration-300 hover:pl-2" onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
              <Link href="/projets" className="text-gray-700 hover:text-orange-600 font-semibold transition-all duration-300 hover:pl-2" onClick={() => setIsMenuOpen(false)}>
                Projets
              </Link>
              <Link href="/a-propos" className="text-gray-700 hover:text-orange-600 font-semibold transition-all duration-300 hover:pl-2" onClick={() => setIsMenuOpen(false)}>
                À propos
              </Link>
              <Link href="/contact" className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 text-center shadow-lg font-semibold" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
