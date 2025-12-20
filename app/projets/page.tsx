'use client';

import { Building2, Calendar, MapPin, Play, X, FolderOpen, Video, Camera, Rocket } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function ProjetsPage() {
  const [selectedMedia, setSelectedMedia] = useState<typeof projects[0] | null>(null);
  const [filter, setFilter] = useState('all');

  const projects = [
        // --- Nouveaux projets détaillés ---
        {
          title: 'Duplex au Profil de Mr Y (Babadjou, Cameroun)',
          category: 'Construction Résidentielle',
          location: 'Babadjou, Cameroun',
          images: [
            '/realisations/images/photo_2025-12-20_10-57-42.jpg',
            '/realisations/images/photo_2025-12-20_10-58-10.jpg',
            '/realisations/images/photo_2025-12-20_10-58-25.jpg',
            '/realisations/images/photo_2025-12-20_10-58-43.jpg',
            '/realisations/images/photo_2025-12-20_10-58-47.jpg',
            '/realisations/images/photo_2025-12-20_10-58-53.jpg',
          ],
          type: 'image' as const,
          description: `Duplex haut standing conçu pour répondre aux besoins d'une famille moderne.\n
    Rez-de-chaussée : 3 balcons, salon principal, salon VIP, escalier design, salle à manger, cuisine équipée, magasin, 2 douches, 1 chambre.\n
    Étage : 4 balcons, salon VIP, vide sur salon, chambre principale avec dressing, 2 chambres supplémentaires, 3 douches.\n
    Surface habitable : 286 m² | Surface bâtie au sol : 134 m² | Terrain : 200 m².\n
    Coût estimatif du gros œuvre : 44 620 € (29 millions FCFA).\n
    Un projet optimisé pour le confort, la fonctionnalité et l’élégance architecturale.`,
          highlights: [
            'Architecture contemporaine',
            'Optimisation des espaces',
            'Finitions haut de gamme',
            'Gestion de projet professionnelle',
          ],
        },
  //
  //
        {
          title: 'Mission d’expertise chantier SS-R+6',
          category: 'Expertise & Contrôle',
          location: 'Yaoundé',
          images: [
            '/realisations/images/photo_2025-12-20_11-00-31.jpg',
            '/realisations/images/photo_2025-12-20_11-01-02.jpg',
            '/realisations/images/photo_2025-12-20_11-01-18.jpg',
            '/realisations/images/photo_2025-12-20_11-01-25.jpg',
            '/realisations/images/photo_2025-12-20_11-01-31.jpg',
          ],
          type: 'image' as const,
          description: "Services d’expertise technique sur un chantier SS-R+6 à usage d’habitation à Yaoundé. Analyse structurelle, contrôle qualité des matériaux, suivi de conformité et recommandations pour la sécurité et la durabilité. Intervention d’une équipe pluridisciplinaire pour garantir la réussite du projet.",
          highlights: [
            'Contrôle qualité',
            'Sécurité chantier',
            'Expertise technique',
            'Accompagnement sur-mesure',
          ],
        },
        {
          title: "Rénovation d'Infrastructure",
          category: 'Rénovation',
          location: 'Douala',
          image: '/realisations/images/photo_2_2025-12-10_00-28-04.jpg',
        //
        },
    {
      title: 'Chantier en Cours - Phase 1',
      category: 'Gros Œuvre',
      location: 'Yaoundé',
      video: '/realisations/videos/IMG_7661.MP4',
      image: '/realisations/images/photo_3_2025-12-10_00-28-04.jpg',
      type: 'video' as const,
      description: "Vidéo et image d'un chantier en phase initiale à Yaoundé, montrant les fondations et les premiers élévations du bâtiment.",
    },
    {
      title: 'Travaux de Terrassement',
      category: 'Terrassement',
      location: 'Garoua',
      image: '/realisations/images/photo_4_2025-12-10_00-28-04.jpg',
      type: 'image' as const,
      description: "Travaux de terrassement à Garoua, avec engins de chantier et préparation du terrain pour la construction.",
    },
    {
      title: 'Construction Villa Moderne',
      category: 'Construction Neuve',
      location: 'Bastos, Yaoundé',
      image: '/realisations/images/photo_5_2025-12-10_00-28-04.jpg',
      type: 'image' as const,
      description: "Image d'une villa moderne en construction à Bastos, Yaoundé, mettant en valeur l'architecture contemporaine du projet.",
    },
    {
      title: 'Réalisation Gros Œuvre',
      category: 'Gros Œuvre',
      location: 'Limbé',
      video: '/realisations/videos/IMG_7662.MP4',
      image: '/realisations/images/photo_6_2025-12-10_00-28-04.jpg',
      type: 'video' as const,
      description: "Vidéo et photo illustrant le gros œuvre réalisé à Limbé, avec une structure en béton et des ouvriers à l'œuvre.",
    },
    {
      title: 'Projet Infrastructure',
      category: 'Travaux Publics',
      location: 'Douala',
      image: '/realisations/images/photo_7_2025-12-10_00-28-04.jpg',
      type: 'image' as const,
      description: "Projet d'infrastructure à Douala, montrant des travaux publics d'envergure et des équipements spécialisés.",
    },
    {
      title: 'Chantier Avancé',
      category: 'Construction Neuve',
      location: 'Yaoundé',
      video: '/realisations/videos/IMG_7663.MP4',
      image: '/realisations/images/photo_8_2025-12-10_00-28-04.jpg',
      type: 'video' as const,
      description: "Vidéo et image d'un chantier avancé à Yaoundé, illustrant la progression rapide des travaux de construction.",
    },
    {
      title: 'Maçonnerie Spécialisée',
      category: 'Maçonnerie',
      location: 'Bafoussam',
      image: '/realisations/images/photo_9_2025-12-10_00-28-04.jpg',
      type: 'image' as const,
      description: "Travaux de maçonnerie spécialisée à Bafoussam, mettant en avant la qualité des finitions et des matériaux utilisés.",
    },
    {
      title: 'Rénovation Complète',
      category: 'Rénovation',
      location: 'Yaoundé',
      image: '/realisations/images/photo_10_2025-12-10_00-28-04.jpg',
      type: 'image' as const,
      description: "Image d'une rénovation complète à Yaoundé, montrant le résultat final après transformation du bâtiment.",
    },
    {
      title: 'Travaux en Progression',
      category: 'Gros Œuvre',
      location: 'Douala',
      video: '/realisations/videos/IMG_7664.MP4',
      image: '/realisations/images/photo_11_2025-12-10_00-28-04.jpg',
      type: 'video' as const,
      description: "Vidéo et photo de travaux en progression à Douala, illustrant l'activité sur le chantier et l'évolution de la structure.",
    },
    {
      title: 'Construction Résidentielle',
      category: 'Construction Neuve',
      location: 'Yaoundé',
      image: '/realisations/images/photo_12_2025-12-10_00-28-04.jpg',
      type: 'image' as const,
      description: "Projet de construction résidentielle à Yaoundé, mettant en avant une architecture moderne et fonctionnelle.",
    },
    {
      title: 'Projet Chantier',
      category: 'Gros Œuvre',
      location: 'Limbé',
      video: '/realisations/videos/IMG_7665.MP4',
      image: '/realisations/images/photo_13_2025-12-10_00-28-04.jpg',
      type: 'video' as const,
      description: "Vidéo et image d'un projet de gros œuvre à Limbé, illustrant la robustesse de la structure et l'organisation du chantier.",
    },
    {
      title: 'Réalisation Architecture',
      category: 'Construction Neuve',
      location: 'Douala',
      video: '/realisations/videos/IMG_7666.MP4',
      image: '/realisations/images/photo_2025-12-03_12-26-14.jpg',
      type: 'video' as const,
      description: "Projet architectural à Douala, mettant en avant la créativité et l'innovation dans la conception du bâtiment.",
    },
    {
      title: 'Infrastructure Moderne',
      category: 'Travaux Publics',
      location: 'Yaoundé',
      video: '/realisations/videos/IMG_7667.MP4',
      image: '/realisations/images/photo_2025-12-03_12-26-19.jpg',
      type: 'video' as const,
      description: "Vidéo et photo d'une infrastructure moderne à Yaoundé, illustrant l'utilisation de techniques avancées de construction.",
    },
    {
      title: 'Chantier BTP',
      category: 'Gros Œuvre',
      location: 'Garoua',
      video: '/realisations/videos/IMG_7668.MP4',
      image: '/realisations/images/photo_2025-12-03_12-26-23.jpg',
      type: 'video' as const,
      description: "Chantier BTP à Garoua, montrant la coordination des équipes et l'avancement des travaux de gros œuvre.",
    },
    {
      title: 'Projet Construction',
      category: 'Construction Neuve',
      location: 'Yaoundé',
      video: '/realisations/videos/IMG_7669.MP4',
      image: '/realisations/images/photo_1_2025-12-10_00-28-04.jpg',
      type: 'video' as const,
      description: "Vidéo et image d'un projet de construction à Yaoundé, illustrant les différentes étapes du chantier.",
    },
    {
      title: 'Réalisation Finale',
      category: 'Rénovation',
      location: 'Douala',
      video: '/realisations/videos/IMG_7670.MP4',
      image: '/realisations/images/photo_2_2025-12-10_00-28-04.jpg',
      type: 'video' as const,
      description: "Réalisation finale d'un projet de rénovation à Douala, mettant en avant le résultat obtenu après les travaux.",
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
                {/* Project Media (Galerie ou unique) */}
                <div className="relative h-72 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden cursor-pointer">
                  {Array.isArray(project.images) && project.images.length > 0 ? (
                    <div className="w-full h-full flex overflow-x-auto snap-x">
                      {project.images.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={project.title + ' ' + (i+1)}
                          className="w-full h-full object-cover snap-center transition-transform duration-700"
                          style={{minWidth: '100%'}}
                          onClick={() => setSelectedMedia(project)}
                        />
                      ))}
                    </div>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onClick={() => setSelectedMedia(project)}
                    />
                  )}
                </div>
                {/* Project Title and Button */}
                <div className="p-6 flex flex-col items-center justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center group-hover:text-green-700 transition-colors">
                    {project.title}
                  </h3>
                  <button
                    onClick={() => setSelectedMedia(project)}
                    className="text-green-600 font-bold flex items-center gap-2 hover:gap-4 transition-all border-2 border-green-600 px-6 py-2 rounded-full mt-2"
                  >
                    <span>Voir détail</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeInUp"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            onClick={() => setSelectedMedia(null)}
            className="absolute top-4 right-4 text-white bg-red-600 hover:bg-red-700 p-3 rounded-full transition-all hover:scale-110 shadow-2xl z-50"
          >
            <X size={32} />
          </button>
          <div className="max-w-3xl w-full bg-white rounded-2xl shadow-2xl p-6 relative" onClick={e => e.stopPropagation()}>
            <h2 className="text-3xl font-bold mb-2 text-green-800">{selectedMedia.title}</h2>
            <div className="mb-2 text-gray-600 flex items-center gap-2">
              <MapPin size={18} className="text-orange-600" />
              <span>{selectedMedia.location}</span>
            </div>
            {/* Galerie d'images ou vidéo */}
            {Array.isArray(selectedMedia.images) && selectedMedia.images.length > 0 ? (
              <div className="flex gap-2 overflow-x-auto mb-4">
                {selectedMedia.images.map((img, i) => (
                  <img key={i} src={img} alt={selectedMedia.title + ' ' + (i+1)} className="h-56 rounded-lg shadow object-cover" />
                ))}
              </div>
            ) : null}
            {/* Description */}
            <div className="mb-4 text-gray-800 whitespace-pre-line text-lg">
              {selectedMedia.description}
            </div>
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
