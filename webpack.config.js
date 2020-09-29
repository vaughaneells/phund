const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './client/src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './client/dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-transform-runtime']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      }
    ]
  },
  externals: {
    // global app config object
    config: JSON.stringify({
      apiUrl: 'http://localhost:3000',
      truliooUrl: 'https://gateway.trulioo.com/trial',
      truliooKey: '5d657c2582074bc596d82ea1c4ca7a32'
    })
  }
};
