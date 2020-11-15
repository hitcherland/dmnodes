const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new HTMLWebpackPlugin()]
}