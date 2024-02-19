export default defineNuxtConfig({
  devtools: { enabled: true },
  // dir
  srcDir: 'src/',

  css: ['~/assets/scss/index.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // imports
  imports: {
    dirs: ['stores/**'],
  },

  ssr: false,

  // build modules
  modules: [
    'nuxt-typed-router',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@vee-validate/nuxt',
  ],

  // runtime config
  runtimeConfig: {
    // apiSecret: 'token',
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

  // pinia config
  pinia: {
    autoImports: ['defineStore'],
  },

  // localization - i18n config
})
