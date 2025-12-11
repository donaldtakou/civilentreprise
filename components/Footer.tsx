import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div className="space-y-6">
            <div className="group">
              <img src="/logo/logo2.png" alt="CivilEntreprise" className="h-14 w-auto mb-6 rounded-full ring-2 ring-green-600/30 group-hover:ring-4 group-hover:ring-orange-500/50 transition-all duration-300" />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Votre partenaire de confiance pour tous vos projets BTP partout au Cameroun. Excellence et innovation depuis 05 ans.
            </p>
            <div className="flex gap-4">
              <a href="#" className="group p-3 bg-gray-800 rounded-lg hover:bg-gradient-to-br hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-110 shadow-lg">
                <Facebook size={20} className="group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="group p-3 bg-gray-800 rounded-lg hover:bg-gradient-to-br hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-110 shadow-lg">
                <Linkedin size={20} className="group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="group p-3 bg-gray-800 rounded-lg hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 transition-all duration-300 hover:scale-110 shadow-lg">
                <Instagram size={20} className="group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Liens rapides
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-green-600 to-orange-600 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="group flex items-center gap-2 hover:text-green-400 transition-all duration-300 hover:translate-x-2">
                  <ArrowRight size={16} className="text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Accueil</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="group flex items-center gap-2 hover:text-green-400 transition-all duration-300 hover:translate-x-2">
                  <ArrowRight size={16} className="text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Nos Services</span>
                </Link>
              </li>
              <li>
                <Link href="/projets" className="group flex items-center gap-2 hover:text-green-400 transition-all duration-300 hover:translate-x-2">
                  <ArrowRight size={16} className="text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Nos Projets</span>
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="group flex items-center gap-2 hover:text-green-400 transition-all duration-300 hover:translate-x-2">
                  <ArrowRight size={16} className="text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>À propos</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="group flex items-center gap-2 hover:text-green-400 transition-all duration-300 hover:translate-x-2">
                  <ArrowRight size={16} className="text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Nos Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-green-600 to-orange-600 rounded-full"></span>
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">✓</span>
                <span>Gros œuvre</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">✓</span>
                <span>Terrassement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">✓</span>
                <span>Maçonnerie</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">✓</span>
                <span>Rénovation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">✓</span>
                <span>Travaux publics</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-green-600 to-orange-600 rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin size={20} className="mt-1 flex-shrink-0 text-green-600 group-hover:text-orange-600 transition-colors" />
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  Yaoundé, Cameroun<br />Quartier Bastos
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone size={20} className="flex-shrink-0 text-green-600 group-hover:text-orange-600 transition-colors" />
                <a href="tel:+237695927172" className="hover:text-green-400 transition-colors">
                  +237 695 927 172
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone size={20} className="flex-shrink-0 text-green-600 group-hover:text-orange-600 transition-colors" />
                <a href="tel:+237676570185" className="hover:text-green-400 transition-colors">
                  +237 676 570 185
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail size={20} className="flex-shrink-0 text-green-600 group-hover:text-orange-600 transition-colors" />
                <a href="mailto:contact@civilentreprise.com" className="hover:text-green-400 transition-colors break-all">
                  contact@civilentreprise.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} <span className="text-green-400 font-semibold">CivilEntreprise</span>. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-green-400 transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-green-400 transition-colors">Politique de confidentialité</a>
              <a href="#" className="hover:text-green-400 transition-colors">CGV</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
