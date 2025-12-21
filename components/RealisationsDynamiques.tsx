'use client';

import { useState } from 'react';
import { X, Camera } from 'lucide-react';
import { RealisationConseil } from '../lib/getRealisationsEtConseils';

interface RealisationsDynamiquesProps {
  realisations: RealisationConseil[];
}

export default function RealisationsDynamiques({ realisations }: RealisationsDynamiquesProps) {
  console.log('Realisations reçues:', realisations);
  const [selectedRealisation, setSelectedRealisation] = useState<RealisationConseil | null>(null);

  return (
    <>
      {/* Section Réalisations Dynamiques */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Nos Réalisations Récentes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos projets les plus récents avec tous les détails techniques et les résultats obtenus
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {realisations.map((realisation, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-green-200"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Images du projet */}
                <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                  {realisation.images.length > 0 ? (
                    <div className="w-full h-full flex overflow-x-auto snap-x">
                      {realisation.images.slice(0, 3).map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`${realisation.titre} - Image ${i+1}`}
                          className="w-full h-full object-cover snap-center transition-transform duration-700"
                          style={{minWidth: '100%'}}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Camera size={48} className="text-gray-400" />
                    </div>
                  )}
                  {realisation.images.length > 1 && (
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded-full text-sm">
                      +{realisation.images.length - 1}
                    </div>
                  )}
                </div>

                {/* Contenu du projet */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    {realisation.titre}
                  </h3>

                  {/* Aperçu de la description */}
                  <div className="mb-6">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {realisation.description.length > 120
                        ? `${realisation.description.substring(0, 120)}...`
                        : realisation.description
                      }
                    </p>
                  </div>

                  {/* Bouton Voir détails */}
                  <div className="text-center">
                    <button
                      onClick={() => setSelectedRealisation(realisation)}
                      className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      <span>Voir les détails</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal pour les détails */}
      {selectedRealisation && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedRealisation(null)}
        >
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            {/* Bouton fermer */}
            <button
              onClick={() => setSelectedRealisation(null)}
              className="absolute top-4 right-4 bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition-colors z-10"
            >
              <X size={24} />
            </button>

            {/* Titre */}
            <div className="p-8 pb-4">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedRealisation.titre}</h2>
              <div className="w-20 h-1 bg-green-600 rounded-full"></div>
            </div>

            {/* Galerie d'images */}
            {selectedRealisation.images.length > 0 && (
              <div className="px-8 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedRealisation.images.map((img, i) => (
                    <div key={i} className="relative group">
                      <img
                        src={img}
                        alt={`${selectedRealisation.titre} - Image ${i+1}`}
                        className="w-full h-48 object-cover rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Description complète */}
            <div className="px-8 pb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Détails du projet</h3>
              <div className="prose prose-lg max-w-none">
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {selectedRealisation.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}