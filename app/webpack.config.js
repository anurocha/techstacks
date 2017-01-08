module.exports = {
  entry: ['./src/main.js',
            './src/chart.js',
            './src/teamlist.js',
            './src/datasvc.js'
             ],
  output: {
      path : 'dist',
      filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}