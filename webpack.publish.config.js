//部署时候的配置文件

var path = require('path');
var webpack=require("webpack")

module.exports = {

      entry:
    {
        app:path.resolve(__dirname,'src/js/app.js'),
        vendors:['react','react-dom']
    },
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
    },
        plugins: [
        // 分离第三方应用插件,name属性会自动指向entry中vendros属性，filename属性中的文件会自动构建到output中的path属性下面
        new webpack.optimize.CommonsChunkPlugin({name: 'vendors', filename: 'vendors.js'}),
    
    ]

}