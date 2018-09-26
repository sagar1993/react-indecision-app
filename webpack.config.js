const path = require('path');
// entry -> output

module.exports = {
    // webpack config details
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        // should be system path
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: [/node_modules/, "/src/playground/"]
        },{
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ] 
        }
    ]
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: path.join(__dirname, 'public'),
    }
};

// loader

// babel-core: allows to run babel from webpack 6.25.0
// babel-loader: webpack plugin 7.1.1