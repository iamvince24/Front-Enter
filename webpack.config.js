const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: {
    article: "./src/article.js",
    common: "./src/common.js",
    contact: "./src/contact.js",
    content: "./src/content.js",
    index: "./src/index.js",
    profile: "./src/profile.js",
    skilltree: "./src/skilltree.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        // use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      overrideBrowserslist: ["> 1%", "last 2 versions"],
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
