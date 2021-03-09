//引入一个包
const path = require("path")
    // 引入html插件
const HTMLWabpackPlugin = require("html-webpack-plugin")
    // 引入clean插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
    //是否生产环境
const isProduction = process.env.NODE_ENV === "production"

function resolve(dir) {
    return path.resolve(__dirname, '..', dir)
}

module.exports = {
    mode: isProduction ? "production" : "development",
    // 指定入口文件
    entry: "./src/main.ts",
    output: {
        //指定打包文件的目录
        path: resolve("dist"),
        filename: '[name].[contenthash:8].js',
        // 告诉webpack不使用箭头函数
        // environment: {
        //     arrowFunction: false
        // }
    },
    //指定webpack打包是要使用的模块
    module: {
        // 指定要加载的规则
        rules: [{
            // test 指定的是规则生效的文件
            test: /\.ts$/,
            use: 'ts-loader',
            include: [resolve("src")]
        }]
    },
    plugins: [
        new CleanWebpackPlugin({}),
        new HTMLWabpackPlugin({
            template: "./public/index.html",
        }),

    ],
    // 用来设置引用模块
    resolve: {
        extensions: ['.ts', '.js']
    },
    devtool: isProduction ? "cheap-module-source-map" : 'cheap-module-eval-source-map',
    devServer: {
        host: "localhost", //主机名
        stats: 'errors-only', //打包日志输出错误信息
        port: 8081, //定了开启服务的端口号
        open: true //浏览器自动打开
    }
}