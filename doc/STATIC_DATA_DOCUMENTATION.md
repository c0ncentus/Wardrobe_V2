# 📚 DOCUMENTATION DES DONNÉES STATIQUES

## Vue d'ensemble

L'application utilise **deux fichiers centralisés** pour toutes les données statiques :

1. **`staticData.ts`** - Couleurs, matériaux, styles, parties
2. **`clothingTaxonomy.ts`** - Taxonomie complète des vêtements

---

## 📁 staticData.ts

### COLORS - Palette de couleurs

Toutes les couleurs de l'app avec codes hex exact.

```typescript
COLORS.background.primary    // #020617 (slate-950)
COLORS.accent.purple.DEFAULT // #9333ea
COLORS.gradient.primary      // 'from-purple-600 to-pink-600'
COLORS.styleColors['kawaii'] // Couleurs pour style kawaii
```

**Structure :**
- `background` - Fonds et surfaces
- `accent` - Accents purple/pink
- `gradient` - Gradients Tailwind
- `text` - Couleurs de texte (4 niveaux)
- `border` - Bordures
- `semantic` - Success, error, warning, info
- `styleColors` - Couleurs par style vestimentaire

---

### MATERIALS - 100+ Matériaux

Classification exhaustive des matériaux de vêtements.

```typescript
MATERIALS.coton           // Coton
MATERIALS['cuir-vegan']   // Cuir végétal
MATERIALS.sequins         // Paillettes
```

**Catégories :**
- **Naturel** (16) : Coton, lin, laine, soie, cachemire, etc.
- **Synthétique** (12) : Polyester, nylon, élasthanne, etc.
- **Semi-synthétique** (4) : Viscose, modal, tencel, acétate
- **Animal** (4) : Cuir, daim, nubuck, fourrure
- **Technique** (4) : Gore-tex, softshell, néoprène, mesh
- **Tissage** (13) : Denim, velours, tweed, jersey, etc.
- **Délicat** (10) : Dentelle, tulle, satin, mousseline, etc.
- **Décoratif** (4) : Sequins, strass, métallisé, holographique

**Chaque matériau contient :**
```typescript
{
  label: string,         // Nom d'affichage
  category: string,      // Catégorie
  properties: string[],  // Propriétés (Doux, Chaud, etc.)
  care: string,          // Instructions d'entretien
}
```

**Helpers :**
```typescript
getMaterialOptions()           // Liste pour select
getMaterialsByCategory()       // Groupés par catégorie
```

---

### CLOTHING_STYLES - 50+ Styles féminins

Tous les styles vestimentaires possibles avec descriptions.

```typescript
CLOTHING_STYLES['vampire-sirene'].label       // "Vampire/Sirène"
CLOTHING_STYLES.kawaii.description            // "Mignon, japonais..."
CLOTHING_STYLES.gothique.examples             // Exemples de pièces
```

**Familles de styles :**

**Romantiques & Féminins :**
- Romantique, Cottage Core, Coquette

**Dark & Alternatifs :**
- Vampire/Sirène, Gothique, Grunge, Punk, Emo

**Asiatiques :**
- Kawaii, Lolita, Harajuku, Y2K

**Élégants & Sophistiqués :**
- Classique Chic, Parisien, Old Money, Preppy

**Casual & Confort :**
- Streetwear, Athleisure, Tomboy, Normcore

**Bohèmes & Artistiques :**
- Bohème, Hippie Chic, Artiste

**Minimalistes :**
- Minimaliste, Scandinavian

**Glamour & Soirée :**
- Glamour, Hollywood Regency, Disco

**Rétro & Vintage :**
- Pin-Up, Rockabilly, Western, Safari, Nautique

**Ethniques :**
- Ethnique, Afro-Centric

**Futuristes :**
- Cyberpunk, Techwear

**Subcultures Internet :**
- E-Girl/E-Boy, Soft Girl, Dark Academia, Light Academia

**Helper :**
```typescript
getStyleOptions() // Liste pour select
```

---

### CLOTHING_PARTS - 8 Parties

```typescript
CLOTHING_PARTS.Top        // Haut du corps
CLOTHING_PARTS.Bottom     // Bas du corps
CLOTHING_PARTS.OnBody     // Tout le corps (robes)
CLOTHING_PARTS.Ensemble   // Ensemble assorti
CLOTHING_PARTS.Accessoire // Accessoires
CLOTHING_PARTS.Chaussures // Chaussures
CLOTHING_PARTS.Lingerie   // Lingerie
CLOTHING_PARTS.Exterieur  // Manteaux
```

**Helper :**
```typescript
getPartieOptions() // Liste pour select
```

---

## 📁 clothingTaxonomy.ts

### CLOTHING_TAXONOMY - Hiérarchie complète

Structure à 3 niveaux : **Super-catégorie → Catégorie → Articles**

#### Super-catégories (8)

1. **hauts** 👚
   - T-shirts & Tops (14 items)
   - Chemises & Blouses (11 items)
   - Pulls & Tricots (13 items)
   - Sweats & Hoodies (6 items)
   - Vestes & Blazers (11 items)
   - Bodies (6 items)

2. **bas** 👖
   - Pantalons (21 items)
   - Shorts (8 items)
   - Jupes (18 items)

3. **robes-combinaisons** 👗
   - Robes (25 items)
   - Combinaisons (9 items)

