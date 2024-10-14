const path = require("path");
const SimpleProgressWebpackPlugin = require("simple-progress-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",

    resolve: {
        extensions: [".ts", ".js"],
    },

    entry: path.join(__dirname, "src", "app", "main.ts"),

    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist"),
        clean: true,
    },

    stats: "errors-only",

    plugins: [
        new SimpleProgressWebpackPlugin({
            // format: 'minimal'
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
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
                use: ["to-string-loader", "html-loader"],
            },
            {
                test: /\.scss$/,
                use: ["to-string-loader", "css-loader", "sass-loader"],
            },
        ],
    },
};
