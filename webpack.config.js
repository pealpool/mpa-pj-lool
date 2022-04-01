const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin()
    ],
    entry: {
        main: {
            import: [ //多个文件合并成一个main.js
                './src/app.js',
                './src/app2.js'
            ],
            dependOn: 'lodash', //声明依赖
        },
        main2:{
            import:'./src/app3.js',
            dependOn: 'lodash',
        },
        lodash: 'lodash', //单独打包出来
    }
}