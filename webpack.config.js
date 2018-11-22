const path = require('path');

module.exports = {
    mode: 'development',

    resolve: {
        extensions: ['.ts', '.js']
    },

    entry: path.join(__dirname, 'app', 'main.ts'),

    output: {
        filename: 'main.js',
        path: path.join(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.css$/,
                loader: 'raw-loader'
            }
        ]
    }
};
