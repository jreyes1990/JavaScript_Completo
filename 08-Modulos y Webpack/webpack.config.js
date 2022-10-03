const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',

    output: {
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    optimization: {},

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Mi webpack App',
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
}