#!/bin/bash
# -----------------------------------------------------------------------
# SCRIPT ULTIME DE CRÉATION DE L'ARBORESCENCE POUR UNE APPLICATION ROBUSTE
# Intégration de l'architecture hexagonale (Ports & Adapters) et du CQRS.
# Tous les fichiers sont créés avec un contenu vide ou minimal.
# -----------------------------------------------------------------------

# Le répertoire racine du projet
PROJECT_ROOT="atlas-personnel-v2-ultimate-architecture"

# Variable pour le chemin source
SRC="Source Code (src)/"
CONFIG="Configuration/"

# Fonction pour créer un répertoire de manière sûre
create_dir() {
    mkdir -p "$PROJECT_ROOT/$1"
}

# Fonction pour créer un fichier avec un contenu minimal/vide
create_file() {
    FILE_PATH="$PROJECT_ROOT/$1"
    CONTENT="$2"
    
    # Créer le répertoire parent si nécessaire
    create_dir "$(dirname "$FILE_PATH")"
    
    # Écrire le contenu minimal
    echo "$CONTENT" > "$FILE_PATH"
    echo "Créé: $FILE_PATH (vide)"
}

# Contenus minimalistes
EMPTY_TS="// Fichier TypeScript/TSX vide"
EMPTY_JSON="{}"
EMPTY_JS="// Fichier JavaScript/JS vide"
EMPTY_CSS="/* Fichier CSS/Tailwind vide */"
EMPTY_HTML=""
EMPTY_MD=""

echo "🚀 Démarrage de la création de la structure ULTIME du projet $PROJECT_ROOT..."
echo "-----------------------------------------------------------------------------"

# 1. CRÉATION DES DOSSIERS RACINES ET CONFIGURATION
create_dir "Documentation"
create_dir "Tests/unit/core"
create_dir "Tests/unit/features"
create_dir "Tests/e2e/cypress"
create_dir "Tests/fixtures"
create_dir "${CONFIG}"

create_file ".gitignore" "node_modules\ndist\n.env\n.env.local\n*.log"
create_file ".env.example" "VITE_API_BASE_URL=http://localhost:8080/api/v1\nVITE_DOMAIN=wardrobe\n"
create_file "package.json" "${EMPTY_JSON}"
create_file "package-lock.json" "${EMPTY_JSON}"
create_file "jest.config.ts" "${EMPTY_TS}"
create_file "cypress.config.ts" "${EMPTY_TS}"
create_file "${CONFIG}tsconfig.json" "${EMPTY_JSON}"
create_file "${CONFIG}tsconfig.node.json" "${EMPTY_JSON}"
create_file "${CONFIG}vite.config.ts" "${EMPTY_TS}"
create_file "${CONFIG}tailwind.config.js" "${EMPTY_JS}"
create_file "${CONFIG}postcss.config.js" "${EMPTY_JS}"
create_file "${CONFIG}index.html" "${EMPTY_HTML}"
create_file "Documentation/ARCHITECTURE.md" "${EMPTY_MD}"
create_file "Documentation/API_CONTRACT.md" "${EMPTY_MD}"
create_file "Documentation/PERFORMANCE.md" "${EMPTY_MD}"


# 2. STRUCTURE SOURCE (src/)

# A. Entrypoints, Styles et Assets
create_dir "${SRC}Entrypoints"
create_dir "${SRC}Styles/themes"
create_dir "${SRC}Styles/mixins"
create_dir "${SRC}Assets/icons/svg"
create_dir "${SRC}Assets/images/defaults"
create_dir "${SRC}Assets/lottie-animations"

create_file "${SRC}Entrypoints/main.tsx" "${EMPTY_TS}"
create_file "${SRC}Entrypoints/App.tsx" "${EMPTY_TS}"
create_file "${SRC}Styles/index.css" "${EMPTY_CSS}"
create_file "${SRC}Styles/themes/dark.css" "${EMPTY_CSS}"
create_file "${SRC}Styles/themes/light.css" "${EMPTY_CSS}"
create_file "${SRC}Styles/mixins/typography.css" "${EMPTY_CSS}"


# B. Core (Clean Architecture - Ports, CQRS, Domain)
create_dir "${SRC}Core/Domain/Entities"
create_dir "${SRC}Core/Domain/ValueObjects"
create_dir "${SRC}Core/Domain/Events"
create_dir "${SRC}Core/Domain/Services"
create_dir "${SRC}Core/Ports/Inbound"
create_dir "${SRC}Core/Ports/Outbound"
create_dir "${SRC}Core/Adapters/Persistence"
create_dir "${SRC}Core/Adapters/Http"
create_dir "${SRC}Core/Utils/format"
create_dir "${SRC}Core/Utils/validation"
create_dir "${SRC}Core/Utils/performance"

