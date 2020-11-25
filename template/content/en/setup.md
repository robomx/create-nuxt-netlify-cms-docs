---
title: Setup
description: ""
position: 3
category: Guide
---

It's easy to start with your first doc.

## Deploying

Use single-click deploy button from Netlify.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/<%= github %>)

## Set custom repo

[Fork](https://github.com/<%= github %>) the repo.

Then, clone it:

```
git clone <repo-url>
cd <repo-name>
yarn && yarn dev
```

## Configuring basic info

* Customise the UI.

```js[nuxt.config.js]
module.exports = {
  theme: {
    extend: {
      ...
    },
  },
}
```

Check out tailwind [documentation](https://tailwindcss.com/docs/configuration) for customizing UI as per your need.
