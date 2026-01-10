/**
 * Auto-mapping type → partie (générique)
 */

import { CLOTHING_TAXONOMY } from '../../config/wardrobe/taxonomy';
import type { PartieType } from "../../config/wardobe/types";

export const getPartieFromType = (type: string): PartieType => {
  for (const [superCatKey, superCat] of Object.entries(CLOTHING_TAXONOMY)) {
    for (const [catKey, category] of Object.entries(superCat.categories)) {
      if (type in category.items) {
        switch (superCatKey) {
          case 'hauts':
            return 'Top';
          case 'bas':
            return 'Bottom';
          case 'robes-combinaisons':
            return 'Ensemble';
          case 'manteaux-exterieurs':
            return 'Exterieur';
          case 'lingerie':
            if (catKey === 'soutiens-gorge') return 'Top';
            return 'OnBody';
          case 'chaussures':
            return 'Chaussures';
          case 'accessoires':
            if (catKey === 'bijoux' || catKey === 'cheveux') return 'Top';
            return 'Accessoire';
          case 'sport-maillots':
            return 'Ensemble';
          case 'nuit-detente':
            return 'Ensemble';
          default:
            return 'Top';
        }
      }
    }
  }
  return 'Top';
};