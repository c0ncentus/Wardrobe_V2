import { Vetement, Collection, PartieType } from './types';
import { CLOTHING_TAXONOMY } from './clothingTaxonomy';

/**
 * Generate a unique ID (simple UUID v4)
 */
export const generateId = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

/**
 * Get current timestamp
 */
export const now = (): number => Date.now();

/**
 * Auto-map clothing type to partie based on taxonomy
 */
export const getPartieFromType = (type: string): PartieType => {
  for (const [superCatKey, superCat] of Object.entries(CLOTHING_TAXONOMY)) {
    for (const [catKey, category] of Object.entries(superCat.categories)) {
      if (type in category.items) {
        // Map super-category to partie
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

/**
 * Smart parse title to detect type, materials, style from product name
 */
export const parseProductTitle = (title: string): {
  type: string | null;
  materials: string[];
  styles: string[];
} => {
  const lower = title.toLowerCase();
  
  // Detect type
  const typePatterns: Record<string, string> = {
    // Explicit keywords
    'crop top': 'crop-top',
    'tank top': 'tank-top',
    't-shirt': 'tshirt-basic',
    'tee': 'tshirt-basic',
    'top': 'top-basique',
    'blouse': 'blouse-fluide',
    'chemise': 'chemise-classique',
    'shirt': 'chemise-classique',
    'robe': 'robe-midi',
    'dress': 'robe-midi',
    'jupe': 'jupe-midi',
    'skirt': 'jupe-midi',
    'jean': 'jean-skinny',
    'jeans': 'jean-skinny',
    'pantalon': 'pantalon-droit',
    'pants': 'pantalon-droit',
    'legging': 'legging-basique',
    'short': 'short-basique',
    'veste': 'veste-tailleur',
    'jacket': 'veste-tailleur',
    'blazer': 'blazer-classique',
    'cardigan': 'cardigan-long',
    'pull': 'pull-basique',
    'sweater': 'pull-basique',
    'hoodie': 'hoodie-capuche',
    'manteau': 'manteau-long',
    'coat': 'manteau-long',
    'trench': 'trench',
    'body': 'body-moulant',
    'bodysuit': 'body-moulant',
  };
  
  let detectedType: string | null = null;
  for (const [keyword, type] of Object.entries(typePatterns)) {
    if (lower.includes(keyword)) {
      detectedType = type;
      break;
    }
  }
  
  // Detect materials
  const materials: string[] = [];
  const materialKeywords: Record<string, string[]> = {
    'coton': ['cotton', 'coton'],
    'polyester': ['polyester', 'poly'],
    'soie': ['silk', 'soie', 'satin'],
    'lin': ['linen', 'lin'],
    'laine': ['wool', 'laine'],
    'velours': ['velvet', 'velours', 'velour'],
    'dentelle': ['lace', 'dentelle'],
    'cuir': ['leather', 'cuir'],
    'denim': ['denim', 'jean'],
    'mesh': ['mesh', 'filet'],
    'tulle': ['tulle'],
    'sequins': ['sequin', 'paillettes'],
  };
  
  for (const [materialKey, keywords] of Object.entries(materialKeywords)) {
    if (keywords.some(kw => lower.includes(kw))) {
      materials.push(materialKey);
    }
  }
  
  // Detect styles
  const styles: string[] = [];
  const styleKeywords: Record<string, string[]> = {
    'gothic': ['gothic', 'goth', 'dark'],
    'grunge': ['grunge'],
    'y2k': ['y2k', '2000s'],
    'emo': ['emo'],
    'punk': ['punk'],
    'alt': ['alt', 'alternative'],
    'vintage': ['vintage', 'retro'],
    'streetwear': ['streetwear', 'street'],
    'casual': ['casual'],
    'elegant': ['elegant', 'élégant'],
    'boheme': ['boheme', 'boho'],
    'romantique': ['romantic', 'romantique'],
  };
  
  for (const [styleKey, keywords] of Object.entries(styleKeywords)) {
    if (keywords.some(kw => lower.includes(kw))) {
      styles.push(styleKey);
    }
  }
  
  return { type: detectedType, materials, styles };
};

/**
 * Fetch metadata from URL using CORS proxy
 */
export const fetchUrlMetadata = async (url: string): Promise<Partial<Vetement>> => {
  try {
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
    const response = await fetch(proxyUrl);
    const data = await response.json();
    const html = data.contents;
    
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    const getMetaContent = (property: string): string => {
      const meta = doc.querySelector(`meta[property="${property}"]`) || 
                    doc.querySelector(`meta[name="${property}"]`);
      return meta?.getAttribute('content') || '';
    };
    
    const title = getMetaContent('og:title') || 
                  doc.querySelector('title')?.textContent || '';
    const description = getMetaContent('og:description') || 
                       getMetaContent('description') || '';
    const image = getMetaContent('og:image') || 
                  doc.querySelector('img')?.getAttribute('src') || '';
    
    let absoluteImage = image;
    if (image && !image.startsWith('http')) {
      const urlObj = new URL(url);
      absoluteImage = new URL(image, urlObj.origin).href;
    }

    // Smart parse title
    const parsed = parseProductTitle(title);
    
    // Also extract from description
    const descMaterials = extractMaterials(html, description);
    const allMaterials = [...new Set([...parsed.materials, ...descMaterials])];
    
    return {
      titre: title.slice(0, 100),
      description: description.slice(0, 500),
      image: absoluteImage,
      lien: url,
      materials: allMaterials.length > 0 ? allMaterials as any[] : undefined,
      type: parsed.type || guessClothingType(title, description) || undefined,
      style: parsed.styles[0] as any || undefined,
    };
  } catch (error) {
    console.error('Error fetching URL metadata:', error);
    return {
      lien: url,
      titre: new URL(url).hostname,
    };
  }
};

/**
 * Extract materials from HTML and description
 */
const extractMaterials = (html: string, description: string): string[] => {
  const text = (html + ' ' + description).toLowerCase();
  const foundMaterials: string[] = [];
  
  // Map common material keywords to our material keys
  const materialKeywords: Record<string, string[]> = {
    'coton': ['cotton', 'coton', '100% coton', 'cotton blend'],
    'polyester': ['polyester', 'poly'],
    'soie': ['silk', 'soie', 'satin'],
    'lin': ['linen', 'lin'],
    'laine': ['wool', 'laine', 'merino'],
    'cachemire': ['cashmere', 'cachemire'],
    'viscose': ['viscose', 'rayon'],
    'elasthanne': ['elastane', 'élasthanne', 'spandex', 'lycra'],
    'nylon': ['nylon'],
    'dentelle': ['lace', 'dentelle'],
    'velours': ['velvet', 'velours'],
    'denim': ['denim', 'jean'],
    'cuir': ['leather', 'cuir', 'genuine leather'],
    'cuir-vegetal': ['vegan leather', 'faux leather', 'pu leather'],
    'tulle': ['tulle', 'mesh'],
    'sequins': ['sequin', 'sequins', 'paillettes'],
  };
  
  for (const [materialKey, keywords] of Object.entries(materialKeywords)) {
    if (keywords.some(keyword => text.includes(keyword))) {
      foundMaterials.push(materialKey);
    }
  }
  
  return [...new Set(foundMaterials)]; // Remove duplicates
};

/**
 * Guess clothing type from title and description
 */
const guessClothingType = (title: string, description: string): string | null => {
  const text = (title + ' ' + description).toLowerCase();
  
  // Common patterns with their corresponding types
  const patterns: Record<string, string> = {
    // Robes
    'robe': 'robe-midi',
    'dress': 'robe-midi',
    'mini dress': 'mini-robe',
    'maxi dress': 'robe-maxi',
    'robe corset': 'robe-corsetee',
    
    // Jupes
    'jupe': 'jupe-midi',
    'skirt': 'jupe-midi',
    'mini jupe': 'mini-jupe',
    'mini skirt': 'mini-jupe',
    'jupe plissée': 'jupe-plissee',
    'pleated skirt': 'jupe-plissee',
    
    // Tops
    'crop top': 'crop-top',
    't-shirt': 'tshirt-basic',
    'tee': 'tshirt-basic',
    'chemise': 'chemise-classique',
    'blouse': 'blouse-fluide',
    'tank top': 'tank-top',
    'débardeur': 'debardeur',
    'body': 'body-moulant',
    
    // Pantalons
    'jean': 'jean-skinny',
    'jeans': 'jean-skinny',
    'pantalon': 'pantalon-droit',
    'pants': 'pantalon-droit',
    'legging': 'legging-basique',
    
    // Vestes
    'veste': 'veste-tailleur',
    'jacket': 'veste-tailleur',
    'blazer': 'blazer-classique',
    'manteau': 'manteau-long',
    'coat': 'manteau-long',
    
    // Accessoires
    'sac': 'sac-bandouliere',
    'bag': 'sac-bandouliere',
    'collier': 'collier-ras-de-cou',
    'necklace': 'collier-ras-de-cou',
    'boucles': 'boucles-oreilles',
    'earrings': 'boucles-oreilles',
  };
  
  for (const [keyword, type] of Object.entries(patterns)) {
    if (text.includes(keyword)) {
      return type;
    }
  }
  
  return null;
};

/**
 * LocalStorage keys
 */
export const STORAGE_KEYS = {
  VETEMENTS: 'wardrobe_vetements',
  COLLECTIONS: 'wardrobe_collections',
} as const;

/**
 * Load vetements from localStorage
 */
export const loadVetements = (): Vetement[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.VETEMENTS);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error loading vetements:', error);
    return [];
  }
};

/**
 * Save vetements to localStorage
 */
export const saveVetements = (vetements: Vetement[]): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.VETEMENTS, JSON.stringify(vetements));
  } catch (error) {
    console.error('Error saving vetements:', error);
  }
};

