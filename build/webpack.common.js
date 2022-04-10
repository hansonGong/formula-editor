const path = require('path')

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  resolve: {
    extensions: ['.ts', '.less'],
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.ts$/,
        use: ['babel-loader', 'ts-loader'],
        include: /src/,
      },
    ],
  },
}
