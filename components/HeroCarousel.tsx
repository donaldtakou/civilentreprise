'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';

const slides = [
  {
    image: '/carroussels/photo_1_2025-12-10_00-28-04.jpg',
    title: 'Excellence dans le BTP depuis 05 ans',
    subtitle: 'Des projets de construction de qualité supérieure partout au Cameroun',
  },
  {
    image: '/carroussels/photo_2_2025-12-10_00-28-04.jpg',
    title: 'Votre partenaire de confiance',
    subtitle: 'Pour tous vos travaux de gros œuvre et terrassement',
  },
  {
    image: '/carroussels/photo_3_2025-12-10_00-28-04.jpg',
    title: 'Innovation et savoir-faire',
    subtitle: 'Des solutions adaptées à vos besoins',
  },
  {
    image: '/carroussels/photo_7_2025-12-10_00-28-04.jpg',
    title: 'Expertise professionnelle',
    subtitle: 'Construction et rénovation de haute qualité',
  },
  {
    image: '/carroussels/photo_8_2025-12-10_00-28-04.jpg',
    title: 'Projets clés en main',
    subtitle: 'De la conception à la livraison',
  },
  {
    image: '/carroussels/photo_9_2025-12-10_00-28-04.jpg',
    title: 'Qualité garantie',
    subtitle: 'Travaux certifiés et assurés',
  },
  {
    image: '/carroussels/photo_10_2025-12-10_00-28-04.jpg',
    title: 'Votre vision, notre mission',
    subtitle: 'Concrétisons ensemble vos projets BTP',
  },
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {slides.map((slide, index) => (
          <div key={index} className="flex-[0_0_100%] min-w-0 relative">
            <div className="relative h-[600px] md:h-[700px] bg-gray-900">
              <img src={slide.image} alt={slide.title} className="absolute inset-0 w-full h-full object-cover transform scale-105 transition-transform duration-[10000ms]" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-start text-white">
                <div className="max-w-3xl">
                  <div className="inline-block mb-4 px-4 py-2 bg-orange-500/90 backdrop-blur-sm rounded-full shadow-glow-orange animate-fadeInUp">
                    <span className="text-sm font-bold uppercase tracking-wider flex items-center gap-2"><Award size={16} /> Entreprise certifiée</span>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                    <span className="block">{slide.title}</span>
                  </h1>
                  <p className="text-xl md:text-3xl mb-10 text-gray-200 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
                    <a
                      href="/contact"
                      className="group bg-gradient-to-r from-green-600 to-green-700 text-white px-10 py-4 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 font-bold text-lg shadow-2xl hover:shadow-glow-green hover:scale-105 flex items-center gap-2"
                    >
                      Demander un devis
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                    <a
                      href="/services"
                      className="group bg-white/10 backdrop-blur-md text-white px-10 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 font-bold text-lg border-2 border-white/30 hover:border-white/60 shadow-xl hover:scale-105 flex items-center gap-2"
                    >
                      Nos services
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-3 md:p-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-110 group"
        onClick={scrollPrev}
      >
        <ChevronLeft size={28} className="text-gray-900 group-hover:text-green-600 transition-colors" />
      </button>
      <button
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-3 md:p-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-110 group"
        onClick={scrollNext}
      >
        <ChevronRight size={28} className="text-gray-900 group-hover:text-green-600 transition-colors" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`transition-all duration-300 rounded-full ${
              index === selectedIndex 
                ? 'bg-green-600 w-12 h-4 shadow-glow-green' 
                : 'bg-white/70 w-4 h-4 hover:bg-white hover:scale-110'
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
