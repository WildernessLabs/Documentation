
const path = require('path');
const devMode = process.env.NODE_ENV !== 'production';

// Plugins
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = {
    mode : devMode ? 'development': 'production',
    entry: [
        path.resolve(__dirname, 'frontend/styles/main.sass'), 
        path.resolve(__dirname, 'frontend/js/main.js')
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: devMode ? false : true,
        }),
        new CopyWebpackPlugin([
            { from: 'frontend/assets', to: 'assets' }
        ]),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'styles/main.css'
        }),
        new SVGSpritemapPlugin('./frontend/assets/svgs/icons/*.svg',{
            output: {
                filename: 'assets/svgs/icons/iconmap.svg'
            },
            styles: {
                filename: '~iconmap.scss'
            }
        }),
    ],
    optimization: {
        minimizer: [
            new TerserJSPlugin({}), 
            new OptimizeCSSAssetsPlugin({})
        ],
    },
    output: {
        path: path.resolve(__dirname, 'out/build'),
        publicPath: '/out/build',
        filename: 'js/[name].bundle.js',
    },
    devServer: {
        contentBase: path.join(__dirname, '/out'),
        compress: true,
        port: 9000,
        writeToDisk: true
    }
}