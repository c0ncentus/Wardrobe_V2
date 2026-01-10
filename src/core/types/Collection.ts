/**
 * Interface générique Collection
 */

export interface BaseCollectionConfig {
  id: string;
  titre: string;
  items: string[];
  text: string;
  createdAt: number;
  updatedAt: number;
}

export type CollectionId = string;