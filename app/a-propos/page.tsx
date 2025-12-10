'use client';

import { Award, Users, Target, Shield, CheckCircle, TrendingUp, HardHat, Star, Leaf, Lightbulb, UserPlus, BookOpen } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function AProposPage() {
  const [counts, setCounts] = useState({ projects: 0, surface: 0, team: 0, satisfaction: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounts({ projects: 50, surface: 10, team: 50, satisfaction: 98 });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const values = [
    {
      icon: <Award size={48} />,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque projet, avec une attention particulière aux détails et une qualité irréprochable.',
    },
    {
      icon: <Shield size={48} />,
      title: 'Fiabilité',
      description: 'Respect strict des délais et des budgets, garantie décennale sur tous nos travaux de construction.',
    },
    {
      icon: <Users size={48} />,
      title: 'Engagement',
      description: 'Une équipe dédiée et à l\'écoute pour accompagner chaque client de A à Z dans son projet.',
    },
    {
      icon: <Target size={48} />,
      title: 'Innovation',
      description: 'Utilisation des dernières techniques et matériaux pour des résultats durables et performants.',
    },
  ];

  const team = [
    {
      name: 'Solamine DETA',
      role: 'Directrice Général',
      description: '25 ans d\'expérience dans le BTP',
    },
    {
      name: 'Ndieppe Junior',
      role: ' Technicien',
      description: 'Ingénieure en génie civil',
    },

  ];

  const certifications = [
    'Qualibat - Certification excellence BTP',
    'Certification BTP Cameroun',
    'ISO 9001 - Management de la qualité',
    'ISO 14001 - Management environnemental',
    'OHSAS 18001 - Santé et sécurité au travail',
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
              <span className="font-bold uppercase tracking-wider text-sm flex items-center gap-2 justify-center"><Users size={16} /> Qui sommes-nous</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp leading-tight" style={{animationDelay: '0.2s'}}>
              À Propos de CivilEntreprise
            </h1>
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed animate-fadeInUp" style={{animationDelay: '0.4s'}}>
              Votre partenaire de confiance dans le BTP depuis plus de 05 ans au Cameroun
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fadeInUp">
              <div className="inline-block mb-4 px-6 py-2 bg-green-100 rounded-full">
                <span className="text-green-700 font-bold uppercase tracking-wider text-sm flex items-center gap-2 justify-center"><BookOpen size={16} /> Notre histoire</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-gray-900 bg-clip-text text-transparent mb-6">
                Une Entreprise Engagée
              </h2>
            </div>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p className="text-xl font-medium text-gray-900 border-l-4 border-green-600 pl-6 py-2 bg-green-50 rounded-r-lg">
                Fondée en 2020, <strong className="text-green-700">CivilEntreprise</strong> est devenue une référence dans le secteur du BTP au Cameroun.
              </p>
              <p className="pl-6">
                Notre entreprise s'est développée grâce à notre engagement envers la qualité, l'innovation et la satisfaction client. 
                Chaque projet est une nouvelle opportunité de démontrer notre savoir-faire et notre professionnalisme.
              </p>
              <p className="pl-6">
                Avec plus de <span className="font-bold text-green-600">50 projets réalisés</span> à travers tout le Cameroun, nous avons su nous adapter aux évolutions du marché tout en conservant 
                nos valeurs fondamentales : <span className="font-semibold text-orange-600">rigueur, professionnalisme et respect des engagements</span>.
              </p>
              <p className="pl-6">
                Aujourd'hui, notre équipe de professionnels qualifiés intervient sur tous types de chantiers, 
                de la construction neuve à la rénovation, en passant par les travaux publics et le gros œuvre partout au Cameroun.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-600 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-110 transition-all duration-300">
              <div className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-3 animate-scaleIn">
                {counts.projects}+
              </div>
              <div className="text-gray-300 font-medium text-lg">Projets réalisés</div>
            </div>
            <div className="text-center group hover:scale-110 transition-all duration-300">
              <div className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-3 animate-scaleIn" style={{animationDelay: '0.1s'}}>
                {counts.surface}K+
              </div>
              <div className="text-gray-300 font-medium text-lg">m² construits</div>
            </div>
            <div className="text-center group hover:scale-110 transition-all duration-300">
              <div className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-3 animate-scaleIn" style={{animationDelay: '0.2s'}}>
                {counts.team}+
              </div>
              <div className="text-gray-300 font-medium text-lg">Collaborateurs</div>
            </div>
            <div className="text-center group hover:scale-110 transition-all duration-300">
              <div className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-3 animate-scaleIn" style={{animationDelay: '0.3s'}}>
                {counts.satisfaction}%
              </div>
              <div className="text-gray-300 font-medium text-lg">Clients satisfaits</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-block mb-4 px-6 py-2 bg-orange-100 rounded-full">
              <span className="text-orange-700 font-bold uppercase tracking-wider text-sm flex items-center gap-2 justify-center"><Star size={16} /> Nos principes</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-orange-800 to-gray-900 bg-clip-text text-transparent mb-6">
              Nos Valeurs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Les principes qui guident notre action au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-green-200 text-center relative overflow-hidden"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-orange-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="inline-flex p-6 bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl mb-6 text-orange-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  <div className="mt-6 h-1 w-0 bg-gradient-to-r from-green-600 to-orange-600 mx-auto group-hover:w-full transition-all duration-500 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-block mb-4 px-6 py-2 bg-green-100 rounded-full">
              <span className="text-green-700 font-bold uppercase tracking-wider text-sm flex items-center gap-2 justify-center"><HardHat size={16} /> L'équipe</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-gray-900 bg-clip-text text-transparent mb-6">
              Notre Équipe
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Des professionnels expérimentés et passionnés à votre service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="group text-center relative"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative mb-6">
                  <div className="w-40 h-40 bg-gradient-to-br from-green-500 to-green-700 rounded-full mx-auto flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-green-500/50 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Users size={56} className="text-white relative z-10 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 group-hover:-bottom-3 transition-all duration-300">
                    Expert
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {member.name}
                </h3>
                <div className="text-orange-600 font-bold mb-3 text-lg">
                  {member.role}
                </div>
                <p className="text-gray-600 font-medium">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-block mb-4 px-6 py-2 bg-orange-100 rounded-full">
              <span className="text-orange-700 font-bold uppercase tracking-wider text-sm flex items-center gap-2 justify-center"><Award size={16} /> Certifications</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-orange-800 to-gray-900 bg-clip-text text-transparent mb-6">
              Certifications & Qualifications
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Des garanties de qualité et de professionnalisme reconnues
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="group flex items-center gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-green-200"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <CheckCircle className="text-orange-600 group-hover:text-green-600 transition-colors" size={28} />
                    </div>
                  </div>
                  <span className="text-gray-700 font-semibold text-lg group-hover:text-green-700 transition-colors">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fadeInUp">
              <div className="inline-block mb-4 px-6 py-2 bg-green-100 rounded-full">
                <span className="text-green-700 font-bold uppercase tracking-wider text-sm flex items-center gap-2 justify-center"><Shield size={16} /> Engagement</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-gray-900 bg-clip-text text-transparent mb-6">
                Notre Engagement
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="group text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-green-200">
                <div className="inline-flex p-6 bg-gradient-to-br from-green-100 to-green-50 rounded-3xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <Shield className="text-green-600" size={48} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                  Sécurité
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Respect strict des normes de sécurité sur tous nos chantiers avec formation continue
                </p>
              </div>

              <div className="group text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-orange-200">
                <div className="inline-flex p-6 bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <Target className="text-orange-600" size={48} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                  Environnement
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Utilisation de matériaux écologiques et gestion responsable des déchets de chantier
                </p>
              </div>

              <div className="group text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-green-200">
                <div className="inline-flex p-6 bg-gradient-to-br from-green-100 to-green-50 rounded-3xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <TrendingUp className="text-green-600" size={48} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                  Innovation
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Formation continue et adoption des nouvelles technologies du secteur BTP
                </p>
              </div>
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
              <span className="font-bold uppercase tracking-wider text-sm flex items-center gap-2 justify-center"><UserPlus size={16} /> Rejoignez-nous</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeInUp leading-tight" style={{animationDelay: '0.2s'}}>
              Rejoignez nos clients satisfaits
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-green-100 leading-relaxed animate-fadeInUp" style={{animationDelay: '0.4s'}}>
              Confiez-nous votre projet et bénéficiez de notre expertise reconnue partout au Cameroun
            </p>
            <a
              href="/contact"
              className="group inline-block bg-orange-500 text-white px-12 py-5 rounded-xl hover:bg-orange-600 transition-all duration-300 font-bold text-xl shadow-2xl hover:shadow-orange-900/50 hover:scale-110 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
              <span className="flex items-center gap-3">
                Contactez-nous
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
