const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
path = require('path');


module.exports = {
    entry: './src/index.js',
    mode: 'development', // MODO DESARROLLO
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test:/\.s?css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.html$/, // LEER ARCHIVOS DEL TIPO
                loader: 'html-loader',
                options: {
                    minimize: false,
                },
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // EN DONDE ESTÁ
            filename: './index.html', // FILE NAME
        }),
        new HtmlWebpackPlugin({
            template: './src/login.html', // EN DONDE ESTÁ
            filename: './login.html', // FILE NAME
        }),
        new HtmlWebpackPlugin({
            template: './src/signup.html', // EN DONDE ESTÁ
            filename: './signup.html', // FILE NAME
        }),
        new HtmlWebpackPlugin({
            template: './src/remeras.html', // EN DONDE ESTÁ
            filename: './remeras.html', // FILE NAME
        }),
        new HtmlWebpackPlugin({
            template: './src/pantalones.html', // EN DONDE ESTÁ
            filename: './pantalones.html', // FILE NAME
        }),
        new HtmlWebpackPlugin({
            template: './src/camperas.html', // EN DONDE ESTÁ
            filename: './camperas.html', // FILE NAME
        }),
        new HtmlWebpackPlugin({
            template: './src/gorras.html', // EN DONDE ESTÁ
            filename: './gorras.html', // FILE NAME
        }),
        new HtmlWebpackPlugin({
            template: './src/calzado.html', // EN DONDE ESTÁ
            filename: './calzado.html', // FILE NAME
        }),
        new HtmlWebpackPlugin({
            template: './src/camisas.html', // EN DONDE ESTÁ
            filename: './camisas.html', // FILE NAME
        }),
        new MiniCssExtractPlugin({
            filename: 'main.[chunkhash].css',
            ignoreOrder: false,
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/assets',
                    to: 'assets/',
                },
            ],
        }),
        new MinifyPlugin(),
    ],
};