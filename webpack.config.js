var webpack = require("webpack");

module.exports = {
    entry: './src/scripts/index.js',
    output: {
        path: __dirname + '/public/scripts',
        filename: 'bundle.js',
        publicPath: '/public/',
    },
    module: {
        preLoaders: [
            { test: /\.tag$/, exclude: /node_modules/, loader: 'riotjs-loader', query: { type: 'babel' } }
        ],
        loaders: [
            { test: /\.js$|\.tag$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports?jQuery=jquery' },
            { test: /\.(woff2?|svg)$/, loader: 'url?limit=10000' },
            { test: /\.(ttf|eot)$/, loader: 'file' },
            { test: /\.css$/, loader: 'style!css' },
        ]
    },
    resolve: {
        extensions: ['', '.js', '.tag', ]
    },
    devtool: "source-map",
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.ProvidePlugin({
            riot: 'riot'
        }),
        new webpack.ProvidePlugin({
            jquery: 'jQuery',
            $: 'jQuery'
        })
    ]
}