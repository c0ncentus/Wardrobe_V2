// Import all valid types from static data
export type StyleType = keyof typeof import('../config/wardobe/materials.ts').CLOTHING_STYLES;
export type VetementType = string; // Will be validated against CLOTHING_TAXONOMY
export type PartieType = 'Ensemble' | 'Top' | 'Bottom' | 'OnBody' | 'Accessoire' | 'Chaussures' | 'Lingerie' | 'Exterieur';
export type MaterialType = keyof typeof import('../config/wardobe/materials.ts').MATERIALS;

export interface Vetement {
  id: string;
  titre: string;
  lien: string;
  image: string;
  description: string;
  style: StyleType;
  estTenueComplete: boolean;
  type: VetementType;
  partie: PartieType;
  materials: MaterialType[]; // Array of materials
  collections: string[]; // Array of collection IDs
  createdAt: number;
  updatedAt: number;
}

export interface Collection {
  id: string;
  titre: string;
  vetements: string[]; // Array of vetement IDs
  text: string; // Markdown text
  articles?: CollectionArticle[]; // Multiple visual articles
  createdAt: number;
  updatedAt: number;
}

export interface CollectionArticle {
  id: string;
  titre: string;
  page: import('./CollectionPageBuilder/types').CollectionPage;
  createdAt: number;
  updatedAt: number;
}

export interface FilterState {
  search: string;
  style: StyleType | 'tous';
  type: VetementType | 'tous';
  partie: PartieType | 'tous';
  estTenueComplete: boolean | 'tous';
}

export type ViewMode = 'vetements' | 'collections';
