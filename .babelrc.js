module.exports = {
  presets: [
    ['@babel/preset-env'],
    ['@babel/preset-stage-0', { decoratorsLegacy: true }],
    '@babel/preset-react',
  ],
  plugins: [
    'babel-plugin-emotion',
    'babel-plugin-macros',
    [
      '@babel/plugin-transform-runtime',
      {
        polyfill: false,
        regenerator: true,
      },
    ],
  ],
};