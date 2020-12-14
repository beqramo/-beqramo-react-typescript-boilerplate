/* eslint-disable @typescript-eslint/no-var-requires */
const { override, addBabelPlugin } = require('customize-cra');

module.exports = override(
  addBabelPlugin([
    'babel-plugin-styled-components',
    {
      displayName: true,
    },
  ]),
);
