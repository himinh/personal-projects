export default defineNuxtConfig({
  // dir
  srcDir: 'src/',

  // imports
  imports: {
    dirs: ['stores/**'],
  },

  // build modules
  modules: [
    'nuxt-typed-router',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@element-plus/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    'nuxt-viewport',
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

  // css
  css: ['~/assets/scss/index.scss'],

  // ts
  typescript: {
    strict: true,
    shim: false,
  },

  // unocss config
  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    attributify: true, // enabled `@unocss/preset-attributify`,
    // icons: true, // enabled `@unocss/preset-icons`,

    // core options
    shortcuts: [],
    rules: [],
  },

  viewport: {
    breakpoints: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },
    defaultBreakpoints: {
      desktop: 'lg',
      mobile: 'xs',
      tablet: 'md',
    },
    fallbackBreakpoint: 'xs',
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/element/index.scss" as element;`,
        },
      },
    },
  },

  // pinia config
  pinia: {
    autoImports: ['defineStore'],
  },

  // element plus
  elementPlus: {
    icon: 'ElIcon',
    importStyle: 'scss',
  },

  // localization - i18n config
})
