var path = require('path');

const webpack = require('webpack');
const OUT_DIR_ABS = path.resolve('./dist');

const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const WebpackEntryList = require('webpack-entry-list');

module.exports = {
  name: 'js-files',
  watch: true,
  mode: 'development',
  entry: WebpackEntryList.generateEntryList('src/modules'),
  output: {
    path: OUT_DIR_ABS,
    filename: './js/[name].bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      /* $: 'jquery',
      jQuery: 'jquery',
      Handlebars: 'handlebars.runtime' */
    }),
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 3000,
      server: { 
        baseDir: ['public'] 
      },
      serveStatic: [{
        route: '/dist',
        dir: 'dist'
      }]
    })
  ]
};