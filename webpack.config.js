const path = require("path");
const { ionWebpack, GenerateInfoFileWebpackPlugin } = require('ionweb-tools/webpack');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = ionWebpack({
  // entry: [
  //   './src/app/main.ts',
  // ],
  // output: {
  //   path: __dirname + '../dist/modules/ipm-automation/',
  //   filename: 'index.js',
  // },
  // mode: 'development',
  // resolve: {
  //   extensions: ['.ts', '.tsx', '.js', '.jsx'],
  // },
  // module: {
  //   rules: [
  //     { test: /\.tsx?$/, use: 'ts-loader' }
  //   ]
  // },
  plugins: [
    new GenerateInfoFileWebpackPlugin({
      entryPoint: path.join(__dirname, '/../dist/ipm-automation/main.js'),
      displayName: 'ipm-automation',
      requires: {
        libraries: [],
        files: [
          'runtime.js',
          'polyfills.js'
        ]
      }
    })
  ]
});
