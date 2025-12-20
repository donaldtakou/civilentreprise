'use client';

import { Building2, Hammer, Truck, Users, CheckCircle, ArrowLeft, Phone } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const servicesData = {
  'gros-oeuvre': {
    title: 'Gros Œuvre',
    icon: <Building2 size={64} />,
    description: 'Construction de structures en béton, fondations, dalles et tous travaux de gros œuvre.',
    longDescription: 'Le gros œuvre constitue la structure porteuse de votre bâtiment. Notre équipe expérimentée réalise tous vos travaux de construction avec rigueur et professionnalisme, en respectant les normes de sécurité et de qualité les plus strictes.',
    services: [
      'Fondations et terrassements préliminaires',
      'Coulage de dalles en béton armé',
      'Élévation de murs porteurs',
      'Charpentes et structures métalliques',
      'Planchers et dalles intermédiaires',
      'Mise hors d\'eau et hors d\'air',
    ],
    benefits: [
      'Équipe certifiée et qualifiée',
      'Matériaux de qualité supérieure',
      'Respect des délais convenus',
      'Garantie décennale incluse',
      'Suivi rigoureux du chantier',
      'Conseils techniques personnalisés',
    ],
    process: [
      {
        title: 'Étude du terrain',
        description: 'Analyse géotechnique et étude de faisabilité',
      },
      {
        title: 'Conception',
        description: 'Plans détaillés et calculs de structure',
      },
      {
        title: 'Préparation',
        description: 'Terrassement et préparation des fondations',
      },
      {
        title: 'Construction',
        description: 'Réalisation de la structure porteuse',
      },
      {
        title: 'Finitions',
        description: 'Mise hors d\'eau et préparation pour second œuvre',
      },
    ],
    image: '/realisations/images/photo_1_2025-12-10_00-28-04.jpg',
  },
  'terrassement': {
    title: 'Terrassement',
    icon: <Truck size={64} />,
    description: 'Préparation de terrains, excavation, nivellement et aménagement de voirie.',
    longDescription: 'Le terrassement est l\'étape cruciale qui prépare votre terrain pour la construction. Nous disposons d\'un parc d\'engins modernes et d\'une équipe expérimentée pour tous vos travaux de terrassement, du déblaiement à l\'aménagement final.',
    services: [
      'Décapage et déblaiement du terrain',
      'Excavation et fouilles',
      'Nivellement et remblaiement',
      'Drainage et évacuation des eaux',
      'Aménagement de voiries et accès',
      'Compactage et stabilisation des sols',
    ],
    benefits: [
      'Engins modernes et performants',
      'Conducteurs d\'engins qualifiés',
      'Respect de l\'environnement',
      'Gestion des déblais et remblais',
      'Intervention rapide',
      'Étude topographique incluse',
    ],
    process: [
      {
        title: 'Étude topographique',
        description: 'Relevé du terrain et analyse du sol',
      },
      {
        title: 'Piquetage',
        description: 'Marquage précis des zones à terrasser',
      },
      {
        title: 'Décapage',
        description: 'Enlèvement de la terre végétale',
      },
      {
        title: 'Excavation',
        description: 'Creusement selon les plans',
      },
      {
        title: 'Finitions',
        description: 'Nivellement et compactage final',
      },
    ],
    image: '/realisations/images/photo_2025-12-03_12-26-23.jpg',
  },
  'maconnerie': {
    title: 'Maçonnerie',
    icon: <Hammer size={64} />,
    description: 'Travaux de maçonnerie générale, murs, façades et ouvrages en pierre.',
    longDescription: 'La maçonnerie est un art qui demande savoir-faire et précision. Nos maçons qualifiés réalisent tous vos travaux, des murs porteurs aux ouvrages décoratifs, en utilisant des techniques traditionnelles et modernes pour un résultat durable et esthétique.',
    services: [
      'Montage de murs en parpaings et briques',
      'Réalisation de façades et enduits',
      'Ouvrages en pierre naturelle',
      'Murets et clôtures',
      'Cheminées et barbecues',
      'Réparation et restauration',
    ],
    benefits: [
      'Maçons expérimentés',
      'Matériaux certifiés',
      'Finitions soignées',
      'Respect des normes DTU',
      'Devis détaillé et transparent',
      'Garantie sur les travaux',
    ],
    process: [
      {
        title: 'Préparation',
        description: 'Implantation et tracé des ouvrages',
      },
      {
        title: 'Fondations',
        description: 'Semelles et bases de murs',
      },
      {
        title: 'Élévation',
        description: 'Montage des murs et ouvrages',
      },
      {
        title: 'Joints',
        description: 'Réalisation des joints et finitions',
      },
      {
        title: 'Enduits',
        description: 'Application des enduits de finition',
      },
    ],
    image: '/realisations/images/photo_3_2025-12-10_00-28-04.jpg',
  },
  'renovation': {
    title: 'Rénovation',
    icon: <Users size={64} />,
    description: 'Rénovation complète de bâtiments résidentiels et commerciaux.',
    longDescription: 'Donnez une nouvelle vie à votre bâtiment avec nos services de rénovation complète. De la simple remise en état à la transformation totale, nous gérons votre projet de A à Z avec une équipe pluridisciplinaire pour tous les corps de métier.',
    services: [
      'Diagnostic et expertise du bâti',
      'Rénovation énergétique',
      'Restructuration d\'espaces',
      'Réfection de façades',
      'Modernisation des installations',
      'Mise aux normes complète',
    ],
    benefits: [
      'Équipe pluridisciplinaire',
      'Coordination de tous les corps d\'état',
      'Minimisation des nuisances',
      'Respect du planning',
      'Amélioration énergétique',
      'Valorisation de votre bien',
    ],
    process: [
      {
        title: 'Diagnostic',
        description: 'Évaluation complète de l\'existant',
      },
      {
        title: 'Conception',
        description: 'Plans de rénovation et permis',
      },
      {
        title: 'Démolition',
        description: 'Dépose sélective et démontage',
      },
      {
        title: 'Rénovation',
        description: 'Travaux de rénovation et modernisation',
      },
      {
        title: 'Finitions',
        description: 'Revêtements et aménagements finaux',
      },
    ],
    image: '/realisations/images/photo_2_2025-12-10_00-28-04.jpg',
  },
};