4. **manteaux-exterieurs** 🧥
   - Manteaux (11 items)
   - Doudounes (5 items)

5. **lingerie** 👙
   - Soutiens-gorge (9 items)
   - Culottes (8 items)
   - Ensembles & Nuit (8 items)
   - Bas & Collants (7 items)

6. **chaussures** 👠
   - Talons (7 items)
   - Plates (8 items)
   - Sandales (6 items)
   - Bottes & Bottines (9 items)
   - Sneakers & Sport (8 items)

7. **accessoires** 👜
   - Sacs (12 items)
   - Bijoux (8 items)
   - Cheveux (7 items)
   - Ceintures (5 items)
   - Divers (11 items)

8. **sport-maillots** 🏃‍♀️
   - Sport (7 items)
   - Maillots de bain (7 items)

9. **nuit-detente** 🌙
   - Pyjamas (6 items)
   - Homewear (5 items)

**TOTAL : 300+ articles de vêtements**

---

### Utilisation

```typescript
// Accéder à la structure
CLOTHING_TAXONOMY.hauts.label                              // "Hauts"
CLOTHING_TAXONOMY.hauts.categories['tshirts-tops'].label   // "T-shirts & Tops"
CLOTHING_TAXONOMY.hauts.categories['tshirts-tops'].items   // Array de 14 items

// Chaque item contient
{
  value: 'crop-top',    // ID unique
  label: 'Crop top',    // Nom d'affichage
}
```

---

### Helpers disponibles

```typescript
// Obtenir TOUS les items (300+) dans un array plat
const allItems = getAllClothingItems()
// Returns: [{ value, label, category, superCategory }, ...]

// Obtenir le label d'un item par son value
getClothingItemLabel('crop-top') // "Crop top"
```

---

## 🎨 Codes Couleurs par Style

Chaque style a ses propres couleurs :

```typescript
COLORS.styleColors['vampire-sirene'] = {
  gradient: 'from-purple-900/20 to-red-900/20',
  border: 'border-purple-700/30',
  text: 'text-purple-300',
  bg: 'bg-purple-900/30',
}

COLORS.styleColors['kawaii'] = {
  gradient: 'from-pink-900/20 to-purple-900/20',
  border: 'border-pink-700/30',
  text: 'text-pink-300',
  bg: 'bg-pink-900/30',
}

// Et ainsi de suite pour tous les styles...
```

Utilise ces classes Tailwind directement dans les composants.

---

## 📊 Statistiques

- **Styles** : 50+ styles féminins
- **Matériaux** : 100+ matériaux différents
- **Articles** : 300+ types de vêtements
- **Catégories** : 30+ catégories
- **Super-catégories** : 9
- **Couleurs** : Palette complète avec hex codes

---

## 💡 Intégration dans l'app

### Dans les composants

```typescript
import { COLORS, CLOTHING_STYLES, MATERIALS } from './staticData';
import { CLOTHING_TAXONOMY, getAllClothingItems } from './clothingTaxonomy';

// Afficher les styles dans un select
const styleOptions = getStyleOptions();

// Afficher les matériaux groupés
const materialsByCategory = getMaterialsByCategory();

// Afficher tous les vêtements
const allItems = getAllClothingItems();
```

### Dans VetementModal.tsx

```typescript
// Select de style
<select value={style}>
  {getStyleOptions().map(opt => (
    <option key={opt.value} value={opt.value}>
      {opt.label}
    </option>
  ))}
</select>

// Select de matériaux (multi-select)
{getMaterialOptions().map(opt => (
  <option key={opt.value} value={opt.value}>
    {opt.label} ({opt.category})
  </option>
))}

// Select de type de vêtement
{getAllClothingItems().map(item => (
  <option key={item.value} value={item.value}>
    {item.label} - {item.category}
  </option>
))}
```

---

## 🎯 Points clés

✅ **Tout est typé** - TypeScript strict avec `as const`
✅ **Helpers fournis** - Fonctions pour obtenir les listes facilement
✅ **Exhaustif** - 50+ styles, 100+ matériaux, 300+ vêtements
✅ **Organisé** - Hiérarchie claire et logique
✅ **Extensible** - Facile d'ajouter de nouveaux items
✅ **Documenté** - Descriptions et exemples partout

---

## 🔮 Pour étendre

### Ajouter un nouveau style

```typescript
// Dans staticData.ts
CLOTHING_STYLES['mon-style'] = {
  label: 'Mon Style',
  description: 'Description',
  examples: ['Ex 1', 'Ex 2'],
}

// Ajouter les couleurs
COLORS.styleColors['mon-style'] = {
  gradient: '...',
  border: '...',
  text: '...',
  bg: '...',
}
```

### Ajouter un nouveau matériau

```typescript
// Dans staticData.ts
MATERIALS['mon-materiau'] = {
  label: 'Mon Matériau',
  category: 'Naturel',
  properties: ['Propriété 1', 'Propriété 2'],
  care: 'Instructions d\'entretien',
}
```

### Ajouter un nouveau type de vêtement

```typescript
// Dans clothingTaxonomy.ts
CLOTHING_TAXONOMY.hauts.categories['ma-categorie'] = {
  label: 'Ma Catégorie',
  items: [
    { value: 'mon-item', label: 'Mon Item' },
  ],
}
```

---

**Tout est prêt pour être utilisé dans l'app ! 🎉**
