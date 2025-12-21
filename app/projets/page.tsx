import { getRealisationsEtConseils } from '../../lib/getRealisationsEtConseils';
import ProjetsClient from './projets-client';

export default function ProjetsPage() {
  // This runs on the server, so fs import is safe
  const realisations = getRealisationsEtConseils();

  return <ProjetsClient realisations={realisations} />;
}
