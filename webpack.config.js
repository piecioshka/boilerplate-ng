const path = require("path");
const SimpleProgressWebpackPlugin = require("simple-progress-webpack-plugin");

module.exports = {
    mode: "development",

    resolve: {
        extensions: [".ts", ".js"],
    },

    entry: path.join(__dirname, "app", "scripts", "main.ts"),

    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist"),
    },

    stats: "errors-only",

    plugins: [
        new SimpleProgressWebpackPlugin({
            // format: 'minimal'
        }),
    ],

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
            },
            {
                test: /\.html$/,
                loader: "html-loader",
            },
            {
                test: /index.html$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                loader: "raw-loader",
            },
        ],
    },
};
