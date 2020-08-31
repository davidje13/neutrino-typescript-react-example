const typescript = require('neutrinojs-typescript');
const typescriptLint = require('neutrinojs-typescript-eslint');
const react = require('@neutrinojs/react');
const jest = require('@neutrinojs/jest');
const eslint = require('@neutrinojs/eslint');

module.exports = {
  use: [
    typescript({ tsconfig: {
      compilerOptions: {
        strict: true,
        allowJs: true,
      },
    } }),
    typescriptLint(),
    eslint({ eslint: { baseConfig: { extends: [
      'eslint:recommended',
      'plugin:react/recommended',
    ] } } }),
    jest(),
    react({ html: { title: 'Typescript + React' } }),
  ],
};
