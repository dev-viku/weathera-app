/* eslint-disable prettier/prettier */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpackConfig = (env) => {
    return {
        entry: './src/index.tsx',
        mode: 'development',
        ...(env.production || !env.development ? {} : { devtool: 'eval-source-map' }),
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.sass', '.scss', '.css', '.less'],
        },
        output: {
            path: path.join(__dirname, '/dist'),
            publicPath: '/',
            filename: 'build.js',
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                    },
                    exclude: /dist|node_modules/,
                },
                {
                    test: /\.s?css$/,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
                {
                    test: /\.(jpg|png|svg)$/,
                    use: {
                        loader: 'url-loader',
                    },
                },
            ],
        },
        plugins: [
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: 'src/*.*',
                        globOptions: {
                            dot: true,
                            gitignore: true,
                            ignore: ['**/index.html'],
                        },
                        to: '[name][ext]',
                    },
                ],
            }),
            new HtmlWebpackPlugin({
                title: 'weather-app',
                template: './src/index.html',
            }),
        ],
        devServer: {
            historyApiFallback: true,
            port: 3001,
        },
    };
};
module.exports = webpackConfig;
