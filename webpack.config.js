const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i, 
        loader: 'file-loader',
        options: {
          name: '/public/assets/[name].[ext]'
        }
    },
    {
      test: /\.(sass|less|css)$/,
      loaders: ['style-loader', 'css-loader', 'less-loader']
    }
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: 'public',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/dist'),
  },
};
