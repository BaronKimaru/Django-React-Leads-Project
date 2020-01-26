module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,  //in the regex, work with any js file
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"   // ensures we use babel to transpile our code
                }
            }
        ]
    }
}