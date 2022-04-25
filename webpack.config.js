const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    main: ['/src/index.ts', '/src/multiLang.ts'],
    canada: ['/src/canada.ts', '/src/helpers'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'src')]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    publicPath: 'public/dist',
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/dist')
  },
}