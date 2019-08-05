const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = () => ({
    output: {
        filename: "victor.js"
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx?)$/,
            loader: "babel-loader",
            options: {
                configFile: path.resolve("babel.config.js")
            },
          },
          {
            test: /\.css$/,
            use: [
              "css-loader",
            ]
          },
          {
            test: /\.svg$/,
            use: [
              {
                loader: "svg-sprite-loader",
                options: {
                  extract: false,
                }
              },
            ],
          },
        ]
      }
})