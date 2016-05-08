var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var PACKAGE_JSON = require('./package.json');

/**
 * This is the Webpack configuration file for production.
 */
module.exports = {
    entry: "./src/index",

    target: 'node', // in order to ignore built-in modules like path, fs, etc.

    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder

    output: {
        libraryTarget: 'umd',
        path: __dirname + "/dist/",
        filename: PACKAGE_JSON.name + ".js"
    },

    plugins: [
        new ExtractTextPlugin('style.css', {allChunks: true})
    ],

    module: {
        loaders: [
            {test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader"},
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
            }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    },

    postcss: [
        require('autoprefixer'),
        require('postcss-nested')
    ]
};