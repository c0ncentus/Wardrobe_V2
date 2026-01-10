/**
 * WARDROBE APP - STATIC DATA
 * Fichier centralisé pour toutes les données statiques, taxonomies, et codes couleurs
 */

// ============================================================================
// PALETTE DE COULEURS
// ============================================================================

export const COLORS = {
  // Fond et surfaces
  background: {
    primary: '#020617',      // slate-950
    secondary: '#0f172a',    // slate-900
    tertiary: '#1e293b',     // slate-800
    card: '#334155',         // slate-700
  },
  
  // Accents principaux
  accent: {
    purple: {
      light: '#a78bfa',      // purple-400
      DEFAULT: '#9333ea',    // purple-600
      dark: '#7e22ce',       // purple-700
    },
    pink: {
      light: '#f9a8d4',      // pink-300
      DEFAULT: '#db2777',    // pink-600
      dark: '#be185d',       // pink-700
    },
  },
  
  // Gradients
  gradient: {
    primary: 'from-purple-600 to-pink-600',
    card: 'from-slate-900 to-slate-800',
    hover: 'from-purple-500 to-pink-500',
  },
  
  // Texte
  text: {
    primary: '#f1f5f9',      // slate-100
    secondary: '#cbd5e1',    // slate-300
    muted: '#94a3b8',        // slate-400
    disabled: '#64748b',     // slate-500
  },
  
  // Bordures
  border: {
    DEFAULT: '#334155',      // slate-700
    light: 'rgba(51, 65, 85, 0.5)',  // slate-700/50
    focus: '#9333ea',        // purple-600
  },
  
  // États sémantiques
  semantic: {
    success: '#059669',      // emerald-600
    error: '#991b1b',        // red-900
    warning: '#d97706',      // amber-600
    info: '#0284c7',         // sky-600
  },
  
  // Couleurs par style de vêtement
  styleColors: {
    'vampire-sirene': {
      gradient: 'from-purple-900/20 to-red-900/20',
      border: 'border-purple-700/30',
      text: 'text-purple-300',
      bg: 'bg-purple-900/30',
    },
    'kawaii': {
      gradient: 'from-pink-900/20 to-purple-900/20',
      border: 'border-pink-700/30',
      text: 'text-pink-300',
      bg: 'bg-pink-900/30',
    },
    'gothique': {
      gradient: 'from-black/40 to-slate-900/40',
      border: 'border-slate-600/30',
      text: 'text-slate-200',
      bg: 'bg-black/30',
    },
    'romantique': {
      gradient: 'from-rose-900/20 to-pink-900/20',
      border: 'border-rose-700/30',
      text: 'text-rose-300',
      bg: 'bg-rose-900/30',
    },
    'streetwear': {
      gradient: 'from-orange-900/20 to-yellow-900/20',
      border: 'border-orange-700/30',
      text: 'text-orange-300',
      bg: 'bg-orange-900/30',
    },
    'minimaliste': {
      gradient: 'from-gray-900/20 to-slate-900/20',
      border: 'border-gray-700/30',
      text: 'text-gray-300',
      bg: 'bg-gray-900/30',
    },
    'boheme': {
      gradient: 'from-amber-900/20 to-orange-900/20',
      border: 'border-amber-700/30',
      text: 'text-amber-300',
      bg: 'bg-amber-900/30',
    },
    'preppy': {
      gradient: 'from-blue-900/20 to-indigo-900/20',
      border: 'border-blue-700/30',
      text: 'text-blue-300',
      bg: 'bg-blue-900/30',
    },
  },
} as const;

// ============================================================================
// MATÉRIAUX DE VÊTEMENTS
// ============================================================================

