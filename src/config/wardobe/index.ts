/**
 * Configuration complète domaine Wardrobe
 * Centralise taxonomy, materials, styles, gradients
 */

import { CLOTHING_TAXONOMY } from './taxonomy';
import { MATERIALS } from './materials';
import { CLOTHING_STYLES } from './styles';
import { CLOTHING_PARTS } from './parts';
import { GRADIENTS } from './gradients';
import { COLORS } from './colors';
import type { AppConfig } from '../base.config';

export const wardrobeConfig: AppConfig = {
  domain: 'wardrobe',
  taxonomy: CLOTHING_TAXONOMY,
  materials: MATERIALS,
  styles: CLOTHING_STYLES,
  parts: CLOTHING_PARTS,
  gradients: GRADIENTS,
  colors: COLORS,
};

// Re-exports pour backward compatibility
export { CLOTHING_TAXONOMY } from './taxonomy';
export { MATERIALS } from './materials';
export { CLOTHING_STYLES } from './styles';
export { CLOTHING_PARTS } from './parts';
export { GRADIENTS } from './gradients';
export { COLORS } from './colors';

// Types helpers
export type {
  SuperCategory,
  Category,
  ClothingItem,
} from './taxonomy';

export type {
  StyleKey,
  MaterialKey,
  PartieKey,
} from './types';