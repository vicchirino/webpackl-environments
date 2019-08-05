const webpack = require("webpack")
const modeConfig = env => require(`./webpack.${env}`)(env)
const webpackMerge = require("webpack-merge")

module.exports = ({ mode, presets } = { mode: "production", presets: []} ) => {
   return webpackMerge({
    mode,
    output: {
      filename: "bundle.js"
    },
    plugins: [new webpack.ProgressPlugin()]
   },
   modeConfig(mode))
}