export const MATERIALS = {
  // === FIBRES NATURELLES ===
  'coton': {
    label: 'Coton',
    category: 'Naturel',
    properties: ['Respirant', 'Doux', 'Absorbant'],
    care: 'Lavage machine 30-60°C',
  },
  'coton-bio': {
    label: 'Coton biologique',
    category: 'Naturel',
    properties: ['Écologique', 'Respirant', 'Doux'],
    care: 'Lavage machine 30-40°C',
  },
  'lin': {
    label: 'Lin',
    category: 'Naturel',
    properties: ['Respirant', 'Frais', 'Se froisse'],
    care: 'Lavage délicat, repassage nécessaire',
  },
  'laine': {
    label: 'Laine',
    category: 'Naturel',
    properties: ['Chaud', 'Isolant', 'Respirant'],
    care: 'Lavage à la main ou pressing',
  },
  'cachemire': {
    label: 'Cachemire',
    category: 'Naturel',
    properties: ['Luxueux', 'Très doux', 'Chaud'],
    care: 'Lavage à la main, séchage à plat',
  },
  'alpaga': {
    label: 'Alpaga',
    category: 'Naturel',
    properties: ['Doux', 'Chaud', 'Hypoallergénique'],
    care: 'Lavage à la main',
  },
  'mohair': {
    label: 'Mohair',
    category: 'Naturel',
    properties: ['Soyeux', 'Brillant', 'Chaud'],
    care: 'Nettoyage à sec recommandé',
  },
  'angora': {
    label: 'Angora',
    category: 'Naturel',
    properties: ['Très doux', 'Léger', 'Chaud'],
    care: 'Lavage délicat à la main',
  },
  'soie': {
    label: 'Soie',
    category: 'Naturel',
    properties: ['Luxueux', 'Brillant', 'Doux'],
    care: 'Nettoyage à sec ou lavage main délicat',
  },
  'satin-soie': {
    label: 'Satin de soie',
    category: 'Naturel',
    properties: ['Brillant', 'Fluide', 'Luxueux'],
    care: 'Nettoyage à sec',
  },
  'bambou': {
    label: 'Bambou',
    category: 'Naturel',
    properties: ['Écologique', 'Doux', 'Antibactérien'],
    care: 'Lavage machine 30°C',
  },
  'chanvre': {
    label: 'Chanvre',
    category: 'Naturel',
    properties: ['Écologique', 'Durable', 'Respirant'],
    care: 'Lavage machine',
  },
  'ramie': {
    label: 'Ramie',
    category: 'Naturel',
    properties: ['Résistant', 'Absorbant', 'Frais'],
    care: 'Lavage machine',
  },
  
  // === FIBRES SYNTHÉTIQUES ===
  'polyester': {
    label: 'Polyester',
    category: 'Synthétique',
    properties: ['Résistant', 'Sèche vite', 'Infroissable'],
    care: 'Lavage machine 30-40°C',
  },
  'nylon': {
    label: 'Nylon',
    category: 'Synthétique',
    properties: ['Résistant', 'Élastique', 'Léger'],
    care: 'Lavage machine 30°C',
  },
  'elasthanne': {
    label: 'Élasthanne/Spandex',
    category: 'Synthétique',
    properties: ['Stretch', 'Élastique', 'Moulant'],
    care: 'Lavage machine 30°C',
  },
  'lycra': {
    label: 'Lycra',
    category: 'Synthétique',
    properties: ['Très élastique', 'Moulant', 'Résistant'],
    care: 'Lavage machine 30°C',
  },
  'acrylique': {
    label: 'Acrylique',
    category: 'Synthétique',
    properties: ['Imitation laine', 'Chaud', 'Léger'],
    care: 'Lavage machine',
  },
  'viscose': {
    label: 'Viscose',
    category: 'Semi-synthétique',
    properties: ['Fluide', 'Doux', 'Respirant'],
    care: 'Lavage délicat',
  },
  'modal': {
    label: 'Modal',
    category: 'Semi-synthétique',
    properties: ['Doux', 'Absorbant', 'Résistant'],
    care: 'Lavage machine 40°C',
  },
  'tencel': {
    label: 'Tencel/Lyocell',
    category: 'Semi-synthétique',
    properties: ['Écologique', 'Doux', 'Respirant'],
    care: 'Lavage machine 30-40°C',
  },
  'acetate': {
    label: 'Acétate',
    category: 'Semi-synthétique',
    properties: ['Brillant', 'Fluide', 'Léger'],
    care: 'Nettoyage à sec',
  },
  
  // === MATÉRIAUX SPÉCIAUX ===
  'cuir': {
    label: 'Cuir',
    category: 'Animal',
    properties: ['Durable', 'Noble', 'Résistant'],
    care: 'Nettoyage professionnel, entretien spécial',
  },
  'cuir-vegan': {
    label: 'Cuir végétal/Simili',
    category: 'Synthétique',
    properties: ['Vegan', 'Résistant', 'Facile d\'entretien'],
    care: 'Nettoyage à l\'eau savonneuse',
  },
  'daim': {
    label: 'Daim',
    category: 'Animal',
    properties: ['Doux', 'Velours', 'Délicat'],
    care: 'Nettoyage professionnel',
  },
  'nubuck': {
    label: 'Nubuck',
    category: 'Animal',
    properties: ['Velours', 'Doux', 'Délicat'],
    care: 'Entretien spécifique',
  },
  'fourrure': {
    label: 'Fourrure',
    category: 'Animal',
    properties: ['Très chaud', 'Luxueux', 'Volumineux'],
    care: 'Nettoyage professionnel',
  },
  'fausse-fourrure': {
    label: 'Fausse fourrure',
    category: 'Synthétique',
    properties: ['Vegan', 'Chaud', 'Volumineux'],
    care: 'Lavage délicat',
  },
  
  // === TISSUS TECHNIQUES ===
  'gore-tex': {
    label: 'Gore-Tex',
    category: 'Technique',
    properties: ['Imperméable', 'Respirant', 'Coupe-vent'],
    care: 'Lavage spécial, réimperméabilisation',
  },
  'softshell': {
    label: 'Softshell',
    category: 'Technique',
    properties: ['Coupe-vent', 'Respirant', 'Stretch'],
    care: 'Lavage machine 30°C',
  },
  'neoprene': {
    label: 'Néoprène',
    category: 'Synthétique',
    properties: ['Stretch', 'Isolant', 'Moulant'],
    care: 'Rinçage eau douce',
  },
  'mesh': {
    label: 'Mesh/Résille',
    category: 'Synthétique',
    properties: ['Aéré', 'Transparent', 'Léger'],
    care: 'Lavage délicat',
  },
  
  // === TISSUS SPÉCIALISÉS ===
  'denim': {
    label: 'Denim/Jean',
    category: 'Tissage',
    properties: ['Résistant', 'Casual', 'Durable'],
    care: 'Lavage machine, éviter trop fréquent',
  },
  'velours': {
    label: 'Velours',
    category: 'Tissage',
    properties: ['Doux', 'Luxueux', 'Texturé'],
    care: 'Nettoyage à sec recommandé',
  },
  'velours-cotele': {
    label: 'Velours côtelé',
    category: 'Tissage',
    properties: ['Texturé', 'Chaud', 'Rétro'],
    care: 'Lavage machine envers',
  },
  'tweed': {
    label: 'Tweed',
    category: 'Tissage',
    properties: ['Texturé', 'Chaud', 'Classique'],
    care: 'Nettoyage à sec',
  },
  'flanelle': {
    label: 'Flanelle',
    category: 'Tissage',
    properties: ['Doux', 'Chaud', 'Confort'],
    care: 'Lavage machine',
  },
  'tartan': {
    label: 'Tartan',
    category: 'Tissage',
    properties: ['À carreaux', 'Écossais', 'Classique'],
    care: 'Selon composition',
  },
  'jersey': {
    label: 'Jersey',
    category: 'Tricot',
    properties: ['Stretch', 'Confort', 'Fluide'],
    care: 'Lavage machine 30-40°C',
  },
  'molleton': {
    label: 'Molleton/Sweat',
    category: 'Tissage',
    properties: ['Chaud', 'Doux intérieur', 'Confort'],
    care: 'Lavage machine',
  },
  'polaire': {
    label: 'Polaire',
    category: 'Synthétique',
    properties: ['Chaud', 'Léger', 'Doux'],
    care: 'Lavage machine 30°C',
  },
  
  // === TISSUS DÉLICATS ===
  'dentelle': {
    label: 'Dentelle',
    category: 'Délicat',
    properties: ['Délicat', 'Féminin', 'Transparent'],
    care: 'Lavage à la main',
  },
  'tulle': {
    label: 'Tulle',
    category: 'Délicat',
    properties: ['Léger', 'Transparent', 'Volumineux'],
    care: 'Lavage délicat',
  },
  'organza': {
    label: 'Organza',
    category: 'Délicat',
    properties: ['Léger', 'Transparent', 'Rigide'],
    care: 'Nettoyage à sec',
  },
  'mousseline': {
    label: 'Mousseline',
    category: 'Délicat',
    properties: ['Léger', 'Fluide', 'Transparent'],
    care: 'Lavage délicat',
  },
  'chiffon': {
    label: 'Chiffon',
    category: 'Délicat',
    properties: ['Léger', 'Transparent', 'Fluide'],
    care: 'Lavage à la main ou sec',
  },
  'georgette': {
    label: 'Georgette',
    category: 'Délicat',
    properties: ['Crêpé', 'Fluide', 'Texturé'],
    care: 'Nettoyage à sec',
  },
  'crepe': {
    label: 'Crêpe',
    category: 'Tissage',
    properties: ['Texturé', 'Fluide', 'Élégant'],
    care: 'Nettoyage à sec',
  },
  'satin': {
    label: 'Satin',
    category: 'Tissage',
    properties: ['Brillant', 'Fluide', 'Luxueux'],
    care: 'Nettoyage à sec ou lavage délicat',
  },
  'taffetas': {
    label: 'Taffetas',
    category: 'Tissage',
    properties: ['Brillant', 'Rigide', 'Bruissant'],
    care: 'Nettoyage à sec',
  },
  'brocart': {
    label: 'Brocart',
    category: 'Tissage',
    properties: ['Brodé', 'Luxueux', 'Texturé'],
    care: 'Nettoyage à sec',
  },
  'jacquard': {
    label: 'Jacquard',
    category: 'Tissage',
    properties: ['Motifs tissés', 'Texturé', 'Élégant'],
    care: 'Nettoyage à sec recommandé',
  },
  
  // === TISSUS IMPERMÉABLES ===
  'vinyl': {
    label: 'Vinyle/PVC',
    category: 'Synthétique',
    properties: ['Brillant', 'Imperméable', 'Facile d\'entretien'],
    care: 'Nettoyage avec chiffon humide',
  },
  'latex': {
    label: 'Latex',
    category: 'Synthétique',
    properties: ['Brillant', 'Moulant', 'Imperméable'],
    care: 'Nettoyage spécial, talc',
  },
  'ciré': {
    label: 'Tissu ciré',
    category: 'Traité',
    properties: ['Imperméable', 'Résistant', 'Casual'],
    care: 'Nettoyage surface',
  },
  
  // === TISSUS STRETCH ===
  'scuba': {
    label: 'Scuba',
    category: 'Synthétique',
    properties: ['Stretch', 'Structuré', 'Moulant'],
    care: 'Lavage machine 30°C',
  },
  'ponte-di-roma': {
    label: 'Ponte di Roma',
    category: 'Tricot',
    properties: ['Stretch', 'Structuré', 'Confort'],
    care: 'Lavage machine',
  },
  
  // === AUTRES ===
  'sequins': {
    label: 'Sequins/Paillettes',
    category: 'Décoratif',
    properties: ['Brillant', 'Festif', 'Délicat'],
    care: 'Nettoyage à sec, lavage envers',
  },
  'strass': {
    label: 'Strass/Cristaux',
    category: 'Décoratif',
    properties: ['Brillant', 'Luxueux', 'Délicat'],
    care: 'Lavage délicat ou sec',
  },
  'metallise': {
    label: 'Tissu métallisé',
    category: 'Décoratif',
    properties: ['Brillant', 'Futuriste', 'Rigide'],
    care: 'Nettoyage à sec',
  },
  'holographique': {
    label: 'Holographique',
    category: 'Synthétique',
    properties: ['Irisé', 'Futuriste', 'Brillant'],
    care: 'Lavage délicat',
  },
} as const;

