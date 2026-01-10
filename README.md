source ~/.bashrc


# 👗 Wardrobe - Gestionnaire de Garde-robe

Une application React élégante et moderne pour gérer votre garde-robe avec style. Interface dark sophistiquée, gestion complète CRUD, collections de tenues, et bien plus.

## ✨ Fonctionnalités

### Gestion des Vêtements
- ✅ **CRUD complet** : Créer, lire, modifier et supprimer des vêtements
- 🖼️ **Images** : Upload d'images locales ou URL
- 🏷️ **Métadonnées riches** :
  - Titre, description, lien
  - **50+ styles** (Vampire/Sirène, Kawaii, Gothique, Y2K, etc.)
  - **300+ types de vêtements** organisés en hiérarchie
  - **8 parties** (Ensemble, Top, Bottom, OnBody, Accessoire, etc.)
  - **100+ matériaux** (Coton, Soie, Cuir, Dentelle, etc.)
  - Tenue complète (oui/non)
- 🎯 **Filtres avancés** : Recherche textuelle + filtres multi-critères
- 🎨 **Affichage en grille** : Cards élégantes avec aperçu d'image
- 🔄 **Drag & Drop** : Réorganisez vos vêtements facilement

### Collections de Tenues
- 👔 **Compositions** : Créez des tenues complètes à partir de vos vêtements
- 📝 **Notes Markdown** : Documentez vos looks avec du texte enrichi
- 🎮 **Interface RPG-style** : Sélection visuelle comme dans un jeu vidéo
- 🗂️ **Organisation** : Gérez plusieurs collections simultanément

### Import/Export
- 💾 **Sauvegarde locale** : Données stockées dans localStorage
- 📤 **Export JSON** : Exportez toutes vos données
- 📥 **Import JSON** : Importez vos données depuis un fichier
- 🔐 **Pas de compte requis** : 100% local et privé

### Design
- 🌙 **Thème dark élégant** : Design Award CSS sophistiqué
- ⚡ **Animations fluides** : Transitions et micro-interactions soignées
- 📱 **Responsive** : Adapté mobile, tablette et desktop
- 🎨 **Tailwind CSS** : Design system cohérent et performant

## 🆕 Nouvelles Fonctionnalités

### Données Statiques Exhaustives

L'application utilise maintenant un système de données statiques complet :

- **📊 50+ Styles féminins** : Vampire/Sirène, Kawaii, Gothique, Y2K, Dark Academia, Cottage Core, et bien plus
- **🧵 100+ Matériaux** : Naturels (coton, soie, laine), Synthétiques (polyester, lycra), Délicats (dentelle, tulle), Techniques (gore-tex, néoprène)
- **👗 300+ Types de vêtements** : Organisés en hiérarchie (Super-catégories → Catégories → Articles)
- **🎨 Palette de couleurs** : Codes hex précis + couleurs par style

### Hiérarchie de Vêtements

9 super-catégories avec taxonomie complète :
- **Hauts** (65+ items) : T-shirts, Chemises, Pulls, Sweats, Vestes, Bodies
- **Bas** (47 items) : Pantalons, Shorts, Jupes
- **Robes & Combinaisons** (34 items)
- **Manteaux & Extérieurs** (16 items)
- **Lingerie** (32 items)
- **Chaussures** (38 items)
- **Accessoires** (43 items)
- **Sport & Maillots** (14 items)
- **Nuit & Détente** (11 items)

Consultez `STATIC_DATA_DOCUMENTATION.md` pour la documentation complète.

## 🚀 Installation

### Prérequis
- Node.js 18+ et npm

### Étapes

1. **Installer les dépendances**
```bash
cd wardrobe-app_2
npm install
```

2. **Lancer en développement**
```bash
npm run dev
```

L'application s'ouvrira automatiquement sur `http://localhost:3000`

3. **Build pour production**
```bash
npm run build
```

Les fichiers optimisés seront dans le dossier `dist/`

## 📖 Guide d'utilisation

### Ajouter un vêtement

