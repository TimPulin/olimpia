
// eslint-disable-next-line no-undef
module.exports = {
  settings: {
    "import/resolve": {
      "eslint-import-resolver-custom-alias": {
        "alias": {
          "@": "./src",
          "@components": "./src/components"
        }
    }
  },

  env: {
    browser: true,
    es2021: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'airbnb',
    "airbnb-base",
    'prettier',
  ],

  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  plugins: ['vue'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT',
        ],
        alphabetical: false,
      },
    ],
  },
}}

