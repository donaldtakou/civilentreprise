'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Building2, Hammer, Truck, HardHat, Briefcase, Home, Globe, DollarSign, FileText, HelpCircle, PhoneCall } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construire le corps de l'email avec toutes les informations
    const emailBody = `
Nouvelle demande de devis - CivilEntreprise

INFORMATIONS CLIENT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Nom: ${formData.name}
Email: ${formData.email}
Téléphone: ${formData.phone}

TYPE DE PROJET:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${formData.subject}

MESSAGE/DÉTAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${formData.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Date de la demande: ${new Date().toLocaleString('fr-FR')}
    `.trim();

    // Créer le lien mailto avec toutes les informations
    const mailtoLink = `mailto:contact@civilentreprise.com?subject=${encodeURIComponent(`Demande de devis - ${formData.name}`)}&body=${encodeURIComponent(emailBody)}`;
    
    // Ouvrir le client email
    window.location.href = mailtoLink;
    
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              <span className="font-bold uppercase tracking-wider text-sm flex items-center gap-2 justify-center"><PhoneCall size={16} /> Contactez-nous</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp leading-tight" style={{animationDelay: '0.2s'}}>
              Parlons de votre projet
            </h1>
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed animate-fadeInUp" style={{animationDelay: '0.4s'}}>
              Notre équipe est à votre disposition pour répondre à toutes vos questions
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="mb-8 animate-fadeInUp">
                <div className="inline-block mb-4 px-6 py-2 bg-green-100 rounded-full">
                  <span className="text-green-700 font-bold uppercase tracking-wider text-sm">📝 Formulaire</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Demander un devis gratuit
                </h2>
                <p className="text-gray-600 text-lg">
                  Remplissez le formulaire et nous vous répondrons <span className="font-bold text-green-600">sous 24 heures</span>.
                </p>
              </div>

              {isSubmitted && (
                <div className="bg-gradient-to-r from-green-100 to-green-50 border-2 border-green-400 text-green-800 px-6 py-4 rounded-xl mb-8 shadow-lg animate-scaleIn flex items-center gap-3">
                  <CheckCircle className="text-green-600" size={24} />
                  <span className="font-bold">Merci ! Votre message a été envoyé avec succès.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label htmlFor="name" className="block text-gray-800 font-bold mb-3 text-lg">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 text-lg group-hover:border-gray-300 shadow-sm"
                    placeholder="Votre nom complet"
                  />
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-gray-800 font-bold mb-3 text-lg">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 text-lg group-hover:border-gray-300 shadow-sm"
                    placeholder="votre@email.com"
                  />
                </div>

                <div className="group">
                  <label htmlFor="phone" className="block text-gray-800 font-bold mb-3 text-lg">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 text-lg group-hover:border-gray-300 shadow-sm"
                    placeholder="+237 6XX XXX XXX"
                  />
                </div>

                <div className="group">
                  <label htmlFor="subject" className="block text-gray-800 font-bold mb-3 text-lg">
                    Type de projet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 text-lg group-hover:border-gray-300 shadow-sm appearance-none bg-white"
                  >
                    <option value="">Sélectionnez un type de projet</option>
                    <option value="gros-oeuvre">Gros Œuvre</option>
                    <option value="terrassement">Terrassement</option>
                    <option value="maconnerie">Maçonnerie</option>
                    <option value="renovation">Rénovation</option>
                    <option value="travaux-publics">Travaux Publics</option>
                    <option value="construction-neuve">Construction Neuve</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-gray-800 font-bold mb-3 text-lg">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 text-lg group-hover:border-gray-300 shadow-sm resize-none"
                    placeholder="Décrivez votre projet en détail..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-5 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 font-bold text-xl shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-3"
                >
                  <Send size={24} className="group-hover:translate-x-1 transition-transform" />
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="order-1 lg:order-2">
              <div className="sticky top-24 space-y-8">
                <div className="mb-8 animate-fadeInUp">
                  <div className="inline-block mb-4 px-6 py-2 bg-orange-100 rounded-full">
                    <span className="text-orange-700 font-bold uppercase tracking-wider text-sm flex items-center gap-2"><MapPin size={16} /> Coordonnées</span>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Nos coordonnées
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Plusieurs moyens de nous joindre
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="group flex items-start gap-5 p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-2 border-transparent hover:border-green-200">
                    <div className="p-4 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <MapPin className="text-orange-600" size={28} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-xl group-hover:text-green-600 transition-colors">Adresse</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        <span className="font-semibold">Yaoundé, Cameroun</span><br />
                        Quartier Bastos<br />
                        <span className="text-green-600 font-medium">Nous intervenons partout au Cameroun</span>
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-5 p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-2 border-transparent hover:border-green-200">
                    <div className="p-4 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <Phone className="text-green-600" size={28} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-xl group-hover:text-green-600 transition-colors">Téléphone</h3>
                      <p className="text-gray-600 space-y-1">
                        <a href="tel:+237695927172" className="hover:text-green-600 block font-semibold text-lg transition-colors">
                          +237 695 927 172
                        </a>
                        <a href="tel:+237676570185" className="hover:text-green-600 block font-semibold text-lg transition-colors">
                          +237 676 570 185
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-5 p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-2 border-transparent hover:border-green-200">
                    <div className="p-4 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <Mail className="text-orange-600" size={28} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-xl group-hover:text-orange-600 transition-colors">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:contact@civilentreprise.com" className="hover:text-orange-600 font-semibold text-lg transition-colors break-all">
                          contact@civilentreprise.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-5 p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-2 border-transparent hover:border-green-200">
                    <div className="p-4 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <Clock className="text-green-600" size={28} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-xl group-hover:text-green-600 transition-colors">Horaires</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        <span className="font-semibold">Lundi - Vendredi</span> : 8h00 - 18h00<br />
                        <span className="font-semibold">Samedi</span> : 9h00 - 12h00<br />
                        <span className="font-semibold">Dimanche</span> : Fermé
                      </p>
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border-2 border-green-200 shadow-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-green-600 rounded-xl animate-pulse shadow-glow-green">
                      <Phone className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-green-900">
                      Urgence BTP ?
                    </h3>
                  </div>
                  <p className="text-green-800 mb-6 text-lg leading-relaxed">
                    Pour toute urgence ou intervention rapide, contactez-nous directement
                  </p>
                  <a
                    href="tel:+237695927172"
                    className="block bg-green-600 text-white px-6 py-4 rounded-xl hover:bg-green-700 transition-all duration-300 font-bold text-center shadow-xl hover:shadow-2xl hover:scale-105 text-lg">
                    +237 695 927 172
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-white via-green-50/30 to-orange-50/30 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-green-100 to-orange-100 rounded-full">
              <span className="text-green-700 font-bold uppercase tracking-wider text-sm flex items-center gap-2"><HelpCircle size={16} /> Questions Fréquentes</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Vous avez des questions ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Retrouvez les réponses aux questions les plus fréquentes
            </p>
          </div>

          <div className="space-y-6">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-green-200 hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-xl group-hover:bg-green-200 transition-colors"><Building2 size={28} className="text-green-600" /></div>
                Quels types de projets réalisez-vous ?
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Nous réalisons tous types de projets : construction de maisons individuelles et immeubles, 
                rénovation complète, extensions, terrassement, VRD, et travaux de génie civil. 
                Du gros œuvre aux finitions, nous accompagnons votre projet de A à Z.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-orange-200 hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-xl group-hover:bg-orange-200 transition-colors"><Clock size={28} className="text-orange-600" /></div>
                Quels sont vos délais d'intervention ?
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Nous proposons un devis gratuit sous 48h après la visite de votre site. 
                Pour les urgences, nous intervenons dans les 24h. 
                Les délais de réalisation varient selon l'ampleur du projet et sont définis précisément dans le devis.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-green-200 hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-xl group-hover:bg-green-200 transition-colors"><DollarSign size={28} className="text-green-600" /></div>
                Proposez-vous des facilités de paiement ?
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Oui, nous proposons des échéanciers de paiement adaptés à votre projet. 
                Généralement : 30% à la commande, 40% en cours de chantier, et 30% à la livraison. 
                Des arrangements personnalisés sont possibles selon votre situation.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-orange-200 hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-xl group-hover:bg-orange-200 transition-colors"><FileText size={28} className="text-orange-600" /></div>
                Êtes-vous assurés et certifiés ?
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Absolument ! Nous disposons de toutes les assurances obligatoires (responsabilité civile, décennale) 
                et nos équipes sont formées aux normes de sécurité. Nous sommes également certifiés par 
                les organismes professionnels du BTP au Cameroun.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-green-200 hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-xl group-hover:bg-green-200 transition-colors"><Globe size={28} className="text-green-600" /></div>
                Dans quelles zones intervenez-vous ?
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Basés à Yaoundé, nous intervenons dans tout le Cameroun. 
                Nos équipes se déplacent pour tous types de projets, quelle que soit la région. 
                N'hésitez pas à nous contacter pour vérifier notre disponibilité dans votre zone.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6 text-xl">
              Vous ne trouvez pas la réponse à votre question ?
            </p>
            <a
              href="tel:+237695927172"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 text-white px-10 py-5 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 font-bold shadow-xl hover:shadow-2xl hover:scale-105 text-lg"
            >
              <Phone className="group-hover:rotate-12 transition-transform" size={24} />
              Contactez-nous directement
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
