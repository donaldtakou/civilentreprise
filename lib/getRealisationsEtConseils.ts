import fs from 'fs';
import path from 'path';

export type RealisationConseil = {
  titre: string;
  images: string[];
  description: string;
};

export function getRealisationsEtConseils(): RealisationConseil[] {
  const baseDir = path.join(process.cwd(), 'public', 'realisations');
  if (!fs.existsSync(baseDir)) return [];
  const dossiers = fs.readdirSync(baseDir).filter(item => {
    const itemPath = path.join(baseDir, item);
    return fs.statSync(itemPath).isDirectory() && item !== 'images' && item !== 'videos';
  });
  return dossiers.map((dossier) => {
    const dossierPath = path.join(baseDir, dossier);
    const imagesDir = path.join(dossierPath, 'images');
    const fichiers = fs.readdirSync(imagesDir);
    const images = fichiers.filter((f) => f.match(/\.(jpg|jpeg|png|webp)$/i));
    const descriptionFile = path.join(dossierPath, '1.txt');
    let description = '';
    if (fs.existsSync(descriptionFile)) {
      description = fs.readFileSync(descriptionFile, 'utf-8');
    }
    return {
      titre: dossier,
      images: images.map((img) => `/realisations/${encodeURIComponent(dossier)}/images/${encodeURIComponent(img)}`),
      description,
    };
  });
}
