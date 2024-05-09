export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  loading: {
    height: '4px',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Infinite Marquee by Kolapo',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'keywords',
        content:
          'Kolapo, Kolapo oni, kolapo oni experiment, web experiment, infinite marquee by kolapo',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'An infinite marquee demo. Made with love & music by Kolapo.',
      },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:url',
        content: 'https://infinite-marquee.netlify.app/meta-image.jpg',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Infinite Marquee by Kolapo',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://infinite-marquee.netlify.app/meta-image.jpg',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'An infinite marquee demo. Made with love & music by Kolapo.',
      },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: '' },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: 'Infinite Marquee',
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: 'An infinite marquee demo. Made with love & music by Kolapo.',
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: 'https://infinite-marquee.netlify.app/meta-image.jpg',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  env: {},

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
  },
  styleResources: {
    scss: [
      '~/assets/scss/core/_variables.scss',
      '~/assets/scss/mixins/_mediaqueries.scss',
    ],
  },
}
