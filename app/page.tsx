import HeroCarousel from '@/components/HeroCarousel';
import { Building2, Hammer, Truck, Users, Award, Shield, CheckCircle, Star, Wrench, Briefcase, FolderOpen, MessageCircle, PhoneCall } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const services = [
    {
      icon: <Building2 size={48} />,
      title: 'Gros Œuvre',
      description: 'Construction de structures en béton, fondations, dalles et tous travaux de gros œuvre.',
      slug: 'gros-oeuvre',
    },
    {
      icon: <Truck size={48} />,
      title: 'Terrassement',
      description: 'Préparation de terrains, excavation, nivellement et aménagement de voirie.',
      slug: 'terrassement',
    },
    {
      icon: <Hammer size={48} />,
      title: 'Maçonnerie',
      description: 'Travaux de maçonnerie générale, murs, façades et ouvrages en pierre.',
      slug: 'maconnerie',
    },
    {
      icon: <Users size={48} />,
      title: 'Rénovation',
      description: 'Rénovation complète de bâtiments résidentiels et commerciaux.',
      slug: 'renovation',
    },
  ];

 

  const projects = [
    {
      title: 'Villa Moderne Bastos',
      category: 'Construction Neuve',
      image: '/realisations/images/photo_1_2025-12-10_00-28-04.jpg',
      location: 'Yaoundé',
    },
    {
      title: 'Immeuble Résidentiel',
      category: 'Gros Œuvre',
      image: '/realisations/images/photo_2_2025-12-10_00-28-04.jpg',
      location: 'Douala',
    },
    {
      title: 'Complexe Commercial',
      category: 'Construction Neuve',
      image: '/realisations/images/photo_3_2025-12-10_00-28-04.jpg',
      location: 'Yaoundé',
    },
    {
      title: 'Résidence de Luxe',
      category: 'Gros Œuvre',
      image: '/realisations/images/photo_2025-12-03_12-26-14.jpg',
      location: 'Bastos',
    },
    {
      title: 'Centre d\'Affaires',
      category: 'Construction Neuve',
      image: '/realisations/images/photo_2025-12-03_12-26-19.jpg',
      location: 'Yaoundé',
    },
    {
      title: 'Projet Terrassement',
      category: 'Terrassement',
      image: '/realisations/images/photo_2025-12-03_12-26-23.jpg',
      location: 'Douala',
    },
  ];

  const testimonials = [
    {
      name: 'Jean Dupont',
      company: 'Promoteur Immobilier',
      text: 'Travail exceptionnel et dans les délais. Une équipe professionnelle et réactive.',
      rating: 5,
    },
    {
      name: 'Marie Martin',
      company: 'Architecte',
      text: 'Je recommande vivement CivilEntreprise pour leur expertise et leur sérieux.',
      rating: 5,
    },
    {
      name: 'Pierre Durand',
      company: 'Particulier',
      text: 'Très satisfait de la rénovation de ma maison. Un travail de qualité !',
      rating: 5,
    },
  ];

  return (
    <main>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            <div className="text-center group hover:scale-110 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-bold text-green-400 mb-2 animate-fadeInUp">
                05+
              </div>
              <div className="text-gray-300 font-medium">Années d'expérience</div>
            </div>

            <div className="text-center group hover:scale-110 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-bold text-green-400 mb-2 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                98%
              </div>
              <div className="text-gray-300 font-medium">Clients satisfaits</div>
            </div>
            <div className="text-center group hover:scale-110 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-bold text-green-400 mb-2 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
                24/7
              </div>
              <div className="text-gray-300 font-medium">Support disponible</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-block mb-4 px-6 py-2 bg-green-100 rounded-full">
              <span className="text-green-700 font-bold uppercase tracking-wider text-sm flex items-center gap-2 justify-center"><Wrench size={16} /> Nos expertises</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-gray-900 bg-clip-text text-transparent mb-6">
              Nos Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Des solutions complètes pour tous vos projets de construction et rénovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={`/services/${service.slug}`}
                className="group bg-white border-2 border-gray-100 p-8 rounded-2xl hover:shadow-2xl hover:border-green-200 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden block"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-orange-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-orange-600 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 inline-block">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  <div className="mt-6 flex items-center text-green-600 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span>En savoir plus</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16 animate-fadeInUp">
            <Link
              href="/services"
              className="inline-block bg-gradient-to-r from-green-600 to-green-700 text-white px-10 py-4 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Voir tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-block mb-4 px-6 py-2 bg-orange-100 rounded-full">
              <span className="text-orange-700 font-bold uppercase tracking-wider text-sm flex items-center gap-2 justify-center"><Star size={16} /> Nos avantages</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-orange-800 to-gray-900 bg-clip-text text-transparent mb-6">
              Pourquoi nous choisir ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-green-200">
              <div className="inline-flex p-6 bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <Award className="text-orange-600" size={48} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                Expertise Reconnue
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Plus de 05 ans d'expérience dans le secteur du BTP au Cameroun
              </p>
              <div className="mt-6 h-1 w-0 bg-gradient-to-r from-green-600 to-orange-600 mx-auto group-hover:w-full transition-all duration-500 rounded-full"></div>
            </div>

            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-green-200">
              <div className="inline-flex p-6 bg-gradient-to-br from-green-100 to-green-50 rounded-3xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <Shield className="text-green-600" size={48} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                Garantie Qualité
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Travaux garantis décennale, assurance responsabilité civile complète
              </p>
              <div className="mt-6 h-1 w-0 bg-gradient-to-r from-green-600 to-orange-600 mx-auto group-hover:w-full transition-all duration-500 rounded-full"></div>
            </div>

            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-green-200">
              <div className="inline-flex p-6 bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <CheckCircle className="text-orange-600" size={48} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                Respect des Délais
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                98% de nos projets livrés dans les temps prévus, sans compromis
              </p>
              <div className="mt-6 h-1 w-0 bg-gradient-to-r from-green-600 to-orange-600 mx-auto group-hover:w-full transition-all duration-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-block mb-4 px-6 py-2 bg-green-100 rounded-full">
              <span className="text-green-700 font-bold uppercase tracking-wider text-sm flex items-center gap-2 justify-center"><FolderOpen size={16} /> Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-gray-900 bg-clip-text text-transparent mb-6">
              Nos Réalisations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Découvrez quelques-uns de nos projets récents à travers le Cameroun
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="h-96 relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-orange-600/10 group-hover:from-green-600/20 group-hover:to-orange-600/20 transition-all duration-500"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="inline-block bg-green-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-glow-green">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-300 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {project.location}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-green-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    Projet réalisé avec excellence et dans les délais
                  </p>
                  <div className="mt-4 flex items-center text-green-400 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <span>Voir les détails</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 animate-fadeInUp">
            <Link
              href="/projets"
              className="inline-block bg-gradient-to-r from-green-600 to-green-700 text-white px-10 py-4 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Voir tous nos projets
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-600 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-block mb-4 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-green-400 font-bold uppercase tracking-wider text-sm flex items-center gap-2 justify-center"><MessageCircle size={16} /> Témoignages</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ce que disent nos clients
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              La satisfaction de nos clients est notre plus grande récompense
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border-2 border-gray-700 hover:border-green-600 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-900/50 relative overflow-hidden"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-600/20 to-orange-600/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={24} className="fill-orange-500 text-orange-500 group-hover:scale-125 transition-transform duration-300" style={{transitionDelay: `${i * 50}ms`}} />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic text-lg leading-relaxed">&quot;{testimonial.text}&quot;</p>
                  <div className="border-t border-gray-700 group-hover:border-green-600 transition-colors pt-6">
                    <div className="font-bold text-xl text-white group-hover:text-green-400 transition-colors">{testimonial.name}</div>
                    <div className="text-orange-400 text-sm mt-1 font-medium">{testimonial.company}</div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
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
              <span className="text-white font-bold uppercase tracking-wider text-sm flex items-center gap-2 justify-center"><PhoneCall size={16} /> Contactez-nous</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeInUp leading-tight" style={{animationDelay: '0.2s'}}>
              Un projet en tête ?
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-green-100 leading-relaxed animate-fadeInUp" style={{animationDelay: '0.4s'}}>
              Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé.<br />
              <span className="text-white font-semibold">Réponse garantie sous 48h !</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeInUp" style={{animationDelay: '0.6s'}}>
              <Link
                href="/contact"
                className="group bg-orange-500 text-white px-12 py-5 rounded-xl hover:bg-orange-600 transition-all duration-300 font-bold text-xl shadow-2xl hover:shadow-orange-900/50 hover:scale-110 flex items-center gap-3"
              >
                Demander un devis gratuit
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="tel:+237695927172"
                className="group bg-white/10 backdrop-blur-md text-white px-12 py-5 rounded-xl hover:bg-white/20 transition-all duration-300 font-bold text-xl border-2 border-white/30 hover:border-white/60 shadow-xl hover:scale-110 flex items-center gap-3"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Appeler maintenant
              </a>
            </div>
            <p className="text-green-200 mt-8 text-lg">
              ✓ Devis gratuit • ✓ Intervention rapide • ✓ Expertise garantie
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
