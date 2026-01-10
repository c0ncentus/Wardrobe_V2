/**
 * Parser intelligent de titres produits
 * Détecte type, matériaux, styles depuis texte
 */

export interface ParsedTitle {
  type: string | null;
  materials: string[];
  styles: string[];
}

export const parseProductTitle = (title: string): ParsedTitle => {
  const lower = title.toLowerCase();
  
  // Type patterns (adaptable par domaine)
  const typePatterns: Record<string, string> = {
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
  
  // Material patterns
  const materials: string[] = [];
  const materialKeywords: Record<string, string[]> = {
    'coton': ['cotton', 'coton'],
    'polyester': ['polyester', 'poly'],
    'soie': ['silk', 'soie', 'satin'],
    'lin': ['linen', 'lin'],
    'laine': ['wool', 'laine'],
    'velours': ['velvet', 'velours'],
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
  
  // Style patterns
  const styles: string[] = [];
  const styleKeywords: Record<string, string[]> = {
    'gothic': ['gothic', 'goth', 'dark'],
    'grunge': ['grunge'],
    'y2k': ['y2k', '2000s'],
    'emo': ['emo'],
    'punk': ['punk'],
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