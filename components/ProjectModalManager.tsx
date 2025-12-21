'use client';

import { useState } from 'react';
import { FolderOpen } from 'lucide-react';
import ProjectDetailsModal from './ProjectDetailsModal';

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

interface ProjectModalManagerProps {
  projects: Project[];
}

function ProjectModalManager({ projects }: ProjectModalManagerProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
            {/* Media Section */}
            <div className="relative h-64 overflow-hidden">
              {Array.isArray(project.images) && project.images.length > 0 ? (
                <div className="flex h-full">
                  {project.images.slice(0, 3).map((img, imgIndex) => (
                    <div key={imgIndex} className="flex-1 relative group-hover:scale-110 transition-transform duration-700" style={{minWidth: '100%'}}>
                      <img
                        src={img}
                        alt={`${project.title} - Image ${imgIndex + 1}`}
                        className="w-full h-full object-cover"
                        onError={handleImageError}
                      />
                    </div>
                  ))}
                </div>
              ) : project.video ? (
                <video
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  muted
                  loop
                  playsInline
                  poster={project.image}
                  onError={handleVideoError}
                >
                  <source src={project.video} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={handleImageError}
                />
              )}
            </div>

            {/* Project Title and Button */}
            <div className="p-6 flex flex-col items-center justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-green-700 transition-colors">
                {project.title}
              </h3>
              <div className="text-center mb-6">
                <p className="text-gray-600 mb-1">{project.location}</p>
                <p className="text-sm text-gray-500">{project.category}</p>
              </div>
              <button
                onClick={() => setSelectedProject(project)}
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
              >
                <FolderOpen size={18} />
                En savoir plus
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

export default ProjectModalManager;