const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    plugins: [
        new HtmlWebpackPlugin({
        title: 'Restaurant Page',
        template: './src/index.html',

    }),
    ],
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
}

//use watch mode
//use eslint and prettier