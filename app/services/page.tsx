import { Building2, Hammer, Truck, Users, HardHat, Home, Wrench, PaintBucket, Briefcase, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      icon: <Building2 size={48} />,
      title: 'Gros Œuvre',
      description: 'Construction de structures en béton armé, fondations profondes et superficielles, dalles, poteaux et poutres.',
      details: [
        'Fondations et terrassements',
        'Structures en béton armé',
        'Dalles et planchers',
        'Élévation de murs porteurs',
      ],
    },
    {
      icon: <Truck size={48} />,
      title: 'Terrassement',
      description: "Préparation de terrains, excavation, nivellement et aménagement pour tout type de projet.",
      details: [
        'Décapage et excavation',
        'Nivellement de terrain',
        'Création de voirie',
        'Assainissement',
      ],
    },
    {
      icon: <Hammer size={48} />,
      title: 'Maçonnerie',
      description: 'Tous travaux de maçonnerie générale, murs, façades et ouvrages en pierre ou brique.',
      details: [
        'Maçonnerie traditionnelle',
        'Murs en pierre ou brique',
        'Façades et enduits',
        'Cheminées et barbecues',
      ],
    },
    {
      icon: <Home size={48} />,
      title: 'Rénovation',
      description: 'Rénovation complète de bâtiments résidentiels et commerciaux, de la démolition à la finition.',
      details: [
        'Rénovation complète',
        'Démolition et reconstruction',
        'Mise aux normes',
        'Extension de bâtiments',
      ],
    },
    {
      icon: <HardHat size={48} />,
      title: 'Travaux Publics',
      description: 'Réalisation de projets d\'infrastructures publiques et privées.',
      details: [
        'Voiries et réseaux',
        'Aménagement urbain',
        'Parkings et cours',
        'Réseaux divers (VRD)',
      ],
    },
    {
      icon: <Users size={48} />,
      title: 'Construction Neuve',
      description: 'Construction de bâtiments neufs clés en main, de la conception à la livraison.',
      details: [
        'Maisons individuelles',
        'Immeubles collectifs',
        'Bâtiments commerciaux',
        'Locaux industriels',
      ],
    },
    {
      icon: <Wrench size={48} />,
      title: 'Second Œuvre',
      description: 'Coordination et réalisation des travaux de finition et aménagements intérieurs.',
      details: [
        'Cloisons et doublages',
        'Plâtrerie',
        'Carrelage',
        'Menuiseries intérieures',
      ],
    },
    {
      icon: <PaintBucket size={48} />,
      title: 'Ravalement de Façades',
      description: 'Nettoyage, réparation et embellissement de façades pour tous types de bâtiments.',
      details: [
        'Nettoyage de façades',
        'Réparation des fissures',
        'Enduits et peintures',
        'Isolation thermique extérieure',
      ],
    },
  ];

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
              <span className="font-bold uppercase tracking-wider text-sm flex items-center gap-2 justify-center"><Wrench size={16} /> Nos Expertises</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp leading-tight" style={{animationDelay: '0.2s'}}>
              Nos Services
            </h1>
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed animate-fadeInUp" style={{animationDelay: '0.4s'}}>
              Des prestations complètes et professionnelles pour tous vos projets de construction et rénovation partout au Cameroun
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:shadow-2xl hover:border-green-200 transition-all duration-500 hover:-translate-y-3 relative overflow-hidden"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-100 to-orange-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-orange-600 mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 inline-block">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300" style={{transitionDelay: `${idx * 50}ms`}}>
                        <span className="text-orange-600 mt-1 font-bold text-lg">✓</span>
                        <span className="font-medium">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center text-green-600 font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 border-t-2 border-gray-100 pt-4">
                    <span>En savoir plus</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-block mb-4 px-6 py-2 bg-green-100 rounded-full">
              <span className="text-green-700 font-bold uppercase tracking-wider text-sm flex items-center gap-2 justify-center"><Briefcase size={16} /> Méthodologie</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-gray-900 bg-clip-text text-transparent mb-6">
              Notre Processus
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Une méthodologie éprouvée pour garantir la réussite de votre projet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="group text-center relative">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-glow-green">
                  1
                </div>
                <div className="absolute -right-8 top-1/2 -translate-y-1/2 hidden md:block">
                  <svg className="w-16 h-8 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                Contact
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Prise de contact et analyse approfondie de vos besoins
              </p>
            </div>

            <div className="group text-center relative">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-glow-orange">
                  2
                </div>
                <div className="absolute -right-8 top-1/2 -translate-y-1/2 hidden md:block">
                  <svg className="w-16 h-8 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                Étude
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Visite sur site et étude technique détaillée
              </p>
            </div>

            <div className="group text-center relative">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-glow-green">
                  3
                </div>
                <div className="absolute -right-8 top-1/2 -translate-y-1/2 hidden md:block">
                  <svg className="w-16 h-8 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                Devis
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Proposition détaillée sous 48h garanties
              </p>
            </div>

            <div className="group text-center">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-glow-orange">
                  4
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                Réalisation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Exécution des travaux dans les délais convenus
              </p>
            </div>
          </div>
        </div>
      </section>

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
              <span className="font-bold uppercase tracking-wider text-sm flex items-center gap-2 justify-center"><Sparkles size={16} /> Demandez votre devis</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeInUp leading-tight" style={{animationDelay: '0.2s'}}>
              Besoin d'un devis ?
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-green-100 leading-relaxed animate-fadeInUp" style={{animationDelay: '0.4s'}}>
              Contactez-nous pour discuter de votre projet et recevoir un devis gratuit sous 48h
            </p>
            <Link
              href="/contact"
              className="group inline-block bg-orange-500 text-white px-12 py-5 rounded-xl hover:bg-orange-600 transition-all duration-300 font-bold text-xl shadow-2xl hover:shadow-orange-900/50 hover:scale-110 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
              <span className="flex items-center gap-3">
                Demander un devis
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
