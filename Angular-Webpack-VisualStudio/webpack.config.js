const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const source = path.resolve(__dirname, 'src', 'index.ts');
const destination = path.resolve(__dirname, 'dist');

module.exports = {
    entry: source,
    output: {
        filename: 'index.js',
        path: destination
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.(css|html)$/,
                loader: 'raw-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ]
};