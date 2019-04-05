const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html'
});

const CSSModuleLoader = {
    loader: 'css-loader',
    options: {
        modules: true,
        sourceMap: true,
        camelCase: true,
        localIdentName: '[name]_[local]__[hash:base64:5]'
    }
};

const CSSLoader = {
    loader: 'css-loader',
    options: {
        modules: false,
        sourceMap: true
    }
};

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                exclude: /\.module\.css$/,
                use: ['style-loader', CSSLoader, 'postcss-loader']
            },
            {
                test: /\.module\.css$/,
                use: ['style-loader', CSSModuleLoader, 'postcss-loader']
            },
            {
                test: /\.scss$/,
                exclude: /\.module\.scss$/,
                use: ['style-loader', CSSLoader, 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.module\.scss$/,
                use: ['style-loader', CSSModuleLoader, 'postcss-loader', 'sass-loader']
            }
        ]
    },
    plugins: [htmlWebpackPlugin]
};
