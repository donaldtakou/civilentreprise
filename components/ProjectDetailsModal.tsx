'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { X, MapPin, FolderOpen, CheckCircle } from 'lucide-react';

interface Project {
  title: string;
  location: string;
  category: string;
  description?: string;
  highlights?: string[];
  images?: string[];
  image?: string;
  video?: string;
  type?: string;
}

interface ProjectDetailsModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

function ProjectDetailsModal({ project, isOpen, onClose }: ProjectDetailsModalProps) {
  // Gestion de la touche Échap
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Fonction pour gérer les erreurs d'images
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
    console.warn(`Image non trouvée: ${target.src}`);
  };

  // Fonction pour gérer les erreurs de vidéos
  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const target = e.target as HTMLVideoElement;
    target.style.display = 'none';
    console.warn(`Vidéo non trouvée: ${target.src}`);
  };

  if (!project) return null;

  return (
    <div className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <div className={`bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300 ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}>
        {/* Header */}
        <div className="relative bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
          <h2 className="text-3xl font-bold mb-2 pr-12">{project.title}</h2>
          <div className="flex items-center gap-4 text-green-100">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <FolderOpen size={16} />
              <span>{project.category}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Description */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Description du projet</h3>
            <p className="text-gray-700 leading-relaxed">{project.description}</p>
          </div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Points forts</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {project.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Media Gallery */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Galerie</h3>
            {Array.isArray(project.images) ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.images.map((img, index) => (
                  <div key={index} className="relative group overflow-hidden rounded-lg">
                    <img
                      src={img}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={handleImageError}
                    />
                  </div>
                ))}
              </div>
            ) : project.video ? (
              <div className="relative overflow-hidden rounded-lg bg-black">
                <video
                  controls
                  className="w-full max-h-96"
                  poster={project.image}
                  onError={handleVideoError}
                >
                  <source src={project.video} type="video/mp4" />
                </video>
              </div>
            ) : (
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                  onError={handleImageError}
                />
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="text-center pt-6 border-t">
            <Link
              href="/contact"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
              onClick={onClose}
            >
              Demander un devis similaire
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailsModal;