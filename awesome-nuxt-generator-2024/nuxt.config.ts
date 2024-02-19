// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // dir
  srcDir: 'src/',

  // imports
  imports: {
    dirs: ['stores/**'],
  },

  // build modules
  modules: ['@vueuse/nuxt', '@pinia/nuxt', 'nuxt-primevue'],

  css: [
    'primevue/resources/themes/lara-light-green/theme.css',
    'primeicons/primeicons.css',
  ],

  ssr: false,

  // runtime config
  runtimeConfig: {
    // apiSecret: "token",
    app: {
      // baseURL: 'http://localhost:3000',
    },
    public: {
      apiBase: process.env.API_BASE_URL,
      firebaseConfig: {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID,
        measurementId: process.env.FIREBASE_MEASUREMENT_ID,
      },
    },
  },

  // ts
  typescript: {
    strict: true,
    shim: false,
  },

  primevue: {
    cssLayerOrder: 'reset,primevue',
    usePrimeVue: true,
  },
})