// Suite du fichier dans la partie 2...

// ============================================================================
// STYLES VESTIMENTAIRES FÉMININS (suite de la partie 1)
// ============================================================================

export const CLOTHING_STYLES = {
  // Styles romantiques et féminins
  'romantique': {
    label: 'Romantique',
    description: 'Doux, féminin, volants, dentelle',
    examples: ['Prairie dress', 'Blouse victorienne', 'Jupe tulle'],
  },
  'cottage-core': {
    label: 'Cottage Core',
    description: 'Champêtre, vintage, fleuri',
    examples: ['Robe à fleurs', 'Tablier vintage', 'Cardigan tricoté'],
  },
  'coquette': {
    label: 'Coquette',
    description: 'Bows, rose, ultra féminin',
    examples: ['Mini jupe à nœuds', 'Ballerines à rubans', 'Crop top brodé'],
  },
  
  // Styles alternatifs et dark
  'vampire-sirene': {
    label: 'Vampire/Sirène',
    description: 'Dark romantique, mystérieux, élégant',
    examples: ['Robe corsetée', 'Velours noir', 'Dentelle gothique'],
  },
  'gothique': {
    label: 'Gothique',
    description: 'Noir, cuir, chaînes, dark',
    examples: ['Trench coat noir', 'Boots platforms', 'Collier choker'],
  },
  'grunge': {
    label: 'Grunge',
    description: 'Déchiré, layering, années 90',
    examples: ['Jean troué', 'Flanelle oversize', 'Doc Martens'],
  },
  'punk': {
    label: 'Punk',
    description: 'Rebelle, clous, cuir, chaînes',
    examples: ['Perfecto clouté', 'Jupe plissée tartan', 'Collants résille'],
  },
  'emo': {
    label: 'Emo',
    description: 'Dark, bandes, skinny, émotionnel',
    examples: ['Skinny noir', 'Band tee', 'Eyeliner wings'],
  },
  
  // Styles asiatiques
  'kawaii': {
    label: 'Kawaii',
    description: 'Mignon, japonais, pastel, cute',
    examples: ['Robe Lolita', 'Twin tails', 'Accessoires peluche'],
  },
  'lolita': {
    label: 'Lolita',
    description: 'Victorien japonais, poupée, élaboré',
    examples: ['Jupe bell', 'Blouse à jabot', 'Headband elaborate'],
  },
  'harajuku': {
    label: 'Harajuku',
    description: 'Éclectique, coloré, street japonais',
    examples: ['Layering extrême', 'Couleurs vives', 'Accessoires multiples'],
  },
  'y2k': {
    label: 'Y2K',
    description: 'Années 2000, futuriste, métallique',
    examples: ['Low rise jeans', 'Crop top brillant', 'Mini sac'],
  },
  
  // Styles élégants et sophistiqués
  'classique-chic': {
    label: 'Classique Chic',
    description: 'Élégant, intemporel, raffiné',
    examples: ['Tailleur', 'Trench beige', 'Escarpins'],
  },
  'parisien': {
    label: 'Parisien',
    description: 'Effortless, élégant, minimaliste chic',
    examples: ['Marinière', 'Trench', 'Ballerines'],
  },
  'old-money': {
    label: 'Old Money',
    description: 'Luxe discret, qualité, heritage',
    examples: ['Pull cachemire', 'Jupe plissée', 'Loafers'],
  },
  'preppy': {
    label: 'Preppy',
    description: 'Collegiate, soigné, ivy league',
    examples: ['Cardigan tennis', 'Jupe plissée', 'Mocassins'],
  },
  
  // Styles casual et confort
  'streetwear': {
    label: 'Streetwear',
    description: 'Urbain, casual, sneakers, sporty',
    examples: ['Hoodie oversize', 'Joggers', 'Sneakers'],
  },
  'athleisure': {
    label: 'Athleisure',
    description: 'Sport-chic, confortable, actif',
    examples: ['Leggings', 'Sports bra', 'Sneakers premium'],
  },
  'tomboy': {
    label: 'Tomboy',
    description: 'Androgyne, décontracté, masculin',
    examples: ['Chemise oversize', 'Jean boyfriend', 'Baskets'],
  },
  'normcore': {
    label: 'Normcore',
    description: 'Normal, basique, anti-fashion',
    examples: ['Jeans basics', 'T-shirt uni', 'Sneakers blanches'],
  },
  
  // Styles bohèmes et artistiques
  'boheme': {
    label: 'Bohème',
    description: 'Libre, hippie, ethnique, naturel',
    examples: ['Maxi robe fluide', 'Franges', 'Sandales'],
  },
  'hippie-chic': {
    label: 'Hippie Chic',
    description: 'Années 70, peace & love, ethnique',
    examples: ['Pattes d\'éléphant', 'Gilet franges', 'Bandana'],
  },
  'artiste': {
    label: 'Artiste',
    description: 'Créatif, asymétrique, unique',
    examples: ['Pièces uniques', 'Layering créatif', 'Couleurs audacieuses'],
  },
  
  // Styles minimalistes
  'minimaliste': {
    label: 'Minimaliste',
    description: 'Épuré, monochrome, essentiel',
    examples: ['Palette neutre', 'Coupes simples', 'Qualité premium'],
  },
  'scandinavian': {
    label: 'Scandinavian',
    description: 'Minimaliste nordique, fonctionnel',
    examples: ['Neutres', 'Oversized', 'Matières naturelles'],
  },
  
  // Styles glamour et soirée
  'glamour': {
    label: 'Glamour',
    description: 'Luxueux, brillant, statement',
    examples: ['Robe paillettes', 'Talons hauts', 'Bijoux statement'],
  },
  'hollywood-regency': {
    label: 'Hollywood Regency',
    description: 'Vintage glamour, années 40-50',
    examples: ['Robe sirène', 'Fourrure', 'Gants longs'],
  },
  'disco': {
    label: 'Disco',
    description: 'Années 70, paillettes, danse',
    examples: ['Combinaison brillante', 'Platforms', 'Sequins'],
  },
  
  // Styles spécifiques
  'pin-up': {
    label: 'Pin-Up',
    description: 'Rétro 50s, féminin, rockabilly',
    examples: ['Robe crayon', 'Cardigans', 'Victory rolls'],
  },
  'rockabilly': {
    label: 'Rockabilly',
    description: 'Rock\'n\'roll 50s, tatouages',
    examples: ['Jupe swing', 'Bandana', 'Boots'],
  },
  'western': {
    label: 'Western',
    description: 'Cowboy, franges, cuir, denim',
    examples: ['Boots santiags', 'Chemise denim', 'Ceinture western'],
  },
  'safari': {
    label: 'Safari',
    description: 'Militaire, kaki, fonctionnel',
    examples: ['Chemise safari', 'Cargo', 'Boots'],
  },
  'nautique': {
    label: 'Nautique',
    description: 'Marin, rayures, bleu blanc rouge',
    examples: ['Marinière', 'Short blanc', 'Espadrilles'],
  },
  
  // Styles ethniques et culturels
  'ethnique': {
    label: 'Ethnique',
    description: 'Motifs traditionnels, artisanat',
    examples: ['Kaftans', 'Bijoux ethniques', 'Tissus traditionnels'],
  },
  'afro-centric': {
    label: 'Afro-Centric',
    description: 'Wax, motifs africains, coloré',
    examples: ['Robe wax', 'Headwrap', 'Bijoux afro'],
  },
  
  // Styles futuristes
  'cyberpunk': {
    label: 'Cyberpunk',
    description: 'Futuriste, tech, néon, dystopique',
    examples: ['Holographique', 'Techwear', 'Néon'],
  },
  'techwear': {
    label: 'Techwear',
    description: 'Technique, fonctionnel, urbain',
    examples: ['Veste technique', 'Cargo modulable', 'Sneakers tech'],
  },
  
  // Styles alternatifs et subcultures
  'e-girl-e-boy': {
    label: 'E-Girl/E-Boy',
    description: 'Internet culture, coloré, chains',
    examples: ['Jupe plissée', 'Striped shirt', 'Chains'],
  },
  'soft-girl': {
    label: 'Soft Girl',
    description: 'Pastel, doux, mignon, aesthetic',
    examples: ['Cardigan pastel', 'Jupe plissée', 'Accessories cute'],
  },
  'dark-academia': {
    label: 'Dark Academia',
    description: 'Académique, vintage, intellectuel',
    examples: ['Blazer tweed', 'Pull col roulé', 'Oxfords'],
  },
  'light-academia': {
    label: 'Light Academia',
    description: 'Académique clair, romantique studieux',
    examples: ['Chemise blanche', 'Jupe beige', 'Cardigans clairs'],
  },
  
  // Autres
  'autre': {
    label: 'Autre',
    description: 'Style personnalisé ou mixte',
    examples: ['Mix & match', 'Personnel', 'Éclectique'],
  },
} as const;


