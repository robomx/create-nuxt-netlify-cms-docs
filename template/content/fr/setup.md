---
title: Installer
position: 3
category: Guider
---
Il est facile de commencer avec votre premier document.

## Déploiement

Utilisez le bouton de déploiement en un seul clic de Netlify.

[![Déployer sur Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/MexsonFernandes/nuxt-netlify-doc)

## Définir un dépôt personnalisé

[Fork](https://github.com/MexsonFernandes/nuxt-netlify-doc) le dépôt.

Ensuite, clonez-le:

```
git clone <repo-url>
cd <repo-name>
yarn && yarn dev
```

## Configuration des informations de base

* Personnalisez l'interface utilisateur.

```js[nuxt.config.js]
module.exports = {
  theme: {
    extend: {
      ...
    },
  },
}
```

Consultez tailwind [documentation](https://tailwindcss.com/docs/configuration) pour personnaliser l'interface utilisateur selon vos besoins.