create_file "${SRC}Core/index.ts" "${EMPTY_TS}"
create_file "${SRC}Core/types.ts" "${EMPTY_TS}"

# Domain (Le modèle de données et la logique métier)
create_file "${SRC}Core/Domain/Entities/BaseEntity.ts" "${EMPTY_TS}"
create_file "${SRC}Core/Domain/Entities/Item.ts" "${EMPTY_TS}"
create_file "${SRC}Core/Domain/ValueObjects/Id.ts" "${EMPTY_TS}"
create_file "${SRC}Core/Domain/Events/DomainEvent.ts" "${EMPTY_TS}"
create_file "${SRC}Core/Domain/Services/ItemDomainService.ts" "${EMPTY_TS}"

# Ports (Interfaces)
create_file "${SRC}Core/Ports/Inbound/ItemManagementPort.ts" "// L\'interface de gestion des Items (UseCase)"
create_file "${SRC}Core/Ports/Outbound/ItemRepositoryPort.ts" "// L\'interface pour l\'accès aux données (Repository)"
create_file "${SRC}Core/Ports/Outbound/ExternalParserPort.ts" "// L\'interface pour les services externes (Parser)"

# Adapters (Implémentations)
create_file "${SRC}Core/Adapters/Persistence/LocalItemRepository.ts" "// Implémentation locale de ItemRepositoryPort"
create_file "${SRC}Core/Adapters/Http/AxiosHttpClient.ts" "// Adaptateur HTTP pour la couche Outbound"
create_file "${SRC}Core/Adapters/Persistence/ItemMapper.ts" "// Mappeur DTO <-> Entity"

# Utilities avancées
create_file "${SRC}Core/Utils/performance/memoize.ts" "${EMPTY_TS}"
create_file "${SRC}Core/Utils/validation/joi-schemas.ts" "${EMPTY_TS}" # Utilisation d'une librairie de validation (ex: Joi/Zod)


# C. State Management (CQRS + Gestion du Store)
create_dir "${SRC}State/Store"
create_dir "${SRC}State/Commands"
create_dir "${SRC}State/Queries"
create_dir "${SRC}State/Models"

create_file "${SRC}State/index.ts" "${EMPTY_TS}"
create_file "${SRC}State/Store/mainStore.ts" "${EMPTY_TS}"
create_file "${SRC}State/Store/Provider.tsx" "${EMPTY_TS}"
create_file "${SRC}State/Models/UserState.ts" "${EMPTY_TS}"

# CQRS pour l'état (avec Redux/Zustand ou simple Context)
create_file "${SRC}State/Commands/ItemCommands.ts" "// Gère les écritures (CREATE, UPDATE, DELETE)"
create_file "${SRC}State/Queries/ItemQueries.ts" "// Gère les lectures optimisées (SELECT, FILTER)"
create_file "${SRC}State/Commands/CommandHandler.ts" "${EMPTY_TS}"
create_file "${SRC}State/Queries/QueryHandler.ts" "${EMPTY_TS}"


# D. Configuration (Internationalisation et Thèmes)
create_dir "${SRC}Config/i18n/locales/fr"
create_dir "${SRC}Config/themes"
create_dir "${SRC}Config/metrics" # Fichiers de configuration pour l'analyse

create_file "${SRC}Config/index.ts" "${EMPTY_TS}"
create_file "${SRC}Config/i18n/i18n.config.ts" "${EMPTY_TS}"
create_file "${SRC}Config/i18n/locales/fr/translation.json" "${EMPTY_JSON}"
create_file "${SRC}Config/themes/theme-switcher.ts" "${EMPTY_TS}"
create_file "${SRC}Config/metrics/analytics.ts" "${EMPTY_TS}" # Configuration de Google Analytics/Mixpanel


# E. Hooks (Avancés et spécifiques)
create_dir "${SRC}Hooks/data"
create_dir "${SRC}Hooks/ui"
create_dir "${SRC}Hooks/lifecycle"

create_file "${SRC}Hooks/index.ts" "${EMPTY_TS}"
create_file "${SRC}Hooks/data/useFetch.ts" "${EMPTY_TS}"
create_file "${SRC}Hooks/data/usePaginator.ts" "${EMPTY_TS}"
create_file "${SRC}Hooks/ui/useBreakpoint.ts" "${EMPTY_TS}"
create_file "${SRC}Hooks/ui/useA11yKeyboard.ts" "${EMPTY_TS}" # Accessibilité
create_file "${SRC}Hooks/lifecycle/useDidMount.ts" "${EMPTY_TS}"
create_file "${SRC}Hooks/lifecycle/useUnsavedChanges.ts" "${EMPTY_TS}"


