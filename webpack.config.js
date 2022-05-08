const WebpackHtmlPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  // mode: "development",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    // filename: "myTool.js",
    // library: "myTool",
    // libraryTarget: "umd",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: true,
    compress: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: { chrome: "58", ie: "11" },
                    corejs: "3",
                    useBuiltIns: "usage",
                  },
                ],
              ],
            },
          },
          "ts-loader",
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new WebpackHtmlPlugin({
      template: "./index.html",
      filename: "index.html",
    }),
  ],
};
