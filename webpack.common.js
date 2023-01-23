const path = require("path");

const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
    clean: true,
    publicPath: "/",
  },
  plugins: [
    new BundleAnalyzerPlugin({ analyzerMode: "disabled" }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public"),
          to: path.resolve(__dirname, "dist"),
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
      filename: "index.html",
    }),
    new ImageMinimizerPlugin({
      test: /\.(jpe?g|png)$/i,
      minimizer: {
        implementation: ImageMinimizerPlugin.sharpMinify,
        options: {
          encodeOptions: {
            jpeg: {
              quality: 70,
              progressive: true,
              mozjpeg: true,
            },
          },
        },
      },
      generator: [
        {
          preset: "webp",
          implementation: ImageMinimizerPlugin.sharpGenerate,
          options: {
            resize: {
              enabled: true,
              width: 480,
            },
            encodeOptions: {
              webp: {
                quality: 80,
              },
            },
          },
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(jpe?g|png)$/i,
        type: "asset",
        generator: {
          filename: "images/[name].[hash].[ext]",
        },
      },
    ],
  },
};
