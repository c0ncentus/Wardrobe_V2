/**
 * Interface générique Item
 * Étendue par chaque domaine (Vetement, Book, Recipe, etc.)
 */

export interface BaseItemConfig {
  id: string;
  titre: string;
  lien: string;
  image: string;
  description: string;
  collections: string[];
  createdAt: number;
  updatedAt: number;
}

export type ItemId = string;
export type ItemTitle = string;
export type ItemUrl = string;