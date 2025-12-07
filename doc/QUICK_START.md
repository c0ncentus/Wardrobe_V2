# 🚀 DÉMARRAGE RAPIDE - Wardrobe App

## Installation en 3 étapes

### 1️⃣ Installer Node.js (si pas déjà fait)
- Téléchargez Node.js depuis https://nodejs.org/
- Choisissez la version LTS (recommandée)
- Installez-le normalement

### 2️⃣ Installer les dépendances
Ouvrez un terminal dans le dossier `wardrobe-app_2` et lancez :

```bash
npm install
```

⏱️ Cela prendra 1-2 minutes la première fois.

### 3️⃣ Lancer l'application
```bash
npm run dev
```

✅ L'application s'ouvrira automatiquement dans votre navigateur sur http://localhost:3000

---

## 🎯 Premier usage

1. **Créez votre premier vêtement**
   - Cliquez sur "Nouveau vêtement"
   - Ajoutez une image (upload ou URL)
   - Remplissez le titre (obligatoire)
   - Sauvegardez !

2. **Explorez les filtres**
   - Utilisez la barre de recherche
   - Testez les filtres par style, type, partie
   - Cliquez sur "Réinitialiser" pour tout effacer

3. **Créez une collection**
   - Allez dans l'onglet "Collections"
   - Créez une nouvelle collection
   - Sélectionnez vos vêtements favoris
   - Donnez-lui un nom et sauvegardez

4. **Exportez vos données**
   - Cliquez sur "Exporter" pour sauvegarder
   - Un fichier JSON sera téléchargé
   - Conservez-le en backup !

---

## 💾 Stockage des données

- Toutes vos données sont stockées **localement** dans votre navigateur
- **Aucun compte nécessaire**
- **Aucune connexion Internet requise** après installation
- **100% privé** - vos données ne quittent jamais votre ordinateur

---

## 🆘 Problèmes ?

### L'application ne se lance pas
1. Vérifiez que Node.js est bien installé : `node --version`
2. Supprimez `node_modules` et relancez `npm install`
3. Vérifiez qu'aucune autre app n'utilise le port 3000

### Les images ne s'affichent pas
- Utilisez des URLs valides (https://...)
- Ou uploadez des fichiers depuis votre ordinateur
- Vérifiez que l'image est au format JPG, PNG ou WEBP

### Les données ont disparu
- Si vous avez vidé le cache du navigateur, les données sont perdues
- C'est pourquoi il faut **exporter régulièrement** !
- Utilisez le bouton "Exporter" pour créer des backups

---

## 📚 Documentation complète

Consultez le fichier **README.md** pour :
- Architecture détaillée
- Guide complet des fonctionnalités
- Améliorations futures possibles
- Informations techniques

---

## 🎨 Personnalisation

Vous pouvez personnaliser l'app en éditant :
- `src/index.css` - Couleurs, animations
- `tailwind.config.js` - Configuration Tailwind
- Les composants individuels pour modifier l'UI

---

**Bon shopping et bonne organisation ! 👗✨**
