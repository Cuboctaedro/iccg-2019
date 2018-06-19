const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")


module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'static/assets'),
        filename: 'scripts.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "postcss-loader", 
                "sass-loader"
            ]
        }],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles.css"
        })
    ]
};
