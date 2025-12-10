'use client';

import { Building2, Calendar, MapPin, Play, X, FolderOpen, Video, Camera, Rocket } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function ProjetsPage() {
  const [selectedMedia, setSelectedMedia] = useState<{type: 'image' | 'video', src: string} | null>(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Projet de Construction Moderne',
      category: 'Construction Neuve',
      location: 'Yaoundé',
      image: '/realisations/photo_1_2025-12-10_00-28-04.jpg',
      type: 'image' as const,
    },
    {
      title: 'Rénovation d\'Infrastructure',
      category: 'Rénovation',
      location: 'Douala',
      image: '/realisations/photo_2_2025-12-10_00-28-04.jpg',
      type: 'image' as const,
    },
    {
      title: 'Chantier en Cours - Phase 1',
      category: 'Gros Œuvre',
      location: 'Yaoundé',
      video: '/realisations/IMG_7661.MP4',
      image: '/realisations/photo_3_2025-12-10_00-28-04.jpg',
      type: 'video' as const,
    },
    {
      title: 'Travaux de Terrassement',
      category: 'Terrassement',
      location: 'Garoua',
      image: '/realisations/photo_4_2025-12-10_00-28-04.jpg',
      type: 'image' as const,
    },
    {
      title: 'Construction Villa Moderne',
      category: 'Construction Neuve',
      location: 'Bastos, Yaoundé',
      image: '/realisations/photo_5_2025-12-10_00-28-04.jpg',
      type: 'image' as const,
    },
    {
      title: 'Réalisation Gros Œuvre',
      category: 'Gros Œuvre',
      location: 'Limbé',
      video: '/realisations/IMG_7662.MP4',
      image: '/realisations/photo_6_2025-12-10_00-28-04.jpg',
      type: 'video' as const,
    },
    {
      title: 'Projet Infrastructure',
      category: 'Travaux Publics',
      location: 'Douala',
      image: '/realisations/photo_7_2025-12-10_00-28-04.jpg',
      type: 'image' as const,
    },
    {
      title: 'Chantier Avancé',
      category: 'Construction Neuve',
      location: 'Yaoundé',
      video: '/realisations/IMG_7663.MP4',
      image: '/realisations/photo_8_2025-12-10_00-28-04.jpg',
      type: 'video' as const,
    },
    {
      title: 'Maçonnerie Spécialisée',
      category: 'Maçonnerie',
      location: 'Bafoussam',
      image: '/realisations/photo_9_2025-12-10_00-28-04.jpg',
      type: 'image' as const,
    },
    {
      title: 'Rénovation Complète',
      category: 'Rénovation',
      location: 'Yaoundé',
      image: '/realisations/photo_10_2025-12-10_00-28-04.jpg',
      type: 'image' as const,
    },
    {
      title: 'Travaux en Progression',
      category: 'Gros Œuvre',
      location: 'Douala',
      video: '/realisations/IMG_7664.MP4',
      image: '/realisations/photo_11_2025-12-10_00-28-04.jpg',
      type: 'video' as const,
    },
    {
      title: 'Construction Résidentielle',
      category: 'Construction Neuve',
      location: 'Yaoundé',
      image: '/realisations/photo_12_2025-12-10_00-28-04.jpg',
      type: 'image' as const,
    },
    {
      title: 'Projet Chantier',
      category: 'Gros Œuvre',
      location: 'Limbé',
      video: '/realisations/IMG_7665.MP4',
      image: '/realisations/photo_13_2025-12-10_00-28-04.jpg',
      type: 'video' as const,
    },
    {
      title: 'Réalisation Architecture',
      category: 'Construction Neuve',
      location: 'Douala',
      video: '/realisations/IMG_7666.MP4',
      image: '/realisations/photo_2025-12-03_12-26-14.jpg',
      type: 'video' as const,
    },
    {
      title: 'Infrastructure Moderne',
      category: 'Travaux Publics',
      location: 'Yaoundé',
      video: '/realisations/IMG_7667.MP4',
      image: '/realisations/photo_2025-12-03_12-26-19.jpg',
      type: 'video' as const,
    },
    {
      title: 'Chantier BTP',
      category: 'Gros Œuvre',
      location: 'Garoua',
      video: '/realisations/IMG_7668.MP4',
      image: '/realisations/photo_2025-12-03_12-26-23.jpg',
      type: 'video' as const,
    },
    {
      title: 'Projet Construction',
      category: 'Construction Neuve',
      location: 'Yaoundé',
      video: '/realisations/IMG_7669.MP4',
      image: '/realisations/photo_1_2025-12-10_00-28-04.jpg',
      type: 'video' as const,
    },
    {
      title: 'Réalisation Finale',
      category: 'Rénovation',
      location: 'Douala',
      video: '/realisations/IMG_7670.MP4',
      image: '/realisations/photo_2_2025-12-10_00-28-04.jpg',
      type: 'video' as const,
    },
  ];

  const categories = ['all', 'Construction Neuve', 'Gros Œuvre', 'Rénovation', 'Terrassement', 'Maçonnerie', 'Travaux Publics'];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full animate-fadeInUp">
              <span className="font-bold uppercase tracking-wider text-sm flex items-center gap-2 justify-center"><FolderOpen size={16} /> Portfolio</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp leading-tight" style={{animationDelay: '0.2s'}}>
              Nos Réalisations
            </h1>
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed animate-fadeInUp" style={{animationDelay: '0.4s'}}>
              Découvrez nos projets réalisés avec succès partout au Cameroun
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b sticky top-20 z-40 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  filter === cat
                    ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-xl scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                {cat === 'all' ? 'Tous les projets' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-green-200"
                style={{animationDelay: `${index * 0.05}s`}}
              >
                {/* Project Image/Video */}
                <div 
                  className="relative h-72 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedMedia({
                    type: project.type,
                    src: project.type === 'video' ? project.video! : project.image
                  })}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  
                  {project.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-125 group-hover:bg-orange-500 transition-all duration-300 shadow-2xl">
                        <Play size={32} className="text-green-600 group-hover:text-white ml-1" />
                      </div>
                    </div>
                  )}

                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-glow-orange">
                    {project.category}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <MapPin size={18} className="text-orange-600" />
                    <span className="font-medium">{project.location}</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t-2 border-gray-100">
                    <span className="text-green-600 font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                      {project.type === 'video' ? (
                        <><Video size={18} /> Vidéo</>
                      ) : (
                        <><Camera size={18} /> Photo</>
                      )}
                    </span>
                    <button 
                      onClick={() => setSelectedMedia({
                        type: project.type,
                        src: project.type === 'video' ? project.video! : project.image
                      })}
                      className="text-green-600 font-bold flex items-center gap-2 hover:gap-4 transition-all"
                    >
                      <span>Voir</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fadeInUp"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            onClick={() => setSelectedMedia(null)}
            className="absolute top-4 right-4 text-white bg-red-600 hover:bg-red-700 p-3 rounded-full transition-all hover:scale-110 shadow-2xl z-50"
          >
            <X size={32} />
          </button>
          <div className="max-w-6xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            {selectedMedia.type === 'video' ? (
              <video
                src={selectedMedia.src}
                controls
                autoPlay
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            ) : (
              <img
                src={selectedMedia.src}
                alt="Projet"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            )}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 via-green-700 to-green-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10"></div>
          <div className="absolute top-10 right-10 w-64 h-64 bg-orange-500 rounded-full blur-3xl opacity-30 animate-float"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl opacity-10 animate-float" style={{animationDelay: '1.5s'}}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full animate-fadeInUp">
              <span className="font-bold uppercase tracking-wider text-sm flex items-center gap-2 justify-center"><Rocket size={16} /> Démarrez votre projet</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeInUp leading-tight" style={{animationDelay: '0.2s'}}>
              Votre projet sera notre prochaine réussite
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-green-100 leading-relaxed animate-fadeInUp" style={{animationDelay: '0.4s'}}>
              Contactez-nous pour discuter de votre projet et bénéficier de notre expertise
            </p>
            <Link
              href="/contact"
              className="group inline-block bg-orange-500 text-white px-12 py-5 rounded-xl hover:bg-orange-600 transition-all duration-300 font-bold text-xl shadow-2xl hover:shadow-orange-900/50 hover:scale-110 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
              <span className="flex items-center gap-3">
                Démarrer un projet
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
