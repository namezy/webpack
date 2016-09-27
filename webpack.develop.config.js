//开发时候的配置文件
// 这是最基本的一个配置文件
// 编写配置文件，要有最基本的文件入口和输出文件配置信息等
// 里面还可以加loader和各种插件配置使用
var path = require('path');

module.exports = {

      entry:[
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname,'src/js/app.js')
    ],

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
    loaders: [
        {
            test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
            loader: 'babel',// 加载模块 "babel" 是 "babel-loader" 的缩写
            query: {
                presets: ['es2015', 'react']
            }
        },
        {
 	        test: /\.css$/, // Only .css files
	        loader: 'style!css' // Run both loaders
        },
        {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=25000'
        }
    ]
}
}