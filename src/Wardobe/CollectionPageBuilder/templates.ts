import { PageBlock, GRADIENTS } from './types';

export interface Template {
  id: string;
  name: string;
  description: string;
  gradient: keyof typeof GRADIENTS;
  blocks: PageBlock[];
}

export const TEMPLATES: Template[] = [
  {
    id: 'hero-minimal',
    name: 'Hero Minimal',
    description: 'Grande image avec titre superposé',
    gradient: 'gothic',
    blocks: [
      { id: '1', type: 'hero', content: { title: 'Titre Principal', subtitle: 'Sous-titre accrocheur', image: '' } },
      { id: '2', type: 'text', content: { text: 'Description captivante...', size: 'base', align: 'center' } },
      { id: '3', type: 'outfit', content: { title: 'Look Principal', vetementIds: [] } },
    ],
  },
  {
    id: 'magazine',
    name: 'Magazine Editorial',
    description: 'Style magazine de mode',
    gradient: 'purple',
    blocks: [
      { id: '1', type: 'heading', content: { text: 'ÉDITION SPÉCIALE', level: 'h1', align: 'center' } },
      { id: '2', type: 'spacer', content: { size: 'md' } },
      { id: '3', type: 'grid3', content: { items: [{}, {}, {}] } },
      { id: '4', type: 'quote', content: { text: 'La mode se démode, le style jamais', author: 'Coco Chanel' } },
      { id: '5', type: 'gallery', content: { vetementIds: [], columns: 3 } },
    ],
  },
  {
    id: 'stats-showcase',
    name: 'Stats Showcase',
    description: 'Présentation avec statistiques',
    gradient: 'ocean',
    blocks: [
      { id: '1', type: 'heading', content: { text: 'Collection Stats', level: 'h2', align: 'center' } },
      { id: '2', type: 'stats', content: { stats: [
        { label: 'Pièces', value: '12', color: 'blue' },
        { label: 'Looks', value: '8', color: 'purple' },
        { label: 'Marques', value: '5', color: 'pink' }
      ]}},
      { id: '3', type: 'divider', content: { style: 'solid', color: 'slate' } },
      { id: '4', type: 'gallery', content: { vetementIds: [], columns: 4 } },
    ],
  },
  {
    id: 'timeline',
    name: 'Timeline Story',
    description: 'Histoire chronologique',
    gradient: 'sunset',
    blocks: [
      { id: '1', type: 'heading', content: { text: 'Mon Évolution Style', level: 'h1', align: 'center' } },
      { id: '2', type: 'timeline', content: { events: [
        { title: 'Phase 1', description: 'Découverte', date: 'Jan 2024' },
        { title: 'Phase 2', description: 'Expérimentation', date: 'Mar 2024' },
        { title: 'Phase 3', description: 'Affirmation', date: 'Jun 2024' }
      ]}},
    ],
  },
  {
    id: 'grid-gallery',
    name: 'Grid Gallery',
    description: 'Grande galerie en grille',
    gradient: 'candy',
    blocks: [
      { id: '1', type: 'heading', content: { text: 'Galerie', level: 'h2', align: 'left' } },
      { id: '2', type: 'text', content: { text: 'Collection complète', size: 'sm', align: 'left' } },
      { id: '3', type: 'spacer', content: { size: 'sm' } },
      { id: '4', type: 'gallery', content: { vetementIds: [], columns: 4 } },
    ],
  },
  {
    id: 'lookbook',
    name: 'Lookbook',
    description: 'Looks organisés par thème',
    gradient: 'rose',
    blocks: [
      { id: '1', type: 'heading', content: { text: 'LOOKBOOK', level: 'h1', align: 'center' } },
      { id: '2', type: 'spacer', content: { size: 'md' } },
      { id: '3', type: 'outfit', content: { title: 'Casual Day', vetementIds: [] } },
      { id: '4', type: 'spacer', content: { size: 'md' } },
      { id: '5', type: 'outfit', content: { title: 'Night Out', vetementIds: [] } },
    ],
  },
  {
    id: 'minimalist',
    name: 'Minimalist',
    description: 'Design épuré et simple',
    gradient: 'ice',
    blocks: [
      { id: '1', type: 'heading', content: { text: 'COLLECTION', level: 'h1', align: 'center' } },
      { id: '2', type: 'divider', content: { style: 'solid', color: 'slate' } },
      { id: '3', type: 'gallery', content: { vetementIds: [], columns: 2 } },
    ],
  },
  {
    id: 'colorful',
    name: 'Colorful Grid',
    description: 'Grille 3 colonnes colorée',
    gradient: 'neon',
    blocks: [
      { id: '1', type: 'grid3', content: { items: [
        { color: 'purple', title: 'Tendance 1' },
        { color: 'pink', title: 'Tendance 2' },
        { color: 'blue', title: 'Tendance 3' }
      ]}},
      { id: '2', type: 'gallery', content: { vetementIds: [], columns: 3 } },
    ],
  },
  {
    id: 'editorial',
    name: 'Editorial Split',
    description: 'Division 50/50 texte/image',
    gradient: 'forest',
    blocks: [
      { id: '1', type: 'heading', content: { text: 'Nouveau Chapitre', level: 'h1', align: 'left' } },
      { id: '2', type: 'text', content: { text: 'Une nouvelle ère commence...', size: 'lg', align: 'left' } },
      { id: '3', type: 'image', content: { url: '', alt: '', size: 'full' } },
      { id: '4', type: 'outfit', content: { title: 'Featured Look', vetementIds: [] } },
    ],
  },
  {
    id: 'quote-focus',
    name: 'Quote Focus',
    description: 'Centré sur une citation',
    gradient: 'purple',
    blocks: [
      { id: '1', type: 'spacer', content: { size: 'lg' } },
      { id: '2', type: 'quote', content: { text: 'Style is a way to say who you are without having to speak', author: 'Rachel Zoe' } },
      { id: '3', type: 'spacer', content: { size: 'lg' } },
      { id: '4', type: 'gallery', content: { vetementIds: [], columns: 3 } },
    ],
  },
  {
    id: 'seasonal',
    name: 'Seasonal Guide',
    description: 'Guide saisonnier',
    gradient: 'sunset',
    blocks: [
      { id: '1', type: 'heading', content: { text: 'AUTOMNE 2024', level: 'h1', align: 'center' } },
      { id: '2', type: 'stats', content: { stats: [
        { label: 'Essentiels', value: '15', color: 'orange' },
        { label: 'Tendances', value: '8', color: 'red' }
      ]}},
      { id: '3', type: 'gallery', content: { vetementIds: [], columns: 4 } },
    ],
  },
  {
    id: 'capsule',
    name: 'Capsule Wardrobe',
    description: 'Garde-robe capsule',
    gradient: 'gothic',
    blocks: [
      { id: '1', type: 'heading', content: { text: 'Ma Capsule', level: 'h2', align: 'center' } },
      { id: '2', type: 'text', content: { text: '10 pièces essentielles pour créer 30 looks', size: 'base', align: 'center' } },
      { id: '3', type: 'spacer', content: { size: 'md' } },
      { id: '4', type: 'gallery', content: { vetementIds: [], columns: 2 } },
      { id: '5', type: 'divider', content: { style: 'dashed', color: 'purple' } },
      { id: '6', type: 'outfit', content: { title: 'Combinaison 1', vetementIds: [] } },
    ],
  },
  {
    id: 'event',
    name: 'Event Planning',
    description: 'Organisation événement',
    gradient: 'rose',
    blocks: [
      { id: '1', type: 'hero', content: { title: 'GALA 2024', subtitle: 'Samedi 15 Juin', image: '' } },
      { id: '2', type: 'timeline', content: { events: [
        { title: 'Préparation', description: 'Essayages', date: '1 semaine avant' },
        { title: 'Final Look', description: 'Derniers ajustements', date: 'Veille' }
      ]}},
      { id: '3', type: 'outfit', content: { title: 'Tenue Principale', vetementIds: [] } },
    ],
  },
  {
    id: 'trends',
    name: 'Trends Report',
    description: 'Rapport tendances',
    gradient: 'neon',
    blocks: [
      { id: '1', type: 'heading', content: { text: 'TENDANCES 2024', level: 'h1', align: 'center' } },
      { id: '2', type: 'grid3', content: { items: [
        { color: 'green', title: 'Y2K Revival' },
        { color: 'cyan', title: 'Cottagecore' },
        { color: 'blue', title: 'Dark Academia' }
      ]}},
      { id: '3', type: 'gallery', content: { vetementIds: [], columns: 3 } },
    ],
  },
  {
    id: 'color-story',
    name: 'Color Story',
    description: 'Histoire de couleurs',
    gradient: 'candy',
    blocks: [
      { id: '1', type: 'heading', content: { text: 'Palette', level: 'h2', align: 'center' } },
      { id: '2', type: 'stats', content: { stats: [
        { label: 'Rose', value: '45%', color: 'pink' },
        { label: 'Noir', value: '35%', color: 'purple' },
        { label: 'Blanc', value: '20%', color: 'blue' }
      ]}},
      { id: '3', type: 'gallery', content: { vetementIds: [], columns: 4 } },
    ],
  },
  {
    id: 'brand-mix',
    name: 'Brand Mix',
    description: 'Mix de marques',
    gradient: 'ocean',
    blocks: [
      { id: '1', type: 'heading', content: { text: 'MES MARQUES', level: 'h1', align: 'center' } },
      { id: '2', type: 'text', content: { text: 'High & Low mix', size: 'lg', align: 'center' } },
      { id: '3', type: 'divider', content: { style: 'solid', color: 'purple' } },
      { id: '4', type: 'gallery', content: { vetementIds: [], columns: 3 } },
    ],
  },
  {
    id: 'vacation',
    name: 'Vacation Pack',
    description: 'Valise voyage',
    gradient: 'sunset',
    blocks: [
      { id: '1', type: 'hero', content: { title: 'ESCAPADE', subtitle: '7 jours, 7 looks', image: '' } },
      { id: '2', type: 'stats', content: { stats: [
        { label: 'Pièces', value: '15', color: 'orange' },
        { label: 'Looks', value: '7', color: 'red' }
      ]}},
      { id: '3', type: 'gallery', content: { vetementIds: [], columns: 2 } },
    ],
  },
  {
    id: 'occasion',
    name: 'Special Occasion',
    description: 'Occasion spéciale',
    gradient: 'purple',
    blocks: [
      { id: '1', type: 'heading', content: { text: 'SOIRÉE COCKTAIL', level: 'h1', align: 'center' } },
      { id: '2', type: 'quote', content: { text: 'Elegance is the only beauty that never fades', author: 'Audrey Hepburn' } },
      { id: '3', type: 'outfit', content: { title: 'Look Principal', vetementIds: [] } },
      { id: '4', type: 'spacer', content: { size: 'md' } },
      { id: '5', type: 'gallery', content: { vetementIds: [], columns: 3 } },
    ],
  },
  {
    id: 'wishlist',
    name: 'Wishlist',
    description: 'Liste de souhaits',
    gradient: 'ice',
    blocks: [
      { id: '1', type: 'heading', content: { text: 'WISHLIST', level: 'h2', align: 'center' } },
      { id: '2', type: 'text', content: { text: 'Mes envies du moment', size: 'base', align: 'center' } },
      { id: '3', type: 'spacer', content: { size: 'sm' } },
      { id: '4', type: 'gallery', content: { vetementIds: [], columns: 4 } },
      { id: '5', type: 'stats', content: { stats: [
        { label: 'Items', value: '12', color: 'cyan' },
        { label: 'Budget', value: '500€', color: 'blue' }
      ]}},
    ],
  },
  {
    id: 'style-evolution',
    name: 'Style Evolution',
    description: 'Évolution de style',
    gradient: 'forest',
    blocks: [
      { id: '1', type: 'heading', content: { text: 'ÉVOLUTION', level: 'h1', align: 'center' } },
      { id: '2', type: 'timeline', content: { events: [
        { title: '2022', description: 'Phase minimaliste', date: 'Année 1' },
        { title: '2023', description: 'Exploration couleurs', date: 'Année 2' },
        { title: '2024', description: 'Style affirmé', date: 'Année 3' }
      ]}},
      { id: '3', type: 'gallery', content: { vetementIds: [], columns: 3 } },
    ],
  },
];
