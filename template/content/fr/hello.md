---
title: Commencer
position: 2
category: De base
---
Démarrez avec la plate-forme de documentation inspirée du module Nuxt développée à l'aide du CMS Netlify. Il prend en charge i18n, des fichiers tels que les fichiers Markdown, JSON, YAML et CSV. Il agit comme un ** CMS Headless basé sur Git **.

## Démarrer la collaboration

Il est facile de commencer à rédiger la documentation de votre projet. Déployez simplement ceci sur `Netlify` en un seul clic.

## Rédaction d'articles

Une fois le déploiement réussi, rendez-vous sur la route `/admin`. Activez Git-Gateway sur Netlify pour commencer à vous connecter à la plateforme.

## Icône Modifier

Téléchargez des images avec les noms `logo-dark.png` et `logo-light.png`.

Remarque: vous pouvez modifier le fichier de paramètres pour utiliser un nom différent.

```js[content/settings.json]
{
  ...
  "logo": {
    "light": "/images/<light-mode-name>.png",
    "dark": "/images/<dark-mode-name>.png"
  },
  ...
}
```