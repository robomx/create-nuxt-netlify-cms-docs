---
title: Configuração
position: 3
category: Guia
---
É fácil começar com seu primeiro documento.

## Implantando

Use o botão de implantação de um único clique do Netlify.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/MexsonFernandes/nuxt-netlify-doc)

## Definir repo personalizado

[Fork](https://github.com/MexsonFernandes/nuxt-netlify-doc) o repo.

Então, clone-o:

```
git clone <repo-url>
cd <repo-name>
yarn && yarn dev
```

## Configurando informações básicas

* Personalize a IU.

```js[nuxt.config.js]
module.exports = {
  theme: {
    extend: {
      ...
    },
  },
}
```

Verifique a [documentação](https://tailwindcss.com/docs/configuration) Tailwind para personalizar a IU de acordo com sua necessidade.