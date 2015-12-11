import path from 'path';
import webpack from 'webpack';

export default {
  devtool: 'source-map',
  entry: [
    './src/main'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
    port: 3000
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};