# F. Composants (Structure massive et focus Accessibilité/Utility)
create_dir "${SRC}Components/base/Button" # Existe déjà, on l'ajoute pour l'exhaustivité
# NOUVEAUX DOSSIERS
create_dir "${SRC}Components/accessibility"
create_dir "${SRC}Components/utility"
create_dir "${SRC}Components/layouts" # Renommé
create_dir "${SRC}Components/form/validation"

create_file "${SRC}Components/index.ts" "${EMPTY_TS}"

# Composants d'Accessibilité (A11Y)
for COMP in "SkipLink" "VisuallyHidden" "LiveRegion"; do
    create_dir "${SRC}Components/accessibility/${COMP}"
    create_file "${SRC}Components/accessibility/${COMP}/${COMP}.tsx" "${EMPTY_TS}"
done

# Composants Utility
for COMP in "FocusTrap" "Portal" "ResizeObserver" "SuspenseFallback"; do
    create_dir "${SRC}Components/utility/${COMP}"
    create_file "${SRC}Components/utility/${COMP}/${COMP}.tsx" "${EMPTY_TS}"
done

# Formulaires (Gestion de la validation)
create_file "${SRC}Components/form/validation/FieldError.tsx" "${EMPTY_TS}"
create_file "${SRC}Components/form/validation/FormContainer.tsx" "${EMPTY_TS}"

# Nouveaux composants de base/données
for COMP in "Calendar" "Tag" "BreadcrumbItem" "SideSheet" "EmptyState" "Kbd"; do
    create_dir "${SRC}Components/base/${COMP}"
    create_file "${SRC}Components/base/${COMP}/${COMP}.tsx" "${EMPTY_TS}"
done

# G. Features (CQRS appliqué)
create_dir "${SRC}Features/items/Application/Commands"
create_dir "${SRC}Features/items/Application/Queries"
create_dir "${SRC}Features/items/UI/components"
create_dir "${SRC}Features/items/Infrastructure"

create_dir "${SRC}Features/router" # Gestion du routing avancé
create_dir "${SRC}Features/service-worker" # Pour le PWA/Cache

# Feature Items (Exemple de CQRS)
create_file "${SRC}Features/items/index.ts" "${EMPTY_TS}"
create_file "${SRC}Features/items/Application/Commands/CreateItemHandler.ts" "// UseCase d\'écriture"
create_file "${SRC}Features/items/Application/Queries/GetItemsQuery.ts" "// UseCase de lecture"
create_file "${SRC}Features/items/UI/components/ItemListView.tsx" "${EMPTY_TS}"
create_file "${SRC}Features/items/UI/components/ItemForm.tsx" "${EMPTY_TS}"
create_file "${SRC}Features/items/Infrastructure/ItemHttpAdapter.ts" "// Implémente ItemRepositoryPort"

# Feature Routing
create_file "${SRC}Features/router/Router.tsx" "${EMPTY_TS}"
create_file "${SRC}Features/router/routes.ts" "${EMPTY_TS}"
create_file "${SRC}Features/router/ProtectedRoutes.tsx" "${EMPTY_TS}"

# Feature PWA/Offline
create_file "${SRC}Features/service-worker/register.ts" "${EMPTY_TS}"
create_file "${SRC}Features/service-worker/sw.ts" "// Contenu du Service Worker"


# H. Pages (Séparation par Layout)
create_dir "${SRC}Pages/AuthLayout"
create_dir "${SRC}Pages/MainLayout"

create_file "${SRC}Pages/index.ts" "${EMPTY_TS}"
create_file "${SRC}Pages/MainLayout/DashboardPage.tsx" "${EMPTY_TS}"
create_file "${SRC}Pages/MainLayout/WardrobeListPage.tsx" "${EMPTY_TS}"
create_file "${SRC}Pages/AuthLayout/LoginPage.tsx" "${EMPTY_TS}"
create_file "${SRC}Pages/AuthLayout/RegisterPage.tsx" "${EMPTY_TS}"


echo "-----------------------------------------------------------------------------"
echo "✅ Création de la méga-structure ULTIME et des fichiers vides terminée !"
echo ""
echo "Le répertoire '$PROJECT_ROOT' est basé sur une architecture solide (CQRS + Hexagonal) et prêt pour un développement à grande échelle."
echo ""
echo "Prochaines étapes pour démarrer (avec Node.js/npm installés) :"
echo "1. Allez dans le répertoire : **cd $PROJECT_ROOT**"
echo "2. Remplissez les fichiers de configuration de base (package.json, tsconfig.json)."
echo "3. Installez les dépendances : **npm install** (ou yarn/pnpm)"
echo "4. Commencez à coder en respectant les couches architecturales !"