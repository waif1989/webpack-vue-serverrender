/**
 * Created by chensiwei on 2017-4-21.
 */
const fs = require('fs')
const path = require('path');
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const rootdir = process.cwd();
const fileList = [];
const dirList = fs.readdirSync(path.resolve(rootdir, 'src/views'));
const len = dirList.length;
let i = 0;
while (i != len) {
    const obj = {
        target: 'node', // !different
        entry: path.resolve(rootdir, `src/views/${dirList[i]}/${dirList[i]}-server.js`),
        output: {
            libraryTarget: 'commonjs2', // !different
            path: path.resolve(rootdir, 'dist'),
            filename: `js/server-js/${dirList[i]}.server.js`,
        },
        module: {
            loaders: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            css: ExtractTextPlugin.extract({
                                use: ['css-loader', 'less-loader'],
                                fallback: 'vue-style-loader'
                            }),
                            less: ExtractTextPlugin.extract({
                                use: ['css-loader', 'less-loader'],
                                fallback: 'vue-style-loader'
                            })
                        }
                    }
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader?presets=es2015',
                    include: path.resolve(rootdir, 'src'),
                    exclude: /node_modules/,
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[ext]?[hash]'
                    }
                },
                {
                    test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: 'url-loader?name=css/fonts/[name].[ext]',
                },
                {
                    test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                    loader: 'file-loader?name=css/fonts/[name].[ext]',
                },
                {
                    test: /\.css$/,
                    use: [{
                        loader: "style-loader" // creates style nodes from JS strings
                    }, {
                        loader: "css-loader" // translates CSS into CommonJS
                    }, {
                        loader: "less-loader" // compiles Less to CSS
                    }]
                },
                {
                    test: /\.less$/,
                    use: [{
                        loader: "style-loader" // creates style nodes from JS strings
                    }, {
                        loader: "css-loader" // translates CSS into CommonJS
                    }, {
                        loader: "less-loader" // compiles Less to CSS
                    }]
                }
            ]
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: true,
                compress: {
                    warnings: false
                }
            }),
            new OptimizeCssAssetsPlugin(), // 压缩css
            new CopyWebpackPlugin([ // 复制文件
                { from: path.resolve(rootdir, 'src/assets/html-template'), to: path.resolve(rootdir, 'dist/assets/html-template') },
                { from: path.resolve(rootdir, 'src/assets/lib'), to: path.resolve(rootdir, 'dist/assets/lib') }
                ]),
            new webpack.optimize.CommonsChunkPlugin({
                name: "vendor",
                chunks: fileList,
                minChunks: fileList.length
            }),
            new ExtractTextPlugin({
                filename: `css/${dirList[i]}.css`,
                // filename: "css/[name].css",
                allChunks: true
            })
        ]
    }
    fileList.push(obj)
    i++
}
module.exports = fileList
