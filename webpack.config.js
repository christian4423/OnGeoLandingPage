var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path")


module.exports = {
    entry: "./src/entry-js.js",
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, "/public/dist/js"),
        publicPath: "/public/",
        filename: 'bundle.js',
        chunkFilename: 'chunk.[name].[id].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                options: {
                    presets: ["es2015", "stage-0"]
                },
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(scss|sass)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader",
                        "sass-loader"
                    ]
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader",
                        "less-loader"
                    ]
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader:"file-loader",
                    options: {
                        limit: 500,
                        name: "../img/[name].[ext]"
                    }
                }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader:"file-loader",
                    options: {
                        limit: 500,
                        name: "../fonts/[name].[ext]"
                    }
                }]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "../css/bundle.css",
            disable: false,
            allChunks: true
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "window.Tether": 'tether',
            "Tether": 'tether'
        })
    ]
};