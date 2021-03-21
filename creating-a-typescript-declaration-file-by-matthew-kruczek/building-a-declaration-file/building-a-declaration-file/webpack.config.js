module.exports = {
    entry: './app/Communicator.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        modules: ["communicatorModularUMD", "communicatorModularAMD", "communicatorModularCJS"],
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js'
    },
    devServer: {
        inline: false
    }
};
