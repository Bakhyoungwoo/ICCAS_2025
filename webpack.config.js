// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.web.tsx',
  output: {
    path: path.resolve(__dirname, 'web-build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      'react-native$': 'react-native-web',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: `
        <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>React Native Web</title>
          </head>
          <body>
            <div id="root"></div>
          </body>
        </html>
      `,
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname),
    },
    port: 3000,
  },
};
