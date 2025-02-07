const path = require('path');
const {
  useBabelRc,
  override,
  addWebpackModuleRule,
  addWebpackPlugin,
  setWebpackPublicPath,
  disableChunk,
  addWebpackAlias,
} = require('customize-cra');
const SpritePlugin = require('svg-sprite-loader/plugin');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = override(
  useBabelRc(),
  setWebpackPublicPath(process.env.REACT_APP_BASENAME || '/'),
  addWebpackPlugin(new SpritePlugin()),
  isDev && disableChunk(),
  !isDev &&
    addWebpackPlugin(
      new PrerenderSPAPlugin({
        routes: ['/'],
        staticDir: path.join(__dirname, 'build'),
      }),
    ),
  addWebpackAlias({
    ['react']: path.resolve(__dirname, './node_modules/react'),
    ['react-dom']: path.resolve(__dirname, './node_modules/react-dom'),
  }),
  addWebpackModuleRule({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      { loader: 'babel-loader' },
      {
        loader: '@linaria/webpack-loader',
        options: {
          cacheDirectory: 'src/.linaria_cache',
          sourceMap: isDev,
        },
      },
    ],
  }),
  addWebpackModuleRule({
    test: /-icon\.svg$/,
    use: [
      {
        loader: 'svg-sprite-loader',
      },
      {
        loader: 'svgo-loader',
      },
    ],
  }),
);
