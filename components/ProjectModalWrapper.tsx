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

interface ProjectModalWrapperProps {
  project: Project;
}

export default function ProjectModalWrapper({ project }: ProjectModalWrapperProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
      >
        <FolderOpen size={18} />
        En savoir plus
      </button>

      <ProjectDetailsModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}