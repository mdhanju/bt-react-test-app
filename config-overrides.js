const webpack = require('webpack');
const ENV = process.env.NODE_ENV;
const PUBLIC_WEB_CONTEXT = '/'; // Use can put your Public Web Context if any here

const ASSET_PATH =
    ENV === 'development' || ENV === 'test' ? '/' : PUBLIC_WEB_CONTEXT;

module.exports = function override(config, env) {
    if (!config.plugins) {
        config.plugins = [];
    }
    if (!config.output) {
        config.output = [];
    }
    config.output.publicPath = ASSET_PATH;
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
        })
    );

    return config;
};
// Try the environment variable, otherwise use root
