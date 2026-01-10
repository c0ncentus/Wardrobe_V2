/**
 * Parties de vêtements
 */

export const CLOTHING_PARTS = {
  'Ensemble': {
    label: 'Ensemble',
    description: 'Pièce complète (robe, combinaison, ensemble assorti)',
  },
  'Top': {
    label: 'Top',
    description: 'Haut du corps',
  },
  'Bottom': {
    label: 'Bottom',
    description: 'Bas du corps',
  },
  'OnBody': {
    label: 'OnBody',
    description: 'Sur tout le corps (robe, combinaison)',
  },
  'Accessoire': {
    label: 'Accessoire',
    description: 'Sacs, bijoux, ceintures, etc.',
  },
  'Chaussures': {
    label: 'Chaussures',
    description: 'Toutes les chaussures',
  },
  'Lingerie': {
    label: 'Lingerie',
    description: 'Sous-vêtements et lingerie',
  },
  'Exterieur': {
    label: 'Extérieur',
    description: 'Manteaux, vestes d\'extérieur',
  },
} as const;

export type PartieKey = keyof typeof CLOTHING_PARTS;

export function getPartieOptions() {
  return Object.entries(CLOTHING_PARTS).map(([key, value]) => ({
    value: key,
    label: value.label,
  }));
}