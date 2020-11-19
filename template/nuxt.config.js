import theme from '@nuxt/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#E24F55',
  },
  i18n: {
    locales: () => [
      {
        code: 'fr',
        iso: 'fr-FR',
        file: 'fr-FR.js',
        name: 'Français',
      },
      {
        code: 'pt',
        iso: 'pt-PT',
        file: 'pt-PT.js',
        name: 'Português',
      },
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js',
        name: 'English',
      },
    ],
    defaultLocale: 'en',
  },
  pwa: {
    manifest: {
      name: 'Nuxt Netlify CMS',
    },
  },
})
