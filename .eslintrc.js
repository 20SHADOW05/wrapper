module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'prettier', // must go last to override formatting rules
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
  'no-console': 'warn',

  // Allow ++ in for loops (Airbnb disallows it by default)
  'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

  // Don't require file extensions for js/json in imports
  'import/extensions': ['error', 'ignorePackages', {
    js: 'never',
    json: 'never',
  }],

  // Prettier handles formatting
  'indent': 'off',
  'linebreak-style': 'off',
  'quotes': 'off',
  'semi': 'off',

  // Optional: Turn off overly strict Airbnb rules
  'no-underscore-dangle': 'off',
  'no-param-reassign': 'off',
  'func-names': 'off',
  'prefer-destructuring': 'off',
  'object-curly-newline': 'off',

  // Optional: More relaxed line length
  'max-len': ['warn', { code: 100 }],

  // Optional: Warn instead of error for unused vars
  'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
};
