---
title: Começando
position: 2
category: Básico
---
Comece a usar a plataforma de documentação inspirada no módulo Nuxt, desenvolvida com o Netlify CMS. Suporta i18n, arquivos como Markdown, JSON, YAML e arquivos CSV. Ele atua como um  **CMS sem cabeça baseado em Git** .

## Iniciar colaboração

É fácil começar a escrever a documentação do projeto. Basta implantá-lo no `Netlify` com um clique.

## Escrever artigos

Uma vez implantado com sucesso, vá para a rota `/ admin`. Habilite Git-Gateway no Netlify para iniciar o login na plataforma.

## Editar ícone

Faça upload de imagens com os nomes `logo-dark.png` e`logo-light.png`.

Nota: Você pode editar o arquivo de configurações para usar um nome diferente.

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