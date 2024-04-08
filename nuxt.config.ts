// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint'],
  devtools: { enabled: true },
  eslint: {
    config: {
      typescript: true,
      stylistic: {
        quotes: 'single',
        semi: false,
        arrowParens: false,
        indent: 2,
        commaDangle: 'always-multiline',
        blockSpacing: true,
      },
    },
  },
});
