const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        //配置入口文件
        main: ["@babel/polyfill", path.resolve(__dirname, '../src/main.js')]
    },
    output: {
        // 配置打包文件输出目录
        path: path.resolve(__dirname, '../dist'),
        // 生成的js文件名称
        filename: 'js/[name].[hash:8].js',
        // 生成的chunk名称
        chunkFilename: 'js/[name].[hash:8].js',
        // 资源引用路径
        publicPath: './'
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
                        loader: 'style-loader'
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
            }
        ]
    }
}