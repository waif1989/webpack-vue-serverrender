/**
 * Created by chensiwei on 2017-4-21.
 */
const fs = require('fs')
const path = require('path');
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const rootdir = process.cwd()
const fileList = [];
const dirList = fs.readdirSync(path.resolve(rootdir, 'src/views'));
const len = dirList.length
let i = 0
while (i != len) {
    const obj = {
        entry: path.resolve(rootdir, `src/views/${dirList[i]}/${dirList[i]}-client.js`),
        output: {
            path: path.resolve(rootdir, 'dist'), // 打包后文件放置的文件目录（决定路径）
            // publicPath: "/",  // html引用的实际路径（绝对路径）
            filename: `js/client-js/${dirList[i]}.client.js`
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader?presets=es2015',
                    include: path.resolve(rootdir, 'src'),
                    exclude: /node_modules/,
                },
                {
                    test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: 'url-loader?name=css/fonts/[name].[ext]'
                },
                {
                    test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                    loader: 'file-loader?name=css/fonts/[name].[ext]'
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[ext]?[hash]'
                    }
                }
            ]
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin(),
            new webpack.optimize.CommonsChunkPlugin({ name: 'commons', filename: 'js/client-js/commons.client.js' }), // 提取公共js
        ]
    }
    fileList.push(obj)
    i++
}
module.exports = fileList
