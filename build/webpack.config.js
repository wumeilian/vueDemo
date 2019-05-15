const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebapckPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: 'development',
    entry: {
        //配置入口文件
        main: ["@babel/polyfill", path.resolve(__dirname, '../src/main.js')]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    output: {
        // 配置打包文件输出目录
        path: path.resolve(__dirname, '../dist'),
        // 生成的js文件名称
        filename: 'js/[name].js',
        // 生成的chunk名称
        chunkFilename: 'js/[name].js',
        // 资源引用路径
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }, {
                test: /\.(scss|sass)$/,
                use: [
                    {
                        // loader: 'style-loader'
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('dart-sass')
                        }
                    }, {
                        loader: 'postcss-loader'
                    }
                ]
            }, { // 图片和字体
                test: /\.(png|svg|jpe?g|icon|gif|eot|ttf|woff2?)$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 500,
                        name: 'imgs/[name].[ext]'
                    }
                }]
            }, {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'cache-loader',
                    }, 
                    {
                        loader: 'thread-loader',
                    },
                    {
                        loader: 'vue-loader',
                        options: {
                            compilerOptions: {
                                preserveWhitespace: false
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: devMode  ? 'css/[name].css' : 'css/[name].[hash].css',
            chunkFilename: devMode ? 'css/[id].css' : 'css/[id].[hash].css'
        }),
        new HtmlWebpackPlugin({
            // title: 'html test',
            // filename: '',
            template: 'public/index.html'
        }),
        new CleanWebapckPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin()
    ]
}