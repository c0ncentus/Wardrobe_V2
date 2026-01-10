/**
 * Configuration générique pour tous les domaines
 * Interface abstraite étendue par chaque domaine (wardrobe, books, etc.)
 */

export interface BaseItem {
  id: string;
  titre: string;
  lien: string;
  image: string;
  description: string;
  collections: string[];
  createdAt: number;
  updatedAt: number;
}

export interface BaseCollection {
  id: string;
  titre: string;
  items: string[];
  text: string;
  createdAt: number;
  updatedAt: number;
}

export interface TaxonomyNode {
  value: string;
  label: string;
  children?: TaxonomyNode[];
}

export interface MaterialConfig {
  label: string;
  category: string;
  properties: string[];
  care: string;
}

export interface StyleConfig {
  label: string;
  description: string;
  examples: string[];
}

export interface AppConfig {
  domain: string;
  taxonomy: Record<string, any>;
  materials?: Record<string, MaterialConfig>;
  styles: Record<string, StyleConfig>;
  parts: Record<string, { label: string; description: string }>;
  gradients: Record<string, string>;
  colors: Record<string, any>;
}