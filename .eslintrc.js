module.exports = {
  root: true,

  env: {
    browser: true,
    es6: true,
    node: true,
  },

  plugins: ['vue'],

  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint',
  },

  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:vue/recommended',
  ],

  rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
    }],
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state'
      ]
    }]
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.vue'],
      },
      alias: {
        map: [['@', './src/']],
        extensions: ['.js', '.vue'],
      },
    },
  },
};
