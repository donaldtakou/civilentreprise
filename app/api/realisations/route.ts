import { NextRequest, NextResponse } from 'next/server';
import { getRealisationsEtConseils } from '../../../lib/getRealisationsEtConseils';

export async function GET() {
  try {
    const realisations = getRealisationsEtConseils();
    return NextResponse.json(realisations);
  } catch (error) {
    console.error('Erreur lors de la récupération des réalisations:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des données' },
      { status: 500 }
    );
  }
}