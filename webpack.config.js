const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './client/src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './client/dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  }
};
