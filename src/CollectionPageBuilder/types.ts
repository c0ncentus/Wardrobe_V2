export type BlockType = 
  | 'heading' 
  | 'text' 
  | 'image' 
  | 'gallery' 
  | 'outfit' 
  | 'spacer' 
  | 'divider'
  | 'stats'
  | 'quote'
  | 'grid3'
  | 'hero'
  | 'timeline';

export interface PageBlock {
  id: string;
  type: BlockType;
  content: any;
}

export interface CollectionPage {
  blocks: PageBlock[];
  theme?: PageTheme;
}

export interface PageTheme {
  gradient: string;
  accent: string;
}

export const GRADIENTS = {
  purple: 'from-purple-500 via-pink-500 to-red-500',
  ocean: 'from-blue-500 via-cyan-500 to-teal-500',
  sunset: 'from-orange-500 via-red-500 to-pink-500',
  forest: 'from-green-500 via-emerald-500 to-teal-500',
  gothic: 'from-gray-900 via-purple-900 to-black',
  candy: 'from-pink-400 via-purple-400 to-indigo-400',
  fire: 'from-red-600 via-orange-500 to-yellow-500',
  ice: 'from-cyan-300 via-blue-400 to-indigo-500',
  rose: 'from-rose-400 via-pink-500 to-purple-500',
  neon: 'from-green-400 via-cyan-400 to-blue-500',
};
