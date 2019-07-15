const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.min.js",
        path: __dirname + "/dist"
    },
    
    mode:'development',
    
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],

    optimization : {
        splitChunks: {
            cacheGroups: {
                vendor:{
                    chunks:"all",
                    test: /node_modules\/react-dom/, // 把react-dom抽出来，比较大
                    name:"vendor",
                },
            }
        }
    }
}