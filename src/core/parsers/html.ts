/**
 * Extraction données depuis HTML brut
 */

export const extractMaterials = (html: string, description: string): string[] => {
  const text = (html + ' ' + description).toLowerCase();
  const foundMaterials: string[] = [];
  
  const materialKeywords: Record<string, string[]> = {
    'coton': ['cotton', 'coton', '100% coton'],
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
    'cuir-vegan': ['vegan leather', 'faux leather', 'pu leather'],
    'tulle': ['tulle', 'mesh'],
    'sequins': ['sequin', 'sequins', 'paillettes'],
  };
  
  for (const [materialKey, keywords] of Object.entries(materialKeywords)) {
    if (keywords.some(keyword => text.includes(keyword))) {
      foundMaterials.push(materialKey);
    }
  }
  
  return [...new Set(foundMaterials)];
};

export const guessClothingType = (title: string, description: string): string | null => {
  const text = (title + ' ' + description).toLowerCase();
  
  const patterns: Record<string, string> = {
    'robe': 'robe-midi',
    'dress': 'robe-midi',
    'mini dress': 'mini-robe',
    'maxi dress': 'robe-maxi',
    'jupe': 'jupe-midi',
    'skirt': 'jupe-midi',
    'crop top': 'crop-top',
    't-shirt': 'tshirt-basic',
    'chemise': 'chemise-classique',
    'blouse': 'blouse-fluide',
    'tank top': 'tank-top',
    'body': 'body-moulant',
    'jean': 'jean-skinny',
    'jeans': 'jean-skinny',
    'pantalon': 'pantalon-droit',
    'pants': 'pantalon-droit',
    'legging': 'legging-basique',
    'veste': 'veste-tailleur',
    'jacket': 'veste-tailleur',
    'blazer': 'blazer-classique',
    'manteau': 'manteau-long',
    'coat': 'manteau-long',
  };
  
  for (const [keyword, type] of Object.entries(patterns)) {
    if (text.includes(keyword)) {
      return type;
    }
  }
  
  return null;
};