import React from 'react';

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-green-100 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={20} />
            Retour aux services
          </Link>
          <div className="max-w-4xl">
            <div className="inline-block mb-6 text-orange-400 animate-fadeInUp">
              {service.icon}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp leading-tight" style={{animationDelay: '0.2s'}}>
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed animate-fadeInUp max-w-3xl" style={{animationDelay: '0.4s'}}>
              {service.longDescription}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
      </section>

      {/* Image Section */}
      <section className="py-0 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto -mt-16 relative z-10">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Prestations incluses
              </h2>
              <p className="text-xl text-gray-600">
                Un service complet pour votre projet
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.services.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl border-2 border-green-100 hover:border-green-300 hover:shadow-lg transition-all duration-300"
                >
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-800 font-medium text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Notre processus
              </h2>
              <p className="text-xl text-gray-600">
                Une méthodologie éprouvée pour garantir votre satisfaction
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-200 via-orange-200 to-green-200 hidden lg:block"></div>
              
              <div className="space-y-12">
                {service.process.map((step, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-green-200">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-lg">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative z-10 flex items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-xl border-4 border-white">
                        {index + 1}
                      </div>
                    </div>
                    
                    <div className="flex-1 hidden lg:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Nos avantages
              </h2>
              <p className="text-xl text-gray-600">
                Pourquoi choisir CivilEntreprise ?
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border-2 border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-orange-500 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform">
                      <CheckCircle size={24} />
                    </div>
                    <p className="text-gray-800 font-semibold text-lg flex-1 pt-2">
                      {benefit}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-green-100 leading-relaxed">
              Contactez-nous pour un devis gratuit et personnalisé sous 48h
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-green-700 px-10 py-5 rounded-xl hover:bg-green-50 transition-all duration-300 font-bold text-lg shadow-2xl hover:scale-105"
              >
                Demander un devis
              </Link>
              <a
                href="tel:+237695927172"
                className="inline-flex items-center justify-center gap-3 bg-orange-500 text-white px-10 py-5 rounded-xl hover:bg-orange-600 transition-all duration-300 font-bold text-lg shadow-2xl hover:scale-105"
              >
                <Phone size={24} />
                +237 695 927 172
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
