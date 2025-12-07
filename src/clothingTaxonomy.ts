/**
 * TYPOLOGIE COMPLÈTE DES VÊTEMENTS
 * Taxonomie exhaustive : Super-catégories > Catégories > Articles spécifiques
 */

export const CLOTHING_TAXONOMY = {
  // =========== SUPER-CATÉGORIE: HAUTS ===========
  hauts: {
    label: 'Hauts',
    icon: '👚',
    partie: 'Top' as const,
    
    categories: {
      // --- T-shirts & Tops ---
      'tshirts-tops': {
        label: 'T-shirts & Tops',
        items: [
          { value: 'tshirt-basic', label: 'T-shirt basique' },
          { value: 'tshirt-col-v', label: 'T-shirt col V' },
          { value: 'crop-top', label: 'Crop top' },
          { value: 'tank-top', label: 'Débardeur' },
          { value: 'muscle-tee', label: 'Muscle tee' },
          { value: 'tube-top', label: 'Tube top' },
          { value: 'halter-top', label: 'Halter top' },
          { value: 'off-shoulder', label: 'Off-shoulder top' },
          { value: 'cold-shoulder', label: 'Cold shoulder top' },
          { value: 'peplum-top', label: 'Peplum top' },
          { value: 'wrap-top', label: 'Wrap top' },
          { value: 'bustier-top', label: 'Bustier' },
          { value: 'corset-top', label: 'Corset top' },
          { value: 'asymmetric-top', label: 'Top asymétrique' },
        ],
      },
      
      // --- Chemises & Blouses ---
      'chemises-blouses': {
        label: 'Chemises & Blouses',
        items: [
          { value: 'chemise-classique', label: 'Chemise classique' },
          { value: 'chemise-oversize', label: 'Chemise oversize' },
          { value: 'chemise-boyfriend', label: 'Chemise boyfriend' },
          { value: 'blouse-feminine', label: 'Blouse féminine' },
          { value: 'blouse-victorienne', label: 'Blouse victorienne' },
          { value: 'blouse-paysanne', label: 'Blouse paysanne' },
          { value: 'chemise-denim', label: 'Chemise denim' },
          { value: 'chemise-flanelle', label: 'Chemise flanelle' },
          { value: 'chemise-soie', label: 'Chemise soie' },
          { value: 'body-shirt', label: 'Body chemise' },
          { value: 'blouse-cache-coeur', label: 'Blouse cache-cœur' },
        ],
      },
      
      // --- Pulls & Tricots ---
      'pulls-tricots': {
        label: 'Pulls & Tricots',
        items: [
          { value: 'pull-col-roule', label: 'Pull col roulé' },
          { value: 'pull-col-v', label: 'Pull col V' },
          { value: 'pull-col-rond', label: 'Pull col rond' },
          { value: 'pull-col-bateau', label: 'Pull col bateau' },
          { value: 'pull-cachemire', label: 'Pull cachemire' },
          { value: 'pull-irlandais', label: 'Pull irlandais' },
          { value: 'pull-norvegien', label: 'Pull norvégien' },
          { value: 'cardigan', label: 'Cardigan' },
          { value: 'cardigan-long', label: 'Cardigan long' },
          { value: 'gilet', label: 'Gilet sans manches' },
          { value: 'poncho', label: 'Poncho' },
          { value: 'cape', label: 'Cape' },
          { value: 'pull-crop', label: 'Pull crop' },
        ],
      },
      
      // --- Sweats & Hoodies ---
      'sweats-hoodies': {
        label: 'Sweats & Hoodies',
        items: [
          { value: 'sweat-basic', label: 'Sweatshirt basique' },
          { value: 'hoodie', label: 'Hoodie' },
          { value: 'zip-hoodie', label: 'Zip hoodie' },
          { value: 'crop-hoodie', label: 'Crop hoodie' },
          { value: 'oversized-hoodie', label: 'Hoodie oversize' },
          { value: 'sweat-col-rond', label: 'Sweat col rond' },
        ],
      },
      
      // --- Vestes & Blazers ---
      'vestes-blazers': {
        label: 'Vestes & Blazers',
        items: [
          { value: 'blazer', label: 'Blazer' },
          { value: 'veste-tailleur', label: 'Veste tailleur' },
          { value: 'perfecto', label: 'Perfecto' },
          { value: 'bomber', label: 'Bomber' },
          { value: 'teddy', label: 'Teddy jacket' },
          { value: 'jean-jacket', label: 'Veste jean' },
          { value: 'veste-cuir', label: 'Veste cuir' },
          { value: 'kimono-jacket', label: 'Kimono jacket' },
          { value: 'bolero', label: 'Boléro' },
          { value: 'veste-safari', label: 'Veste safari' },
          { value: 'veste-teddy', label: 'Veste teddy' },
        ],
      },
      
      // --- Bodies & Bodysuits ---
      'bodies': {
        label: 'Bodies',
        items: [
          { value: 'body-manche-longue', label: 'Body manche longue' },
          { value: 'body-manche-courte', label: 'Body manche courte' },
          { value: 'body-sans-manche', label: 'Body débardeur' },
          { value: 'body-col-roule', label: 'Body col roulé' },
          { value: 'bodysuit', label: 'Bodysuit' },
          { value: 'body-string', label: 'Body string' },
        ],
      },
    },
  },
  
  // =========== SUPER-CATÉGORIE: BAS ===========
  bas: {
    label: 'Bas',
    icon: '👖',
    partie: 'Bottom' as const,
    
    categories: {
      // --- Pantalons ---
      'pantalons': {
        label: 'Pantalons',
        items: [
          { value: 'jean-skinny', label: 'Jean skinny' },
          { value: 'jean-slim', label: 'Jean slim' },
          { value: 'jean-straight', label: 'Jean straight' },
          { value: 'jean-boyfriend', label: 'Jean boyfriend' },
          { value: 'jean-mom', label: 'Jean mom' },
          { value: 'jean-flare', label: 'Jean flare' },
          { value: 'jean-bootcut', label: 'Jean bootcut' },
          { value: 'jean-wide-leg', label: 'Jean wide leg' },
          { value: 'pantalon-tailleur', label: 'Pantalon tailleur' },
          { value: 'pantalon-cigarette', label: 'Pantalon cigarette' },
          { value: 'pantalon-carrot', label: 'Pantalon carotte' },
          { value: 'pantalon-palazzo', label: 'Pantalon palazzo' },
          { value: 'pantalon-cargo', label: 'Pantalon cargo' },
          { value: 'jogger', label: 'Jogger' },
          { value: 'legging', label: 'Legging' },
          { value: 'jegging', label: 'Jegging' },
          { value: 'tregging', label: 'Tregging' },
          { value: 'pantalon-cuir', label: 'Pantalon cuir' },
          { value: 'pantalon-vinyl', label: 'Pantalon vinyle' },
          { value: 'sarouel', label: 'Sarouel' },
          { value: 'chino', label: 'Chino' },
        ],
      },
      
      // --- Shorts ---
      'shorts': {
        label: 'Shorts',
        items: [
          { value: 'short-denim', label: 'Short denim' },
          { value: 'short-taille-haute', label: 'Short taille haute' },
          { value: 'short-cycliste', label: 'Short cycliste' },
          { value: 'bermuda', label: 'Bermuda' },
          { value: 'short-cargo', label: 'Short cargo' },
          { value: 'short-sport', label: 'Short sport' },
          { value: 'culotte-short', label: 'Culotte short' },
          { value: 'short-tailleur', label: 'Short tailleur' },
        ],
      },
      
      // --- Jupes ---
      'jupes': {
        label: 'Jupes',
        items: [
          { value: 'jupe-crayon', label: 'Jupe crayon' },
          { value: 'jupe-trapeze', label: 'Jupe trapèze' },
          { value: 'jupe-plissee', label: 'Jupe plissée' },
          { value: 'jupe-patineuse', label: 'Jupe patineuse' },
          { value: 'jupe-evasee', label: 'Jupe évasée' },
          { value: 'jupe-droite', label: 'Jupe droite' },
          { value: 'jupe-taille-haute', label: 'Jupe taille haute' },
          { value: 'mini-jupe', label: 'Mini-jupe' },
          { value: 'jupe-midi', label: 'Jupe midi' },
          { value: 'jupe-longue', label: 'Jupe longue (maxi)' },
          { value: 'jupe-portefeuille', label: 'Jupe portefeuille' },
          { value: 'jupe-tulipe', label: 'Jupe tulipe' },
          { value: 'jupe-asymetrique', label: 'Jupe asymétrique' },
          { value: 'jupe-tutu', label: 'Jupe tutu' },
          { value: 'jupe-denim', label: 'Jupe denim' },
          { value: 'jupe-cuir', label: 'Jupe cuir' },
          { value: 'jupe-vinyl', label: 'Jupe vinyle' },
          { value: 'jupe-tennis', label: 'Jupe tennis' },
        ],
      },
    },
  },
  
  // =========== SUPER-CATÉGORIE: ROBES & COMBINAISONS ===========
  'robes-combinaisons': {
    label: 'Robes & Combinaisons',
    icon: '👗',
    partie: 'OnBody' as const,
    
    categories: {
      // --- Robes ---
      'robes': {
        label: 'Robes',
        items: [
          { value: 'robe-droite', label: 'Robe droite' },
          { value: 'robe-trapeze', label: 'Robe trapèze' },
          { value: 'robe-patineuse', label: 'Robe patineuse' },
          { value: 'robe-empire', label: 'Robe empire' },
          { value: 'robe-fourreau', label: 'Robe fourreau' },
          { value: 'robe-sirene', label: 'Robe sirène' },
          { value: 'robe-cache-coeur', label: 'Robe cache-cœur' },
          { value: 'robe-chemise', label: 'Robe chemise' },
          { value: 'robe-tshirt', label: 'Robe t-shirt' },
          { value: 'robe-sweat', label: 'Robe sweat' },
          { value: 'robe-blazer', label: 'Robe blazer' },
          { value: 'robe-bustier', label: 'Robe bustier' },
          { value: 'robe-bretelles', label: 'Robe à bretelles' },
          { value: 'robe-asymetrique', label: 'Robe asymétrique' },
          { value: 'robe-portefeuille', label: 'Robe portefeuille' },
          { value: 'robe-babydoll', label: 'Robe babydoll' },
          { value: 'robe-smock', label: 'Robe smockée' },
          { value: 'robe-midi', label: 'Robe midi' },
          { value: 'robe-maxi', label: 'Robe maxi' },
          { value: 'robe-mini', label: 'Robe mini' },
          { value: 'robe-cocktail', label: 'Robe cocktail' },
          { value: 'robe-soiree', label: 'Robe de soirée' },
          { value: 'robe-bal', label: 'Robe de bal' },
          { value: 'robe-boheme', label: 'Robe bohème' },
          { value: 'robe-vintage', label: 'Robe vintage' },
        ],
      },
      
      // --- Combinaisons & Combishorts ---
      'combinaisons': {
        label: 'Combinaisons',
        items: [
          { value: 'combinaison-pantalon', label: 'Combinaison pantalon (jumpsuit)' },
          { value: 'combinaison-short', label: 'Combishort (playsuit)' },
          { value: 'combinaison-large', label: 'Combinaison palazzo' },
          { value: 'combinaison-ajustee', label: 'Combinaison ajustée' },
          { value: 'combinaison-bustier', label: 'Combinaison bustier' },
          { value: 'combinaison-bretelles', label: 'Combinaison à bretelles' },
          { value: 'salopette', label: 'Salopette pantalon' },
          { value: 'salopette-short', label: 'Salopette short' },
          { value: 'combinaison-culotte', label: 'Combinaison culotte' },
        ],
      },
    },
  },
  
  // =========== SUPER-CATÉGORIE: MANTEAUX & EXTÉRIEURS ===========
  'manteaux-exterieurs': {
    label: 'Manteaux & Extérieurs',
    icon: '🧥',
    partie: 'Exterieur' as const,
    
    categories: {
      // --- Manteaux ---
      'manteaux': {
        label: 'Manteaux',
        items: [
          { value: 'trench', label: 'Trench-coat' },
          { value: 'caban', label: 'Caban' },
          { value: 'manteau-laine', label: 'Manteau laine' },
          { value: 'manteau-cachemire', label: 'Manteau cachemire' },
          { value: 'pardessus', label: 'Pardessus' },
          { value: 'manteau-coupe-vent', label: 'Coupe-vent' },
          { value: 'parka', label: 'Parka' },
          { value: 'duffel-coat', label: 'Duffle coat' },
          { value: 'pea-coat', label: 'Pea coat' },
          { value: 'cape-manteau', label: 'Cape manteau' },
          { value: 'imper', label: 'Imperméable' },
        ],
      },
      
      // --- Doudounes & Parkas ---
      'doudounes': {
        label: 'Doudounes',
        items: [
          { value: 'doudoune', label: 'Doudoune' },
          { value: 'doudoune-longue', label: 'Doudoune longue' },
          { value: 'doudoune-courte', label: 'Doudoune courte' },
          { value: 'doudoune-sans-manches', label: 'Doudoune sans manches' },
          { value: 'parka-hiver', label: 'Parka d\'hiver' },
        ],
      },
    },
  },
  
  // =========== SUPER-CATÉGORIE: LINGERIE ===========
  'lingerie': {
    label: 'Lingerie',
    icon: '👙',
    partie: 'Lingerie' as const,
    
    categories: {
      // --- Soutiens-gorge ---
      'soutiens-gorge': {
        label: 'Soutiens-gorge',
        items: [
          { value: 'bra-classic', label: 'Soutien-gorge classique' },
          { value: 'bra-push-up', label: 'Push-up' },
          { value: 'bra-balconnet', label: 'Balconnet' },
          { value: 'bra-corbeille', label: 'Corbeille' },
          { value: 'bra-triangle', label: 'Triangle' },
          { value: 'bralette', label: 'Bralette' },
          { value: 'bandeau', label: 'Bandeau' },
          { value: 'sport-bra', label: 'Brassière sport' },
          { value: 'nursing-bra', label: 'Soutien-gorge allaitement' },
        ],
      },
      
      // --- Culottes & Bas ---
      'culottes-bas': {
        label: 'Culottes',
        items: [
          { value: 'culotte-classique', label: 'Culotte classique' },
          { value: 'culotte-taille-haute', label: 'Culotte taille haute' },
          { value: 'culotte-taille-basse', label: 'Culotte taille basse' },
          { value: 'string', label: 'String' },
          { value: 'tanga', label: 'Tanga' },
          { value: 'shorty', label: 'Shorty' },
          { value: 'boxer-femme', label: 'Boxer' },
          { value: 'culotte-menstruelle', label: 'Culotte menstruelle' },
        ],
      },
      
      // --- Ensembles & Nuisettes ---
      'ensembles-nuit': {
        label: 'Ensembles & Nuit',
        items: [
          { value: 'ensemble-lingerie', label: 'Ensemble lingerie' },
          { value: 'nuisette', label: 'Nuisette' },
          { value: 'babydoll', label: 'Babydoll' },
          { value: 'deshabille', label: 'Déshabillé' },
          { value: 'kimono-lingerie', label: 'Kimono lingerie' },
          { value: 'body-lingerie', label: 'Body lingerie' },
          { value: 'teddy', label: 'Teddy' },
          { value: 'guepiere', label: 'Guêpière' },
        ],
      },
      
      // --- Bas & Collants ---
      'bas-collants': {
        label: 'Bas & Collants',
        items: [
          { value: 'bas-autofixants', label: 'Bas autofixants' },
          { value: 'bas-porte-jarretelles', label: 'Bas porte-jarretelles' },
          { value: 'collants-opaques', label: 'Collants opaques' },
          { value: 'collants-fins', label: 'Collants fins' },
          { value: 'collants-resille', label: 'Collants résille' },
          { value: 'mi-bas', label: 'Mi-bas' },
          { value: 'chaussettes-hautes', label: 'Chaussettes hautes' },
        ],
      },
    },
  },
  
  // =========== SUPER-CATÉGORIE: CHAUSSURES ===========
  'chaussures': {
    label: 'Chaussures',
    icon: '👠',
    partie: 'Chaussures' as const,
    
    categories: {
      // --- Talons ---
      'talons': {
        label: 'Talons',
        items: [
          { value: 'escarpins', label: 'Escarpins' },
          { value: 'escarpins-ouverts', label: 'Escarpins ouverts' },
          { value: 'sandales-talons', label: 'Sandales à talons' },
          { value: 'mules-talons', label: 'Mules à talons' },
          { value: 'bottines-talons', label: 'Bottines à talons' },
          { value: 'boots-talons', label: 'Boots à talons' },
          { value: 'plateforme', label: 'Chaussures plateformes' },
        ],
      },
      
      // --- Plates ---
      'chaussures-plates': {
        label: 'Plates',
        items: [
          { value: 'ballerines', label: 'Ballerines' },
          { value: 'babies', label: 'Babies' },
          { value: 'mocassins', label: 'Mocassins' },
          { value: 'loafers', label: 'Loafers' },
          { value: 'derbies', label: 'Derbies' },
          { value: 'oxfords', label: 'Oxfords' },
          { value: 'mary-janes', label: 'Mary Janes' },
          { value: 'mules-plates', label: 'Mules plates' },
        ],
      },
      
      // --- Sandales ---
      'sandales': {
        label: 'Sandales',
        items: [
          { value: 'nu-pieds', label: 'Nu-pieds' },
          { value: 'sandales-plates', label: 'Sandales plates' },
          { value: 'tongs', label: 'Tongs' },
          { value: 'espadrilles', label: 'Espadrilles' },
          { value: 'sandales-bride', label: 'Sandales à brides' },
          { value: 'sandales-gladiator', label: 'Sandales gladiator' },
        ],
      },
      
      // --- Bottes & Bottines ---
      'bottes-bottines': {
        label: 'Bottes & Bottines',
        items: [
          { value: 'bottines', label: 'Bottines' },
          { value: 'bottines-chelsea', label: 'Bottines Chelsea' },
          { value: 'bottes-hautes', label: 'Bottes hautes' },
          { value: 'cuissardes', label: 'Cuissardes' },
          { value: 'bottes-cavaliere', label: 'Bottes cavalières' },
          { value: 'bottes-pluie', label: 'Bottes de pluie' },
          { value: 'ugg-boots', label: 'UGG boots' },
          { value: 'doc-martens', label: 'Doc Martens' },
          { value: 'rangers', label: 'Rangers' },
        ],
      },
      
      // --- Sneakers & Sport ---
      'sneakers-sport': {
        label: 'Sneakers & Sport',
        items: [
          { value: 'sneakers', label: 'Sneakers' },
          { value: 'baskets-montantes', label: 'Baskets montantes' },
          { value: 'baskets-basses', label: 'Baskets basses' },
          { value: 'running', label: 'Running' },
          { value: 'tennis-shoes', label: 'Tennis shoes' },
          { value: 'slip-on', label: 'Slip-on' },
          { value: 'converse', label: 'Converse' },
          { value: 'vans', label: 'Vans' },
        ],
      },
    },
  },
  
  // =========== SUPER-CATÉGORIE: ACCESSOIRES ===========
  'accessoires': {
    label: 'Accessoires',
    icon: '👜',
    partie: 'Accessoire' as const,
    
    categories: {
      // --- Sacs ---
      'sacs': {
        label: 'Sacs',
        items: [
          { value: 'sac-main', label: 'Sac à main' },
          { value: 'sac-bandouliere', label: 'Sac bandoulière' },
          { value: 'sac-dos', label: 'Sac à dos' },
          { value: 'tote-bag', label: 'Tote bag' },
          { value: 'pochette', label: 'Pochette' },
          { value: 'sac-seau', label: 'Sac seau' },
          { value: 'cabas', label: 'Cabas' },
          { value: 'sac-baguette', label: 'Sac baguette' },
          { value: 'sac-selle', label: 'Sac selle' },
          { value: 'sac-bowling', label: 'Sac bowling' },
          { value: 'mini-sac', label: 'Mini sac' },
          { value: 'sac-banane', label: 'Sac banane' },
        ],
      },
      
      // --- Bijoux ---
      'bijoux': {
        label: 'Bijoux',
        items: [
          { value: 'collier', label: 'Collier' },
          { value: 'choker', label: 'Choker' },
          { value: 'boucles-oreilles', label: 'Boucles d\'oreilles' },
          { value: 'bracelet', label: 'Bracelet' },
          { value: 'bague', label: 'Bague' },
          { value: 'broche', label: 'Broche' },
          { value: 'chaine-corps', label: 'Chaîne de corps' },
          { value: 'piercing', label: 'Piercing' },
        ],
      },
      
      // --- Accessoires cheveux ---
      'cheveux': {
        label: 'Cheveux',
        items: [
          { value: 'headband', label: 'Headband' },
          { value: 'serre-tete', label: 'Serre-tête' },
          { value: 'bandana', label: 'Bandana' },
          { value: 'foulard-cheveux', label: 'Foulard cheveux' },
          { value: 'barrettes', label: 'Barrettes' },
          { value: 'chouchou', label: 'Chouchou' },
          { value: 'pince-cheveux', label: 'Pince cheveux' },
        ],
      },
      
      // --- Ceintures ---
      'ceintures': {
        label: 'Ceintures',
        items: [
          { value: 'ceinture-cuir', label: 'Ceinture cuir' },
          { value: 'ceinture-chaine', label: 'Ceinture chaîne' },
          { value: 'ceinture-large', label: 'Ceinture large (corset)' },
          { value: 'ceinture-fine', label: 'Ceinture fine' },
          { value: 'ceinture-western', label: 'Ceinture western' },
        ],
      },
      
      // --- Accessoires divers ---
      'divers': {
        label: 'Divers',
        items: [
          { value: 'echarpe', label: 'Écharpe' },
          { value: 'foulard', label: 'Foulard' },
          { value: 'etole', label: 'Étole' },
          { value: 'gants', label: 'Gants' },
          { value: 'chapeau', label: 'Chapeau' },
          { value: 'bonnet', label: 'Bonnet' },
          { value: 'casquette', label: 'Casquette' },
          { value: 'beret', label: 'Béret' },
          { value: 'bob', label: 'Bob' },
          { value: 'lunettes-soleil', label: 'Lunettes de soleil' },
          { value: 'montre', label: 'Montre' },
        ],
      },
    },
  },
  
  // =========== SUPER-CATÉGORIE: SPORT & MAILLOTS ===========
  'sport-maillots': {
    label: 'Sport & Maillots',
    icon: '🏃‍♀️',
    partie: 'OnBody' as const,
    
    categories: {
      // --- Sport ---
      'sport': {
        label: 'Sportswear',
        items: [
          { value: 'legging-sport', label: 'Legging de sport' },
          { value: 'brassiere-sport', label: 'Brassière de sport' },
          { value: 'short-sport', label: 'Short de sport' },
          { value: 'top-sport', label: 'Top de sport' },
          { value: 'ensemble-sport', label: 'Ensemble de sport' },
          { value: 'sweat-sport', label: 'Sweat de sport' },
          { value: 'jogger-sport', label: 'Jogger' },
        ],
      },
      
      // --- Maillots de bain ---
      'maillots-bain': {
        label: 'Maillots de bain',
        items: [
          { value: 'maillot-1-piece', label: 'Maillot 1 pièce' },
          { value: 'bikini', label: 'Bikini' },
          { value: 'bikini-taille-haute', label: 'Bikini taille haute' },
          { value: 'trikini', label: 'Trikini' },
          { value: 'tankini', label: 'Tankini' },
          { value: 'monokini', label: 'Monokini' },
          { value: 'maillot-surf', label: 'Maillot surf' },
        ],
      },
    },
  },
  
  // =========== SUPER-CATÉGORIE: NUIT & DÉTENTE ===========
  'nuit-detente': {
    label: 'Nuit & Détente',
    icon: '🌙',
    partie: 'OnBody' as const,
    
    categories: {
      // --- Pyjamas ---
      'pyjamas': {
        label: 'Pyjamas',
        items: [
          { value: 'pyjama-pantalon', label: 'Pyjama pantalon' },
          { value: 'pyjama-short', label: 'Pyjama short' },
          { value: 'chemise-nuit', label: 'Chemise de nuit' },
          { value: 'nuisette-nuit', label: 'Nuisette' },
          { value: 'peignoir', label: 'Peignoir' },
          { value: 'combinaison-pyjama', label: 'Combinaison pyjama' },
        ],
      },
      
      // --- Homewear ---
      'homewear': {
        label: 'Homewear',
        items: [
          { value: 'jogging-maison', label: 'Jogging' },
          { value: 'sweat-maison', label: 'Sweat confort' },
          { value: 'legging-maison', label: 'Legging maison' },
          { value: 'robe-maison', label: 'Robe d\'intérieur' },
          { value: 'ensemble-homewear', label: 'Ensemble homewear' },
        ],
      },
    },
  },
} as const;

// Types helpers pour TypeScript
export type SuperCategory = keyof typeof CLOTHING_TAXONOMY;
export type Category<SC extends SuperCategory> = keyof typeof CLOTHING_TAXONOMY[SC]['categories'];
export type ClothingItem = string; // Any value from items arrays

// Helper function pour obtenir tous les items
export function getAllClothingItems(): Array<{ value: string; label: string; category: string; superCategory: string }> {
  const items: Array<{ value: string; label: string; category: string; superCategory: string }> = [];
  
  Object.entries(CLOTHING_TAXONOMY).forEach(([superCat, superCatData]) => {
    Object.entries(superCatData.categories).forEach(([cat, catData]) => {
      catData.items.forEach((item) => {
        items.push({
          ...item,
          category: catData.label,
          superCategory: superCatData.label,
        });
      });
    });
  });
  
  return items;
}

// Helper pour obtenir le label d'un item
export function getClothingItemLabel(value: string): string {
  const allItems = getAllClothingItems();
  return allItems.find(item => item.value === value)?.label || value;
}
