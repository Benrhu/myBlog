import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'La Locura de Rubén',
  description: 'Blog oficial de La Locura de Rubén',
  head: [
    ['meta', { name: 'twitter:site', content: '@rubdh89' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ],
  ]
})
