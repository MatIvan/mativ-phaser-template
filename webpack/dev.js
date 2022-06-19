'use strict';

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "eval-source-map",
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'project.bundle.js'
    },

    module: {
        rules: [
            {
                test: [/\.vert$/, /\.frag$/],
                use: "raw-loader",
            },
            {
                test: /\.(gif|png|jpe?g|svg|xml)$/i,
                use: "file-loader",
            },
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true)
        }),
		new HtmlWebpackPlugin({
			template: "./index.html",
			filename: "index.html",
			inject: "body",
		}),
    ]

};
