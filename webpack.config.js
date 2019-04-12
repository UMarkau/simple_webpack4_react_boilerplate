const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: './src/public/index.html',
    filename: './index.html',
    favicon: './src/public/favicon.ico'
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
        path: path.resolve(__dirname, 'build'),
        filename: 'js/[name].[contenthash].js',
        publicPath: '/'
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    resolve: {
        alias: {
            Pages: path.resolve(__dirname, 'src/pages'),
            Components: path.resolve(__dirname, 'src/components'),
            Actions: path.resolve(__dirname, 'src/store/actions'),
            Reducers: path.resolve(__dirname, 'src/store/reducers'),
            Images: path.resolve(__dirname, 'src/assets/images')
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
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'images/[hash]-[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [htmlWebpackPlugin],
    devServer: {
        historyApiFallback: true
    },
    devtool: 'cheap-module-eval-source-map'
};
