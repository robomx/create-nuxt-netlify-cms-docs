---
title: Getting started
description: Get started with Nuxt module inspired documentation platform
  developed using Netlify CMS. It supports i18n, files like Markdown, JSON, YAML
  and CSV files. It acts as a Git-based Headless CMS.
position: 2
category: Basic
---

Get started with Nuxt module inspired documentation platform developed using Netlify CMS. It supports i18n, files like Markdown, JSON, YAML and CSV files. It acts as a **Git-based Headless CMS**.

## Start collaboration

Its easy to start writing your project documentation. Just deploy this to `Netlify` with one click.

## Writing articles

Once successfully deployed, head over to `/admin` route. Enable Git-Gateway on Netlify to start logging onto the platform.

## Edit icon

Upload images with names `logo-dark.png` and `logo-light.png`.

Note: You can edit the settings file to use different name.

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