1. Cliquez sur **"Nouveau vêtement"**
2. Remplissez le formulaire :
   - **Image** : Upload fichier ou coller URL
   - **Titre** : Nom du vêtement (requis)
   - **Lien** : URL vers la boutique (optionnel)
   - **Description** : Notes personnelles
   - **Style, Type, Partie** : Catégorisation
   - **Tenue complète** : Cochez si c'est une tenue complète
3. Cliquez sur **"Créer"**

### Filtrer et rechercher

- **Barre de recherche** : Recherche dans titre et description
- **Filtres** : Style, Type, Partie
- **Tenue complète** : Tous / Complètes / Pièces séparées
- **Réinitialiser** : Bouton pour effacer tous les filtres

### Créer une collection

1. Cliquez sur **"Collections"** dans la navigation
2. Cliquez sur **"Nouvelle collection"**
3. Donnez un titre à votre collection
4. Sélectionnez les vêtements (cliquez pour ajouter/retirer)
5. Ajoutez des notes en Markdown (optionnel)
6. Cliquez sur **"Sauvegarder"**

### Import/Export

**Exporter :**
- Cliquez sur **"Exporter"** dans la barre de navigation
- Un fichier JSON sera téléchargé avec toutes vos données

**Importer :**
- Cliquez sur **"Importer"**
- Sélectionnez votre fichier JSON
- Confirmez le remplacement des données

## 🏗️ Architecture

```
wardrobe-app_2/
├── src/
│   ├── types.ts              # TypeScript types et interfaces
│   ├── utils.ts              # Fonctions utilitaires (CRUD, import/export)
│   ├── staticData.ts         # 🆕 Couleurs, matériaux, styles (100+ matériaux, 50+ styles)
│   ├── clothingTaxonomy.ts   # 🆕 Hiérarchie de 300+ vêtements
│   ├── App.tsx               # Composant principal avec state management
│   ├── VetementCard.tsx      # Card individuelle de vêtement
│   ├── VetementModal.tsx     # Modal CRUD pour vêtements
│   ├── VetementGrid.tsx      # Grille avec filtres et recherche
│   ├── CollectionView.tsx    # Vue des collections
│   ├── index.tsx             # Point d'entrée React
│   └── index.css             # Styles Tailwind + animations
├── public/
│   └── index.html            # HTML template
├── package.json              # Dépendances
├── tsconfig.json             # Config TypeScript
├── tailwind.config.js        # Config Tailwind
├── vite.config.ts            # Config Vite
└── README.md                 # Ce fichier
```

## 🎨 Stack Technique

- **React 18** - Framework UI
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool ultra-rapide
- **LocalStorage** - Persistence des données

## 💡 Caractéristiques Techniques

### Types TypeScript stricts
Tous les composants sont fortement typés avec des interfaces précises pour éviter les bugs.

### Gestion d'état optimisée
- State React avec hooks
- Persistence automatique dans localStorage
- Synchronisation bi-directionnelle

### Performance
- Pas de re-renders inutiles
- Images optimisées (base64 ou URL)
- Build Vite ultra-rapide

### Code Quality
- ES6+ moderne
- Composants fonctionnels purs
- Séparation des responsabilités
- Commentaires et documentation

## 🔮 Améliorations Futures

Suggestions pour continuer le développement :

- [ ] Drag & drop entre collections
- [ ] Export/import par collection
- [ ] Filtres sauvegardés
- [ ] Thèmes personnalisables
- [ ] Statistiques de garde-robe
- [ ] Recherche d'images par couleur
- [ ] Mode présentation pour collections
- [ ] PWA (Progressive Web App)
- [ ] Synchronisation cloud optionnelle

## 📝 Notes

- Les données sont stockées localement dans votre navigateur
- Pas de tracking, pas de compte, 100% privé
- Exportez régulièrement vos données pour backup
- Compatible Chrome, Firefox, Safari, Edge

## 🎯 Utilisation Réelle

Cette application a été conçue pour une utilisation réelle et quotidienne :
- Interface ergonomique et agréable
- Performance optimale
- Code maintenable et extensible
- Design professionnel

Profitez de votre nouvelle garde-robe digitale ! 👗✨
