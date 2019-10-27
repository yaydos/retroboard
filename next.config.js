const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    webpack: (config, options) => {
        config.plugins.push(new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }));

        config.module.rules.push({
            test: /\.s[ac]ss$/i,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        // you can specify a publicPath here
                        // by default it uses publicPath in webpackOptions.output
                        // publicPath: '../',
                        hmr: process.env.NODE_ENV === 'development',
                    },
                },
                {
                    loader: 'typings-for-css-modules-loader?modules&namedExport&camelCase',
                    options: {
                        modules: true, // this option must be enabled
                        camelCase: true,
                        namedExport: true,
                        localIdentName: '[path][name]__[local]--[hash:base64:5]',
                    }
                },
                // Compiles Sass to CSS
                'sass-loader',
            ],
        })
        return config;
    }
};
