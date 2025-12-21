'use client';

import Image from 'next/image';
import { useState } from 'react';
import { RealisationConseil } from '../lib/getRealisationsEtConseils';

type Props = {
  realisations: RealisationConseil[];
};

export default function RealisationsEtConseils({ realisations }: Props) {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  const getDescriptionPreview = (description: string) => {
    const maxLength = 150;
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength) + '...';
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Réalisations et Conseils</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {realisations.map((real, idx) => {
            const isExpanded = expandedItems.has(idx);
            const description = real.description.trim();
            const hasLongDescription = description.length > 150;

            return (
              <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-4 text-green-800">{real.titre}</h3>

                  {real.images.length > 0 && (
                    <div className="mb-4">
                      <div className="flex gap-2 overflow-x-auto pb-2">
                        {real.images.map((img, i) => (
                          <div key={i} className="flex-shrink-0">
                            <Image
                              src={img}
                              alt={`${real.titre} - Image ${i + 1}`}
                              width={200}
                              height={150}
                              className="rounded-lg object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="text-gray-700">
                    <p className="text-sm leading-relaxed whitespace-pre-line">
                      {isExpanded || !hasLongDescription
                        ? description
                        : getDescriptionPreview(description)
                      }
                    </p>

                    {hasLongDescription && (
                      <button
                        onClick={() => toggleExpanded(idx)}
                        className="mt-3 text-green-600 hover:text-green-800 font-medium text-sm transition-colors duration-200 flex items-center gap-1"
                      >
                        {isExpanded ? (
                          <>
                            Voir moins
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                          </>
                        ) : (
                          <>
                            Voir plus
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
