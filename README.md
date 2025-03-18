# Projet CV Vue.js

## Objectif du projet
Ce projet est un site web de CV développé avec Vue.js, qui présente mon profil professionnel et mes projets GitHub. Il constitue une vitrine interactive de mes compétences et expériences.

## Fonctionnalités principales
- Page d'accueil avec présentation personnelle, expériences, compétences et formulaire de contact
- Page de projets qui récupère dynamiquement mes dépôts GitHub via l'API
- Navigation fluide grâce à Vue Router
- Gestion d'état centralisée avec Vuex
- Interfaces réactives et interactives

## Technologies utilisées
- Vue.js 3 avec Composition API
- Vue Router pour la navigation
- Vuex pour la gestion d'état
- Axios pour les requêtes HTTP

## Installation et démarrage

### Prérequis
- Node.js (version 14.x ou supérieure)
- npm ou yarn

### Installation
1. Clonez le dépôt:
```bash
git clone <votre-repo-url>
cd project-vue-cv
```

2. Installez les dépendances:
```bash
npm install
# ou
yarn install
```

3. Configuration de l'API GitHub:
Créez un fichier `.env` à la racine du projet et ajoutez votre nom d'utilisateur GitHub:
```
VUE_APP_GITHUB_USERNAME=votre-nom-utilisateur
```

### Démarrage de l'application
```bash
npm run dev
# ou
yarn dev
```

## Personnalisation
Pour personnaliser ce CV avec vos propres informations:
1. Modifiez le fichier `src/store/modules/profile.js` avec vos données personnelles
2. Remplacez le nom d'utilisateur GitHub dans le fichier `.env`
3. Personnalisez les styles dans `src/assets/css/main.css` ou dans les composants individuels