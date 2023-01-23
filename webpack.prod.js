const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const { InjectManifest } = require("workbox-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: false,
  output: {
    filename: "js/[name].[contenthash].js",
  },
  plugins: [
    new WebpackPwaManifest({
      id: "feedme-app",
      name: "FeedME",
      short_name: "FeedME",
      description: "Catalogue Retaurant App",
      start_url: "/",
      display: "standalone",
      background_color: "#fff",
      theme_color: "#d00",
      maskable_icon: true,
      ios: true,
      icons: [
        {
          src: path.resolve(__dirname, "src/images/icons/ios.png"),
          sizes: [120, 152, 167, 180, 1024],
          destination: path.join("icons"),
          ios: true,
        },
        {
          src: path.resolve(__dirname, "src/images/icons/android-chrome.png"),
          sizes: [36, 48, 72, 96, 144, 192, 512],
          destination: path.join("icons"),
        },
        {
          src: path.resolve(__dirname, "src/images/icons/icon.png"),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join("icons"),
        },
        {
          src: path.resolve(__dirname, "src/images/icons/icon.png"),
          size: "1024x1024",
          purpose: "maskable",
          destination: path.join("icons"),
        },
      ],
    }),
    new InjectManifest({
      swSrc: path.resolve(__dirname, "./src/service-worker.js"),
      swDest: "service-worker.js",
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
    }),
    new CompressionPlugin({
      algorithm: "brotliCompress",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.s[ac]ss/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
      new CssMinimizerPlugin({
        parallel: true,
      }),
      new HtmlMinimizerPlugin({
        parallel: true,
      }),
    ],
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /node_modules/,
          chunks: "initial",
          filename: "js/vendors.[contenthash].js",
        },
      },
    },
  },
});
