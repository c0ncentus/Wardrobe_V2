/**
 * Types génériques pour filtres
 */

export interface BaseFilterState {
  search: string;
  [key: string]: any;
}

export type FilterValue = string | boolean | number | 'tous';