// ============================================================================
// PARTIES DE VÊTEMENTS
// ============================================================================

export const CLOTHING_PARTS = {
  'Ensemble': {
    label: 'Ensemble',
    description: 'Pièce complète (robe, combinaison, ensemble assorti)',
  },
  'Top': {
    label: 'Top',
    description: 'Haut du corps',
  },
  'Bottom': {
    label: 'Bottom',
    description: 'Bas du corps',
  },
  'OnBody': {
    label: 'OnBody',
    description: 'Sur tout le corps (robe, combinaison)',
  },
  'Accessoire': {
    label: 'Accessoire',
    description: 'Sacs, bijoux, ceintures, etc.',
  },
  'Chaussures': {
    label: 'Chaussures',
    description: 'Toutes les chaussures',
  },
  'Lingerie': {
    label: 'Lingerie',
    description: 'Sous-vêtements et lingerie',
  },
  'Exterieur': {
    label: 'Extérieur',
    description: 'Manteaux, vestes d\'extérieur',
  },
} as const;

// ============================================================================
// EXPORT DES TYPES
// ============================================================================

export type StyleKey = keyof typeof CLOTHING_STYLES;
export type MaterialKey = keyof typeof MATERIALS;
export type PartieKey = keyof typeof CLOTHING_PARTS;

// Helper pour obtenir les options de select
export function getStyleOptions() {
  return Object.entries(CLOTHING_STYLES).map(([key, value]) => ({
    value: key,
    label: value.label,
  }));
}

export function getMaterialOptions() {
  return Object.entries(MATERIALS).map(([key, value]) => ({
    value: key,
    label: value.label,
    category: value.category,
  }));
}

export function getPartieOptions() {
  return Object.entries(CLOTHING_PARTS).map(([key, value]) => ({
    value: key,
    label: value.label,
  }));
}

// Helper pour obtenir les matériaux par catégorie
export function getMaterialsByCategory() {
  const categories: Record<string, typeof MATERIALS[keyof typeof MATERIALS][]> = {};
  
  Object.entries(MATERIALS).forEach(([key, material]) => {
    const cat = material.category;
    if (!categories[cat]) {
      categories[cat] = [];
    }
    (categories as any)[cat].push({ ...material, key });
  });
  
  return categories;
}

