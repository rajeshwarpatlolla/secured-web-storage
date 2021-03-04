const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    // export to AMD, CommonJS, or window
    libraryTarget: 'umd',
    // the name exported to window
    library: 'SecureStorageWeb',
    path: path.resolve(__dirname, 'dist'),
    filename: 'secure-storage-web.js',
  },
  resolve: {
    fallback: {
      crypto: false,
    },
  },
};
