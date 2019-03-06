const path = require("path");
module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
    publicPath: "/dist/",
    chunkFilename: "[name].[chunkhash:5].chunk.js"
  },

  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      /**加载css */
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
        include: /node_modules/
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?modules",
        exclude: /node_modules/
      },
      /**加载文件 */
      { test: /\.(png|jpe?g|gif)/, loader: "file-loader" },
      /** 按需加载 */
      {
        test: /src\/containers(\/.*).(tsx|ts)/,
        loader: "bundle-loader?lazy!ts-loader"
      }
    ]
  },
  // resolve: {
  //   alias: {
  //     assets: path.resolve(__dirname, "./src/assets")
  //   }
  // },
  plugins: []
};
