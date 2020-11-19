

const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')


module.exports = {
  entry: path.resolve(__dirname, './client/src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './client/dist')
  },
  watch: true,
  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 3000,
      server: { baseDir: [path.resolve(__dirname, './client/dist')] }
    })
  ],
 
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
        test: /\.less$/,
    use: [
        { loader: "style-loader" },
        { loader: "css-loader" },
        {
            loader: "less-loader",
            options: {
                lessOptions: {
                  modifyVars: {                               
                               'layout-body-background': '#E7F4FD',
                               'layout-footer-background': '#E7F4FD',
                               'layout-footer-padding': '0px 0px',
                               'menu-bg': '##E7F4FD',
                               'font-family': 'Raleway, sans-serif',                               
                             },
                    javascriptEnabled: true,
                }
            }
        }
    ]
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.svg$/,
        use: [
            {
                loader: 'svg-url-loader',
                options: {
                    limit: 10000,
                    name: '[path][name].[ext]',
                },
            },
        ],
    },
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
