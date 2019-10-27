const withSass = require('@zeit/next-sass');

module.exports = withSass({
    cssModules: true,
    cssLoaderOptions: {
        camelCase: true,
        namedExport: true,
        
    },
    webpack(config, options) {
        if (!options.isServer) {
            for (let entry of options.defaultLoaders.sass) {
                if (entry.loader === 'css-loader') {
                    entry.loader = 'typings-for-css-modules-loader';
                    break;
                }
            }
        }
        return config;
    },
});