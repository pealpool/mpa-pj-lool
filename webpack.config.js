const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            title: '多页面引用',
            template: "./index.html",
            inject: 'body', //注入body里面
            filename:'chanel1/index.html', //出口名
            chunks: ['main','lodash'], //定义哪些js放这个页面，不写就全部js放里面
            publicPath:'http://www.a.com/', //定义路径：连接会写成：http://www.a.com/main.js
        }),
        new HtmlWebpackPlugin({
            title: '多页面引用',
            template: "./index2.html",
            inject: 'body', //注入body里面
            filename:'chanel2/index2.html', //出口名
            chunks: ['main2','lodash'], //定义哪些js放这个页面
            publicPath:'http://www.b.com/', //定义路径：连接会写成：http://www.b.com/main.js
        }),
    ],
    entry: {
        main: {
            import: [ //多个文件合并成一个main.js
                './src/app.js',
                './src/app2.js'
            ],
            dependOn: 'lodash', //声明依赖
            filename: "chanel1/[name].js", //出口名
        },
        main2: {
            import: './src/app3.js',
            dependOn: 'lodash',
            filename: "chanel2/[name].js", //出口名
        },
        lodash: {
            import: 'lodash', //单独打包出来
            filename: "common/[name].js", //出口名
        }
    },
    output: {
        clean: true, //每次打包前清理dist
    }
}