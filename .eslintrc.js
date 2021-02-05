module.exports = {
  extends: 'eslint:recommended',
  overrides: [
    {
      files: ['*.js'],
      rules: {
        //"strict": "off",
        'no-unused-vars': 'off',
        'no-useless-escape': 'off',
        'no-mixed-spaces-and-tabs': 'off',
        //"no-prototype-builtins": "off",
        //"no-empty": "off",
        'no-undef': 'off',
        //"no-case-declarations": "off",
        //"no-dupe-keys": "off"
      },
    },
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
  },
  globals: {
    htool: false,
  },
};
