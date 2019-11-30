const typescript = require('neutrino-typescript');
const typescriptLint = require('neutrino-typescript-eslint');
const react = require('@neutrinojs/react');
const jest = require('@neutrinojs/jest');
const eslint = require('@neutrinojs/eslint');

module.exports = {
  use: [
    typescript(),
    typescriptLint(),
    eslint({ eslint: { baseConfig: { extends: [
      'eslint:recommended',
      'plugin:react/recommended',
    ] } } }),
    jest(),
    react({ html: { title: 'Typescript + React' } }),
  ],
};