/**
 * Load collections from localStorage
 */
export const loadCollections = (): Collection[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.COLLECTIONS);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error loading collections:', error);
    return [];
  }
};

/**
 * Save collections to localStorage
 */
export const saveCollections = (collections: Collection[]): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.COLLECTIONS, JSON.stringify(collections));
  } catch (error) {
    console.error('Error saving collections:', error);
  }
};

/**
 * Export data to JSON file
 */
export const exportData = (vetements: Vetement[], collections: Collection[]): void => {
  const data = {
    vetements,
    collections,
    exportedAt: new Date().toISOString(),
    version: '1.0',
  };
  
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `wardrobe-export-${Date.now()}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

/**
 * Import data from JSON file
 */
export const importData = (file: File): Promise<{ vetements: Vetement[]; collections: Collection[] }> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const data = JSON.parse(content);
        
        if (!data.vetements || !data.collections) {
          throw new Error('Invalid data format');
        }
        
        resolve({
          vetements: data.vetements,
          collections: data.collections,
        });
      } catch (error) {
        reject(error);
      }
    };
    
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsText(file);
  });
};

/**
 * Filter vetements based on filter state
 */
export const filterVetements = (
  vetements: Vetement[],
  filters: { 
    search: string; 
    style: string; 
    type: string; 
    partie: string; 
    estTenueComplete: boolean | 'tous' 
  }
): Vetement[] => {
  return vetements.filter((v) => {
    // Search filter
    const searchLower = filters.search.toLowerCase();
    const matchesSearch = !searchLower || 
      v.titre.toLowerCase().includes(searchLower) ||
      v.description.toLowerCase().includes(searchLower);
    
    // Style filter
    const matchesStyle = filters.style === 'tous' || v.style === filters.style;
    
    // Type filter
    const matchesType = filters.type === 'tous' || v.type === filters.type;
    
    // Partie filter
    const matchesPartie = filters.partie === 'tous' || v.partie === filters.partie;
    
    // Complete outfit filter
    const matchesComplete = filters.estTenueComplete === 'tous' || 
      v.estTenueComplete === filters.estTenueComplete;
    
    return matchesSearch && matchesStyle && matchesType && matchesPartie && matchesComplete;
  });
};

/**
 * Convert image file to base64
 */
export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};
